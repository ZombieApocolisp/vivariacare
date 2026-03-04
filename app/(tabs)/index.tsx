import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SensorTile from "../../src/components/SensorTile";
import { useAppDispatch, useAppSelector } from "../../src/state/hooks";
import { setStatus } from "../../src/state/terrariumSlice";
import type { StatusSnapshot } from "../../src/types/terrarium";

export default function DashboardScreen() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.terrarium.status);

  // POLLING: Every 3 seconds, generate fake (for now) sensor updates and store in Redux
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        setStatus({
          ...status,
          temperatureF: clamp(
            round1(status.temperatureF + randomBetween(-0.4, 0.4)),
            60,
            95,
          ),
          humidityPct: clamp(
            Math.round(status.humidityPct + randomBetween(-2, 2)),
            20,
            100,
          ),
          substrateMoisturePct: clamp(
            Math.round(status.substrateMoisturePct + randomBetween(-1, 1)),
            0,
            100,
          ),
          reservoirPct: clamp(
            Math.round(status.reservoirPct + randomBetween(-1, 1)),
            0,
            100,
          ),
          updatedAt: Date.now(),
          // NOTE: We intentionally keep pumpOn unchanged here
        } satisfies StatusSnapshot),
      );
    }, 3000);

    // Cleanup: when you leave this screen or reload, stop the interval
    return () => clearInterval(intervalId);
    // We intentionally do NOT include 'status' in the dependency list here,
    // because it would recreate the interval every time status changes.
    // For now, this is fine for mock polling; we'll imporve it soon.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Derived UI value (not state): "how long ago was this updated?"
  const secondsAgo = Math.floor((Date.now() - status.updatedAt) / 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terrarium Dashboard</Text>
      <Text style={styles.update}>Last updated: {secondsAgo}s ago</Text>

      <SensorTile
        label="Temperature"
        value={`${status.temperatureF.toFixed(1)} °F`}
      />
      <SensorTile label="Humidity" value={`${status.humidityPct}%`} />
      <SensorTile
        label="Substrate Moisture"
        value={`${status.substrateMoisturePct}%`}
      />
      <SensorTile label="Reservoir" value={`${status.reservoirPct}%`} />
      <SensorTile label="Pump" value={status.pumpOn ? "ON" : "OFF"} />
    </View>
  );
}

/**
 * Utility helpers (pure functions)
 * These are NOT React-specific. They just help generate nice fake data.
 */

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function round1(value: number) {
  return Math.round(value * 10) / 10;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  update: {
    fontSize: 14,
    opacity: 0.7,
  },
});
