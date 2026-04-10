import { useAppDispatch } from "@state/hooks";
import {
  toggleLights,
  togglePump,
  toggleValveLeft,
  toggleValveRight,
} from "@state/terrariumSlice";
import { useCallback } from "react";

export function useQuickControls() {
  const dispatch = useAppDispatch();

  const onTogglePump = useCallback(() => {
    dispatch(togglePump());
  }, [dispatch]);

  const onToggleLights = useCallback(() => {
    dispatch(toggleLights());
  }, [dispatch]);

  const onToggleLeftValve = useCallback(() => {
    dispatch(toggleValveLeft());
  }, [dispatch]);

  const onToggleRightValve = useCallback(() => {
    dispatch(toggleValveRight());
  }, [dispatch]);

  return {
    onTogglePump,
    onToggleLights,
    onToggleLeftValve,
    onToggleRightValve,
  };
}
