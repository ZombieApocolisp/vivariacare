import type { ControlToggles } from "@/features/terrarium/types/controlToggles";
import type { TerrariumStatusSnapshot } from "@/features/terrarium/types/terrariumStatusSnapshot";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TerrariumState = {
  status: TerrariumStatusSnapshot;
  controls: ControlToggles;
};

type StatusUpdatePayload = Omit<TerrariumStatusSnapshot, "updatedAt">;

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
  },
};

const terrariumSlice = createSlice({
  name: "terrarium",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<StatusUpdatePayload>) {
      state.status = {
        ...action.payload,
        updatedAt: Date.now(),
      };
    },

    setPumpOn(state, action: PayloadAction<boolean>) {
      state.controls.pumpOn = action.payload;
    },

    setLightsOn(state, action: PayloadAction<boolean>) {
      state.controls.lightsOn = action.payload;
    },

    setLeftValveOpen(state, action: PayloadAction<boolean>) {
      state.controls.leftValveOpen = action.payload;
    },

    setRightValveOpen(state, action: PayloadAction<boolean>) {
      state.controls.rightValveOpen = action.payload;
    },

    togglePump(state) {
      state.controls.pumpOn = !state.controls.pumpOn;
    },

    toggleLights(state) {
      state.controls.lightsOn = !state.controls.lightsOn;
    },

    toggleLeftValve(state) {
      state.controls.leftValveOpen = !state.controls.leftValveOpen;
    },

    toggleRightValve(state) {
      state.controls.rightValveOpen = !state.controls.rightValveOpen;
    },

    setAllControls(state, action: PayloadAction<ControlToggles>) {
      state.controls = action.payload;
    },
  },
});

export const {
  setStatus,
  setPumpOn,
  setLightsOn,
  setLeftValveOpen,
  setRightValveOpen,
  togglePump,
  toggleLights,
  toggleLeftValve,
  toggleRightValve,
  setAllControls,
} = terrariumSlice.actions;
export default terrariumSlice.reducer;
