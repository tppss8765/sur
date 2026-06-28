type Props = {
  children: React.ReactNode;
  tone?: "papaya" | "lime" | "turmeric" | "cream";
  className?: string;
};

const TONE_MAP: Record<string, string> = {
  papaya: "text-papaya",
  lime: "text-lime-deep",
  turmeric: "text-turmeric",
  cream: "text-cream/70",
};

export default function Eyebrow({ children, tone = "papaya", className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] ${TONE_MAP[tone]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </div>
  );
}
