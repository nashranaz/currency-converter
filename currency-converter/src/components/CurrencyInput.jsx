export default function CurrencyInput({ amount, onAmountChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">Amount</span>
      <div className="flex items-center rounded-xl border border-white/10 bg-[#111322]/90 px-4 transition focus-within:border-violet-400/60 focus-within:ring-4 focus-within:ring-violet-500/10">
        <input
          value={amount}
          onChange={(event) => onAmountChange(event.target.value)}
          inputMode="decimal"
          type="number"
          min="0"
          step="any"
          placeholder="1,000"
          className="min-w-0 flex-1 bg-transparent py-4 text-xl font-semibold text-white outline-none placeholder:text-slate-600 sm:text-2xl"
        />
        <span className="ml-3 text-sm text-slate-500">amount</span>
      </div>
    </label>
  )
}
