import { ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[75vh] flex-col items-start justify-center bg-[#070707] px-5 pt-28 text-white md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[.28em] text-white/40">404 / Page not found</p>
      <h1 className="mt-5 text-5xl font-semibold tracking-[-.06em] md:text-7xl">This road ends here.</h1>
      <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">The page may have moved or the address may be incorrect.</p>
      <a href="/" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 transition hover:bg-white/10"><ArrowLeft size={16} /> Back to home</a>
    </section>
  );
}
