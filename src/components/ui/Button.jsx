import { LoaderCircle } from "lucide-react";

export default function Button({
  children,
  loading = false,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-xs font-bold text-white shadow-lg shadow-violet-200/70 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
    >
      {loading ? (
        <>
          <LoaderCircle size={18} className="animate-spin" />
          Creating account…
        </>
      ) : (
        children
      )}
    </button>
  );
}