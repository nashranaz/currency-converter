import { getCurrency } from '../data/currencies'

export default function CurrencyInfo({ code }) {
  const currency = getCurrency(code)

  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{currency.flag}</span>
        <div>
          <p className="font-semibold text-white">{currency.name}</p>
          <p className="mt-0.5 text-xs text-slate-500">{currency.code} · {currency.symbol}</p>
        </div>
      </div>
    </div>
  )
}
