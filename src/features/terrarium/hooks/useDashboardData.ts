import { useAppSelector } from "@state/hooks";
import {
  selectLeftValveOpen,
  selectLightsOn,
  selectPumpOn,
  selectRightValveOpen,
  selectSensorSnapshot,
} from "../selectors";

export function useDashboardData() {
  const pumpOn = useAppSelector(selectPumpOn);
  const lightsOn = useAppSelector(selectLightsOn);
  const leftValveOpen = useAppSelector(selectLeftValveOpen);
  const rightValveOpen = useAppSelector(selectRightValveOpen);
  const sensorSnapshot = useAppSelector(selectSensorSnapshot);

  return {
    pumpOn,
    lightsOn,
    leftValveOpen,
    rightValveOpen,
    sensorSnapshot,
  };
}
