interface LocationInfoProps {
  leftPosition: number;
  topPosition: number;
  location: string;
}

export function LocationInfo({
  leftPosition,
  topPosition,
  location,
}: LocationInfoProps) {
  return (
    <div
      style={{ top: `${topPosition}px`, left: `${leftPosition}px` }}
      className={
        "absolute bg-outer-space text-white p-5 rounded-md pointer-events-none text-sm transform -translate-x-1/2 -translate-y-full"
      }
    >
      {location === "NY"
        ? "🏠 Living in New York, NY"
        : "🌎 From Pasaje, Ecuador"}
    </div>
  );
}
