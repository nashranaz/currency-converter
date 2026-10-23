import { getCurrency } from '../data/currencies'

export default function ConversionResult({ result, amount, toCurrency, onCopy, copied }) {
  const currency = getCurrency(toCurrency)

  return (
    <div className="animate-[fadeIn_.45s_ease-out] rounded-xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] to-violet-500/[0.08] p-5 shadow-[0_16px_50px_rgba(34,211,238,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Converted amount</p>
          <p className="mt-2 break-all text-3xl font-bold text-white sm:text-4xl">
            {result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            <span className="ml-2 text-base font-semibold text-cyan-300">{toCurrency}</span>
          </p>
        </div>
        <button
          type="button"
          onClick={onCopy}
          title="Copy converted amount"
          className="shrink-0 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>
      <p className="mt-3 text-sm text-slate-500">
        {Number(amount).toLocaleString()} {currency.code} into {currency.name}
      </p>
    </div>
  )
}
