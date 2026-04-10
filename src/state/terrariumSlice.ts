import type { controlToggles } from "@/types/controlToggles";
import type { terrariumStatusSnapshot } from "@/types/terrariumStatusSnapshot";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TerrariumState = {
  status: terrariumStatusSnapshot;
  controls: controlToggles;
};

const initialState: TerrariumState = {
  status: {
    temperatureF: 76.2,
    humidityPct: 82,
    substrateMoisturePct: 38,
    reservoirPct: 64,
    updatedAt: Date.now(),
  },
  controls: {
    pumpOn: false,
    leftValveOpen: false,
    rightValveOpen: false,
    lightsOn: false,
    updatedAt: Date.now(),
  },
};

const terrariumSlice = createSlice({
  name: "terrarium",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<terrariumStatusSnapshot>) {
      state.status = action.payload;
    },
    togglePump(state) {
      state.controls.pumpOn = !state.controls.pumpOn;
      state.controls.updatedAt = Date.now();
    },
    toggleLeftValve(state) {
      state.controls.leftValveOpen = !state.controls.leftValveOpen;
    },
    toggleRightValve(state) {
      state.controls.rightValveOpen = !state.controls.rightValveOpen;
    },
    toggleLights(state) {
      state.controls.lightsOn = !state.controls.lightsOn;
    },
  },
});

export const {
  setStatus,
  togglePump,
  toggleLeftValve,
  toggleRightValve,
  toggleLights,
} = terrariumSlice.actions;
export default terrariumSlice.reducer;
