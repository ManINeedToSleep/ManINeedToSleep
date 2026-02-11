export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-4">
      <div className="h-px flex-1 max-w-xs bg-border/20" />
      <div className="mx-4 flex items-center gap-2">
        <div className="h-1 w-1 rounded-full bg-primary/30" />
        <div className="h-px w-6 bg-primary/30" />
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="text-primary/30"
          aria-hidden="true"
        >
          <path
            d="M6 1L11 6L6 11L1 6Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <div className="h-px w-6 bg-primary/30" />
        <div className="h-1 w-1 rounded-full bg-primary/30" />
      </div>
      <div className="h-px flex-1 max-w-xs bg-border/20" />
    </div>
  )
}
