// src/app/(site)/layout.tsx
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col text-[#1C2A27]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[-1] h-[420px] bg-gradient-to-b from-white/70 via-[#E9FCF6]/80 to-transparent" />
      <div className="pointer-events-none fixed -left-24 top-1/4 z-[-1] hidden h-96 w-96 rounded-full bg-[#c8f8eb]/60 blur-3xl md:block" />
      <div className="pointer-events-none fixed bottom-[-120px] right-[-80px] z-[-1] h-[420px] w-[420px] rounded-full bg-[#d3fff4]/55 blur-[180px]" />
      {children}
    </div>
  );
}
