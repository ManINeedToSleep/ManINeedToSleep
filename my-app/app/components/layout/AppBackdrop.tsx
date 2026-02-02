export default function AppBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#fdf2ff,_#f8fafc_45%,_#eef2ff_100%)] dark:bg-[radial-gradient(circle_at_top,_#1f2937,_#0b1120_55%,_#020617_100%)]" />
      <div className="absolute inset-0 opacity-70">
        <div className="polkadot-layer animate-polkadot-fall" />
      </div>
      <div className="absolute -top-24 right-8 h-48 w-48 rounded-full bg-pink-400/30 blur-3xl dark:bg-fuchsia-500/20" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl dark:bg-sky-500/20" />
    </div>
  );
}
