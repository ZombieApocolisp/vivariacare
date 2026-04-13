export type TerrariumStatusSnapshot = {
  temperatureF: number;
  humidityPct: number;
  substrateMoisturePct: number;
  reservoirPct: number;
  updatedAt: number; // Timestamp (millisecond since epoch)
};
