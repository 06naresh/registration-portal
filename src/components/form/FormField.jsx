import { useId } from "react";
import { useField } from "formik";

export default function FormField({ label, hint, ...props }) {
  const id = useId();
  const [field, meta] = useField(props.name);

  const showError = meta.touched && meta.error;

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-bold text-slate-700"
      >
        {label}
        {props.required && (
          <span className="text-rose-500"> *</span>
        )}
      </label>

      <input
        {...field}
        {...props}
        id={id}
        aria-invalid={Boolean(showError)}
        aria-describedby={
          showError
            ? `${id}-error`
            : hint
              ? `${id}-hint`
              : undefined
        }
        className={`h-11.25 w-full rounded-lg border bg-slate-50 px-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 ${
          showError ? "border-rose-400" : "border-slate-200"
        }`}
      />

      {showError ? (
        <p id={`${id}-error`} className="text-[10px] text-rose-600">
          {meta.error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-[10px] text-slate-400">
          {hint}
        </p>
      ) : null}
    </div>
  );
}