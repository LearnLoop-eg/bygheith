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
    <section id={id} className={`mx-auto max-w-6xl px-6 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow">
      {index && <span className="mr-2">{index}</span>}
      {children}
    </p>
  );
}
