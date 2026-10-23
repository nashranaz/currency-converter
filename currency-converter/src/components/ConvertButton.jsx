export default function ConvertButton({ loading, onConvert }) {
  return (
    <button
      type="button"
      onClick={onConvert}
      disabled={loading}
      className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 px-6 py-4 text-sm font-bold text-white shadow-[0_14px_40px_rgba(124,58,237,0.24)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
    >
      {loading ? (
        <><span className="mr-3 size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Fetching live rate</>
      ) : (
        <>Convert currency <span className="ml-2 text-lg">→</span></>
      )}
    </button>
  )
}
