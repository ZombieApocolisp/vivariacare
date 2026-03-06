import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../components/ui/AppText";
import { Card } from "../components/ui/Card";
import { Pill } from "../components/ui/Pill";
import { Screen } from "../components/ui/Screen";
import { ToggleButton } from "../components/ui/ToggleButton";
import { useTheme } from "../theme/useTheme";

// If you already have Redux hooks like useAppSelector/useAppDispatch, use them here.
import { useAppDispatch, useAppSelector } from "../state/hooks";
import {
  toggleLights,
  togglePump,
  toggleValveLeft,
  toggleValveRight,
} from "../state/terrariumSlice";

type SensorTileProps = {
  label: string;
  value: string;
  hint?: string;
};

const SensorTile = memo(function SensorTile({
  label,
  value,
  hint,
}: SensorTileProps) {
  const t = useTheme();
  const s = sensorStyles(t);

  return (
    <View style={s.tile}>
      <AppText variant="muted" weight="semibold">
        {label}
      </AppText>
      <AppText weight="bold" style={s.value}>
        {value}
      </AppText>
      {!!hint && <AppText variant="muted">{hint}</AppText>}
    </View>
  );
});

export default function DashboardScreen() {
  const t = useTheme();
  const s = styles(t);

  // Replace these with real state later (kept inline for starter simplicity)
  const systemOk = true;

  const dispatch = useAppDispatch();
  const pumpOn = useAppSelector((state) => state.terrarium.status.pumpOn);
  const lightsOn = useAppSelector((state) => state.terrarium.status.lightsOn);
  const leftValveOpen = useAppSelector(
    (state) => state.terrarium.status.valveLeftOpen,
  );
  const rightValveOpen = useAppSelector(
    (state) => state.terrarium.status.valveRightOpen,
  );

  const statusTone = systemOk ? "ok" : "warn";

  const onTogglePump = useCallback(() => {
    dispatch(togglePump());
  }, []);

  const onToggleLights = useCallback(() => {
    dispatch(toggleLights());
  }, []);

  const onToggleLeftValve = useCallback(() => {
    dispatch(toggleValveLeft());
  }, []);

  const onToggleRightValve = useCallback(() => {
    dispatch(toggleValveRight());
  }, []);

  const sensorSnapshot = useMemo(
    () => [
      { label: "Temp", value: "78.4°F", hint: "Target 75-82" },
      { label: "Humidity", value: "86%", hint: "Target 80-95" },
      { label: "VPD", value: "0.55", hint: "kPa" },
      { label: "Substrate", value: "Moist", hint: "OK" },
    ],
    [],
  );

  return (
    <Screen scrollable>
      {/* Header */}
      <View style={s.headerRow}>
        <View style={{ flex: 1 }}>
          <AppText variant="title" weight="bold">
            Dashboard
          </AppText>
          <AppText variant="subtitle">
            Terrarium overview & quick controls
          </AppText>
        </View>
        <Pill
          label={systemOk ? "SYSTEM OK" : "ATTENTION"}
          tone={statusTone}
          style={{ marginTop: 6 }}
        />
      </View>

      {/* Status Card */}
      <Card
        glow={systemOk ? "cyan" : "amber"}
        style={{ marginTop: t.spacing.lg }}
      >
        <View style={s.cardTopRow}>
          <View style={{ flex: 1 }}>
            <AppText weight="semibold">Current Mode</AppText>
            <AppText variant="muted">Auto (schedule + sensors)</AppText>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <AppText weight="bold">
              {systemOk ? "Stable" : "Needs Review"}
            </AppText>
            <AppText variant="muted">Updated just now</AppText>
          </View>
        </View>

        <View style={s.divider} />

        <View style={s.metricsRow}>
          <View style={s.metric}>
            <AppText variant="muted">Mist Zones</AppText>
            <AppText weight="bold">2</AppText>
          </View>
          <View style={s.metric}>
            <AppText variant="muted">Pump</AppText>
            <AppText weight="bold">{pumpOn ? "ON" : "OFF"}</AppText>
          </View>
          <View style={s.metric}>
            <AppText variant="muted">Lights</AppText>
            <AppText weight="bold">{lightsOn ? "ON" : "OFF"}</AppText>
          </View>
        </View>
      </Card>

      {/* Quick Controls */}
      <AppText weight="semibold" style={{ marginTop: t.spacing.xl }}>
        Quick Controls
      </AppText>
      <View style={s.controlsRow}>
        <ToggleButton label="Pump" value={pumpOn} onToggle={onTogglePump} />
        <View style={{ width: t.spacing.md }} />
        <ToggleButton
          label="Lights"
          value={lightsOn}
          onToggle={onToggleLights}
        />
      </View>
      <View style={s.controlsRow}>
        <ToggleButton
          label="Left Valve"
          value={leftValveOpen}
          onToggle={onToggleLeftValve}
        />
        <View style={{ width: t.spacing.md }} />
        <ToggleButton
          label="Right Valve"
          value={rightValveOpen}
          onToggle={onToggleRightValve}
        />
      </View>

      {/* Sensor Snapshot */}
      <AppText weight="semibold" style={{ marginTop: t.spacing.xl }}>
        Sensor Snapshot
      </AppText>
      <Card style={{ marginTop: t.spacing.md }}>
        <View style={s.grid}>
          {sensorSnapshot.map((x) => (
            <SensorTile
              key={x.label}
              label={x.label}
              value={x.value}
              hint={x.hint}
            />
          ))}
        </View>
      </Card>
    </Screen>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    headerRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: t.spacing.md,
    },
    cardTopRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: t.spacing.md,
    },
    divider: {
      height: 1,
      backgroundColor: t.colors.border,
      marginVertical: t.spacing.lg,
    },
    metricsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: t.spacing.md,
    },
    metric: {
      flex: 1,
      padding: t.spacing.md,
      borderRadius: t.radius.lg,
      backgroundColor: "rgba(255,255,255,0.03)",
      borderWidth: 1,
      borderColor: t.colors.border,
    },
    controlsRow: {
      flexDirection: "row",
      marginTop: t.spacing.md,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: t.spacing.md,
    },
  });

const sensorStyles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    tile: {
      flexBasis: "47%",
      flexGrow: 1,
      padding: t.spacing.md,
      borderRadius: t.radius.lg,
      backgroundColor: "rgba(0,0,0,0.18)",
      borderWidth: 1,
      borderColor: t.colors.border,
    },
    value: {
      marginTop: 6,
      marginBottom: 2,
      fontSize: t.typography.size.xl,
    },
  });
