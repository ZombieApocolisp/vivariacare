import { useAppSelector } from "@state/hooks";
import {
  selectLeftValveOpen,
  selectLightsOn,
  selectPumpOn,
  selectRightValveOpen,
  selectTerrariumStatusSnapshot,
} from "../selectors";

export function useDashboardData() {
  const pumpOn = useAppSelector(selectPumpOn);
  const lightsOn = useAppSelector(selectLightsOn);
  const leftValveOpen = useAppSelector(selectLeftValveOpen);
  const rightValveOpen = useAppSelector(selectRightValveOpen);
  const terrariumStatusSnapshot = useAppSelector(selectTerrariumStatusSnapshot);

  return {
    pumpOn,
    lightsOn,
    leftValveOpen,
    rightValveOpen,
    terrariumStatusSnapshot,
  };
}
