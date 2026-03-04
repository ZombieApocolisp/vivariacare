import type { StatusSnapshot } from "../types/terrarium";
import { AppDispatch } from "./store";
import { setStatus } from "./terrariumSlice";

export const startMockPolling = () => (dispatch: AppDispatch) => {
  setInterval(() => {
    const fakeStatus: StatusSnapshot = {
      temperatureF: randomBetween(72, 85),
      humidityPct: randomBetween(60, 95),
      substrateMoisturePct: randomBetween(20, 60),
      reservoirPct: randomBetween(40, 100),
      pumpOn: false,
      valveLeftOpen: false,
      valveRightOpen: false,
      lightsOn: false,
      updatedAt: Date.now(),
    };

    dispatch(setStatus(fakeStatus));
  }, 3000);
};

function randomBetween(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}
