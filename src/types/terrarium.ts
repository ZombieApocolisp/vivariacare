export type StatusSnapshot = {
  temperatureF: number;
  humidityPct: number;
  substrateMoisturePct: number;
  reservoirPct: number;

  // Actuators (controls)
  pumpOn: boolean;

  // Timestamp (millisecond since epoch)
  updatedAt: number;
};
