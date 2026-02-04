export default function AppBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="theme-bg theme-bg-lavender absolute inset-0" />
      <div className="theme-bg theme-bg-fuchsia absolute inset-0" />
      <div className="absolute inset-0">
        <div className="polkadot-layer polkadot-lavender animate-polkadot-fall" />
        <div className="polkadot-layer polkadot-fuchsia animate-polkadot-fall" />
      </div>
      <div
        className="absolute -top-24 right-8 h-48 w-48 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--app-blob-1)" }}
      />
      <div
        className="absolute bottom-0 left-0 h-56 w-56 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--app-blob-2)" }}
      />
    </div>
  );
}
