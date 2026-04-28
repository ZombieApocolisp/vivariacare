import { RootState } from "@state/store";

export const selectTerrariumStatus = (state: RootState) =>
  state.terrarium.status;

export const selectTerrariumControls = (state: RootState) =>
  state.terrarium.controls;

export const selectPumpOn = (state: RootState) =>
  state.terrarium.controls.pumpOn;

export const selectLightsOn = (state: RootState) =>
  state.terrarium.controls.lightsOn;

export const selectLeftValveOpen = (state: RootState) =>
  state.terrarium.controls.leftValveOpen;

export const selectRightValveOpen = (state: RootState) =>
  state.terrarium.controls.rightValveOpen;

export const selectStatusTiles = (state: RootState) => {
  const status = selectTerrariumStatus(state);

  return [
    {
      label: "Temp",
      value: `${status.temperatureF}°F`,
      hint: "Target 75-82°F",
    },
    {
      label: "Humidity",
      value: `${status.humidityPct}%`,
      hint: "Target 80-95%",
    },
    {
      label: "Substrate",
      value: `${status.substrateMoisturePct}%`,
      hint: "Moisture level",
    },
    {
      label: "Reservoir",
      value: `${status.reservoirPct}%`,
      hint: "Water level",
    },
  ];
};
