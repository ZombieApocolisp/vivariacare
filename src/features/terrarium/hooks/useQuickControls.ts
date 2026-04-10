import { useAppDispatch } from "@state/hooks";
import {
  toggleLeftValve,
  toggleLights,
  togglePump,
  toggleRightValve,
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
    dispatch(toggleLeftValve());
  }, [dispatch]);

  const onToggleRightValve = useCallback(() => {
    dispatch(toggleRightValve());
  }, [dispatch]);

  return {
    onTogglePump,
    onToggleLights,
    onToggleLeftValve,
    onToggleRightValve,
  };
}
