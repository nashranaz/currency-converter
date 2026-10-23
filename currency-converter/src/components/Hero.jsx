export default function Hero() {
  return (
    <header className="mx-auto max-w-7xl px-5 pb-10 pt-12 text-center sm:px-8 sm:pt-16 lg:px-10">
      <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
        Real-time global exchange
      </div>
      <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        Convert money.<br className="hidden sm:block" /> Move with confidence.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
        Fast, transparent currency conversion powered by live market rates from around the world.
      </p>
    </header>
  )
}
