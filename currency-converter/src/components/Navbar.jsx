export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      <a href="#converter" className="flex items-center gap-3" aria-label="Flux Convert home">
        <span className="grid size-10 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-bold shadow-[0_0_28px_rgba(34,211,238,0.18)]">F</span>
        <span className="text-base font-bold tracking-tight text-white">Flux<span className="text-cyan-300">Convert</span></span>
      </a>
      <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
        <a className="transition hover:text-white" href="#converter">Converter</a>
        <a className="transition hover:text-white" href="#rates">Exchange rates</a>
        <a className="transition hover:text-white" href="#insights">Insights</a>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
        <span className="size-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
        Live rates
      </div>
    </nav>
  )
}
