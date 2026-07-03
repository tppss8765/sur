export function OrangeSlice({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="#E8542C" />
      <circle cx="100" cy="100" r="84" fill="#F2772E" />
      <circle cx="100" cy="100" r="74" fill="#FBF8F1" />
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const x1 = 100 + Math.cos(angle) * 8;
        const y1 = 100 + Math.sin(angle) * 8;
        const x2 = 100 + Math.cos(angle) * 72;
        const y2 = 100 + Math.sin(angle) * 72;
        return (
          <path
            key={i}
            d={`M${x1},${y1} L${x2},${y2}`}
            stroke="#F2BC1E"
            strokeWidth="2"
            opacity="0.5"
          />
        );
      })}
      <circle cx="100" cy="100" r="10" fill="#F2BC1E" opacity="0.8" />
    </svg>
  );
}

export function WatermelonSlice({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="#3B6B45" />
      <circle cx="100" cy="100" r="82" fill="#FBF8F1" />
      <circle cx="100" cy="100" r="74" fill="#E8542C" />
      {[
        [70, 70], [130, 75], [100, 95], [75, 120], [125, 125], [95, 60], [110, 140], [65, 100], [135, 100],
      ].map(([cx, cy], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="3.5"
          ry="5"
          fill="#16301F"
          transform={`rotate(${i * 23} ${cx} ${cy})`}
        />
      ))}
    </svg>
  );
}

export function PapayaSlice({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="#F2BC1E" />
      <circle cx="100" cy="100" r="84" fill="#F2772E" />
      <circle cx="100" cy="100" r="46" fill="#9FC131" opacity="0.25" />
      {Array.from({ length: 22 }).map((_, i) => {
        const angle = (i / 22) * Math.PI * 2;
        const r = 40 + (i % 3) * 3;
        const x = 100 + Math.cos(angle) * r;
        const y = 100 + Math.sin(angle) * r;
        return <circle key={i} cx={x} cy={y} r="3.2" fill="#16301F" />;
      })}
    </svg>
  );
}

export function LimeSlice({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="#7A9B22" />
      <circle cx="100" cy="100" r="84" fill="#9FC131" />
      <circle cx="100" cy="100" r="70" fill="#F2EDE0" />
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = (i / 9) * Math.PI * 2;
        const x1 = 100 + Math.cos(angle) * 6;
        const y1 = 100 + Math.sin(angle) * 6;
        const x2 = 100 + Math.cos(angle) * 68;
        const y2 = 100 + Math.sin(angle) * 68;
        return (
          <path
            key={i}
            d={`M${x1},${y1} L${x2},${y2}`}
            stroke="#9FC131"
            strokeWidth="3"
            opacity="0.6"
          />
        );
      })}
    </svg>
  );
}

/** A juice drop shape used in the hero drip animation */
export function JuiceDrop({ className = "", fill = "#E8542C" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={className} aria-hidden="true">
      <path
        d="M20 0C20 0 0 28 0 38C0 49.0457 8.9543 56 20 56C31.0457 56 40 49.0457 40 38C40 28 20 0 20 0Z"
        fill={fill}
      />
    </svg>
  );
}
