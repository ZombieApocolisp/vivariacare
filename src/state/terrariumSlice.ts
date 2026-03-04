import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { StatusSnapshot } from "../types/terrarium";

type TerrariumState = {
  status: StatusSnapshot;
};

const initialState: TerrariumState = {
  status: {
    temperatureF: 76.2,
    humidityPct: 82,
    substrateMoisturePct: 38,
    reservoirPct: 64,
    pumpOn: false,
    valveLeftOpen: false,
    valveRightOpen: false,
    lightsOn: false,
    updatedAt: Date.now(),
  },
};

const terrariumSlice = createSlice({
  name: "terrarium",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<StatusSnapshot>) {
      state.status = action.payload;
    },
    togglePump(state) {
      state.status.pumpOn = !state.status.pumpOn;
      state.status.updatedAt = Date.now();
    },
    toggleValveLeft(state) {
      state.status.valveLeftOpen = !state.status.valveLeftOpen;
    },
    toggleValveRight(state) {
      state.status.valveRightOpen = !state.status.valveRightOpen;
    },
    toggleLights(state) {
      state.status.lightsOn = !state.status.lightsOn;
    },
  },
});

export const {
  setStatus,
  togglePump,
  toggleValveLeft,
  toggleValveRight,
  toggleLights,
} = terrariumSlice.actions;
export default terrariumSlice.reducer;
