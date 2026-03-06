import { startMockPolling } from "@/src/state/terrariumThunks";
import React, { useEffect } from "react";
import DashboardScreen from "../../src/screens/DashboardScreen";
import { useAppDispatch, useAppSelector } from "../../src/state/hooks";

export default function DashboardRoute() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.terrarium.status);

  // POLLING: Every 3 seconds, generate fake (for now) sensor updates and store in Redux
  useEffect(() => {
    dispatch(startMockPolling());
  }, []);

  // Derived UI value (not state): "how long ago was this updated?"
  const secondsAgo = Math.floor((Date.now() - status.updatedAt) / 1000);

  return <DashboardScreen />;
}
