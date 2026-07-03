type Props = {
  position: "top" | "bottom";
  color?: string;
  className?: string;
};

/** The jagged, peel-like edge used between sections — the page's signature motif. */
export default function PeelDivider({
  position,
  color = "var(--color-cream)",
  className = "",
}: Props) {
  return (
    <div
      className={`absolute inset-x-0 h-10 sm:h-14 ${
        position === "top" ? "-top-1 peel-edge-top" : "-bottom-1 peel-edge-bottom"
      } ${className}`}
      style={{ background: color }}
      aria-hidden="true"
    />
  );
}
