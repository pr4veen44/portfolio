export function AmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-background"
        aria-hidden
      />
      <div
        className="ambient-glow-primary pointer-events-none absolute top-0 left-1/2 h-[min(75vh,560px)] w-[min(110vw,800px)] rounded-full bg-[radial-gradient(ellipse_at_center,var(--glow)_0%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="ambient-glow-secondary pointer-events-none absolute right-0 bottom-0 h-[min(50vh,420px)] w-[min(70vw,480px)] rounded-full bg-[radial-gradient(circle_at_center,var(--glow-secondary)_0%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="ambient-glow-tertiary pointer-events-none absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.07)_0%,transparent_70%)] sm:h-96 sm:w-96"
        aria-hidden
      />
    </>
  );
}
