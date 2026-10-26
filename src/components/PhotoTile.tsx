export default function PhotoTile({ tile, className = "", label }: { tile: "student-one" | "student-two" | "student-three" | "campus" | "study" | "library"; className?: string; label: string }) {
  return <div className={`photo-tile photo-${tile} ${className}`} role="img" aria-label={label} />;
}
