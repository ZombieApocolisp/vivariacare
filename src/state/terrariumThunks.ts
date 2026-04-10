import type { terrariumStatusSnapshot } from "@/types/terrariumStatusSnapshot";
import { AppDispatch } from "@state/store";
import { setStatus } from "@state/terrariumSlice";

export const startMockPolling = () => (dispatch: AppDispatch) => {
  setInterval(() => {
    const fakeStatus: terrariumStatusSnapshot = {
      temperatureF: randomBetween(72, 85),
      humidityPct: randomBetween(60, 95),
      substrateMoisturePct: randomBetween(20, 60),
      reservoirPct: randomBetween(40, 100),
      updatedAt: Date.now(),
    };

    dispatch(setStatus(fakeStatus));
  }, 3000);
};

function randomBetween(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}
