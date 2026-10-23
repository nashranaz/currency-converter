export default function RateInformation({ updatedAt }) {
  const formattedTime = updatedAt
    ? updatedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : 'Waiting for update'

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div>
          <p className="text-sm font-semibold text-white">Market status</p>
          <p className="mt-1 text-xs text-slate-500">Rates refresh with each conversion</p>
        </div>
        <span className="size-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-slate-500">Last updated</p>
          <p className="mt-1 text-sm font-medium text-slate-200">{formattedTime}</p>
        </div>
        <span className="rounded-md bg-emerald-400/[0.08] px-2 py-1 text-[10px] font-bold uppercase text-emerald-300">Online</span>
      </div>
    </div>
  )
}
