import { startMockPolling } from "@features/terrarium/terrariumThunks";
import DashboardScreen from "@screens/DashboardScreen";
import { useAppDispatch, useAppSelector } from "@state/hooks";
import React, { useEffect } from "react";

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
