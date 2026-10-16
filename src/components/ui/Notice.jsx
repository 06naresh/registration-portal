import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function Notice({
  type = "error",
  title,
  children,
}) {
  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <div
      role={isSuccess ? "status" : "alert"}
      className={`mb-5 flex items-start gap-3 rounded-xl border p-3 text-xs ${
        isSuccess
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-rose-200 bg-rose-50 text-rose-800"
      }`}
    >
      <Icon size={19} className="mt-0.5 shrink-0" />

      <div>
        <strong className="mb-1 block font-bold">{title}</strong>
        <p className="leading-5">{children}</p>
      </div>
    </div>
  );
}