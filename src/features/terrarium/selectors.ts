import { RootState } from "@state/store";

export const selectPumpOn = (state: RootState) => state.terrarium.status.pumpOn;
export const selectLightsOn = (state: RootState) =>
  state.terrarium.status.lightsOn;
export const selectLeftValveOpen = (state: RootState) =>
  state.terrarium.status.valveLeftOpen;
export const selectRightValveOpen = (state: RootState) =>
  state.terrarium.status.valveRightOpen;

export const selectSensorSnapshot = (state: RootState) => [
  {
    label: "Temp",
    value: `${state.terrarium.status.temperatureF}°F`,
    hint: "Target 75-82",
  },
  {
    label: "Humidity",
    value: `${state.terrarium.status.humidityPct}%`,
    hint: "Target 80-95",
  },
  {
    label: "Reservoir",
    value: `${state.terrarium.status.reservoirPct}`,
    hint: "kPa",
  },
  {
    label: "Substrate",
    value: state.terrarium.status.substrateMoisturePct,
    hint: "OK",
  },
];
