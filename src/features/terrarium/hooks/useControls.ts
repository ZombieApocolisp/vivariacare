import {
  selectLeftValveOpen,
  selectLightsOn,
  selectPumpOn,
  selectRightValveOpen,
} from "@features/terrarium/selectors";
import {
  toggleLeftValve,
  toggleLights,
  togglePump,
  toggleRightValve,
} from "@features/terrarium/terrariumSlice";
import { useAppDispatch, useAppSelector } from "@state/hooks";
import { useCallback } from "react";

export function useControls() {
  const dispatch = useAppDispatch();

  const pumpOn = useAppSelector(selectPumpOn);
  const lightsOn = useAppSelector(selectLightsOn);
  const leftValveOpen = useAppSelector(selectLeftValveOpen);
  const rightValveOpen = useAppSelector(selectRightValveOpen);

  const togglePumpControl = useCallback(() => {
    dispatch(togglePump());
  }, [dispatch]);

  const toggleLightsControl = useCallback(() => {
    dispatch(toggleLights());
  }, [dispatch]);

  const toggleLeftValveControl = useCallback(() => {
    dispatch(toggleLeftValve());
  }, [dispatch]);

  const toggleRightValveControl = useCallback(() => {
    dispatch(toggleRightValve());
  }, [dispatch]);

  return {
    pumpOn,
    lightsOn,
    leftValveOpen,
    rightValveOpen,
    togglePumpControl,
    toggleLightsControl,
    toggleLeftValveControl,
    toggleRightValveControl,
  };
}
