import { setStatus } from "@features/terrarium/terrariumSlice";
import { AppDispatch } from "@state/store";

function randomBetween(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

export const startMockPolling = () => (dispatch: AppDispatch) => {
  const intervalId = setInterval(() => {
    dispatch(
      setStatus({
        temperatureF: randomBetween(72, 85),
        humidityPct: randomBetween(60, 95),
        substrateMoisturePct: randomBetween(20, 60),
        reservoirPct: randomBetween(40, 100),
      }),
    );
  }, 3000);

  return intervalId;
};

export const stopMockPolling =
  (intervalId: ReturnType<typeof setInterval>) => () => {
    clearInterval(intervalId);
  };
