export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
}

/** Diagonal pergola shadows. Drifts with scroll (CSS scroll timeline). */
export function Pergola({
  variant = "wall",
}: {
  variant?: "wall" | "soft" | "dusk";
}) {
  const cls =
    variant === "soft"
      ? "pergola pergola-soft"
      : variant === "dusk"
        ? "pergola pergola-dusk"
        : "pergola";
  return <div aria-hidden className={cls} />;
}
