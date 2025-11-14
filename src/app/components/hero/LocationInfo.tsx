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
      className="absolute bg-gray-800/90 backdrop-blur-md text-white p-4 rounded-lg border border-gray-700 hover:border-emerald/50 pointer-events-none text-sm transform -translate-x-1/2 -translate-y-full shadow-lg shadow-black/50 hover:shadow-emerald/20 transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">{location === "NY" ? "🏠" : "❤️‍🩹"}</span>
        <div className="flex flex-col">
          <span className="font-semibold text-emerald">
            {location === "NY" ? "Living in" : "From"}
          </span>
          <span className="text-gray-300">
            {location === "NY" ? "New York, NY" : "Pasaje, Ecuador"}
          </span>
          {location !== "NY" && (
            <span className="text-xs text-gray-400 mt-1">
              Yes, I speak Spanish fluently
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
