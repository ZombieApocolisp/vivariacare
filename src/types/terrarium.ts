export type StatusSnapshot = {
  // Sensor Data
  temperatureF: number;
  humidityPct: number;
  substrateMoisturePct: number;
  reservoirPct: number;

  // Actuators (controls)
  pumpOn: boolean;
  valveLeftOpen: boolean;
  valveRightOpen: boolean;
  lightsOn: boolean;

  // Timestamp (millisecond since epoch)
  updatedAt: number;
};
