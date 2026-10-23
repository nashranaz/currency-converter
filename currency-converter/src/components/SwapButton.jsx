export default function SwapButton({ onSwap, rotating }) {
  return (
    <button
      type="button"
      onClick={onSwap}
      aria-label="Swap currencies"
      className="group grid size-11 shrink-0 place-items-center rounded-full border border-violet-300/30 bg-gradient-to-br from-violet-500 to-cyan-500 text-xl text-white shadow-[0_8px_30px_rgba(139,92,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(34,211,238,0.28)] focus:outline-none focus:ring-4 focus:ring-cyan-400/20"
    >
      <span className={`transition-transform duration-500 ${rotating ? 'rotate-180 md:rotate-[540deg]' : 'group-hover:rotate-180'}`} aria-hidden="true">⇄</span>
    </button>
  )
}
