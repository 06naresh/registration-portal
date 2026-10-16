import { useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useField } from "formik";

export default function PasswordField({
  name,
  label,
  placeholder,
}) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const [field, meta] = useField(name);

  const showError = meta.touched && meta.error;

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label
        htmlFor={id}
        className="text-xs font-bold text-slate-700"
      >
        {label} <span className="text-rose-500">*</span>
      </label>

      <div className="relative">
        <input
          {...field}
          id={id}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          autoComplete="new-password"
          aria-invalid={Boolean(showError)}
          aria-describedby={showError ? `${id}-error` : undefined}
          className={`h-11.25 w-full rounded-lg border bg-slate-50 px-3 pr-11 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100 ${
            showError ? "border-rose-400" : "border-slate-200"
          }`}
        />

        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-0 grid w-10 place-items-center text-slate-400 hover:text-brand"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {showError && (
        <p id={`${id}-error`} className="text-[10px] text-rose-600">
          {meta.error}
        </p>
      )}
    </div>
  );
}