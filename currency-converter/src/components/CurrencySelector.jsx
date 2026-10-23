import { currencies } from '../data/currencies'

export default function CurrencySelector({ label, value, onChange }) {
  const selected = currencies.find((currency) => currency.code === value) || currencies[0]

  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      <div className="relative flex items-center rounded-xl border border-white/10 bg-[#111322]/90 px-4 transition focus-within:border-cyan-400/60 focus-within:ring-4 focus-within:ring-cyan-500/10">
        <span className="text-xl" aria-hidden="true">{selected.flag}</span>
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none bg-transparent py-4 pl-3 pr-8 text-sm font-semibold text-white outline-none sm:text-base"
        >
          {currencies.map((currency) => (
            <option className="bg-[#111322]" key={currency.code} value={currency.code}>
              {currency.code} - {currency.name}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 text-slate-500">⌄</span>
      </div>
    </label>
  )
}
