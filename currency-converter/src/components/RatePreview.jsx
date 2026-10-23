export default function RatePreview({ fromCurrency, toCurrency, rate }) {
  return (
    <div id="rates" className="flex min-h-16 items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Exchange rate</p>
        <p className="mt-1 text-sm font-semibold text-slate-200">
          1 {fromCurrency} = {rate ? Number(rate).toLocaleString(undefined, { maximumFractionDigits: 5 }) : '—'} {toCurrency}
        </p>
      </div>
      <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300">Live</span>
    </div>
  )
}
