export function AmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-background"
        aria-hidden
      />
      <div
        className="purple-flow-one pointer-events-none absolute inset-[-35%]"
        aria-hidden
      />
      <div
        className="purple-flow-two pointer-events-none absolute inset-[-40%]"
        aria-hidden
      />
    </>
  );
}
