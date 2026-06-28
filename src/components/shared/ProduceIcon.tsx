type Props = {
  color: string;
  className?: string;
  seed?: number;
};

/** A simple organic blob silhouette standing in for produce photography. */
export default function ProduceIcon({ color, className = "", seed = 0 }: Props) {
  const variants = [
    "M100,20 C140,20 175,50 178,90 C181,130 155,170 110,178 C65,186 25,155 22,110 C19,65 60,20 100,20 Z",
    "M100,25 C135,15 170,45 175,85 C180,130 160,165 115,180 C70,195 30,160 25,115 C20,70 65,35 100,25 Z",
    "M95,15 C130,25 165,40 175,80 C185,125 165,170 120,180 C70,190 25,160 20,110 C15,65 60,5 95,15 Z",
  ];
  const path = variants[seed % variants.length];
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path d={path} fill={color} opacity="0.92" />
    </svg>
  );
}
