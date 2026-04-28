import { AppText } from "@components/ui/AppText";
import { Card } from "@components/ui/Card";
import { ControlStatusCard } from "@components/ui/ControlStatusCard";
import { Pill } from "@components/ui/Pill";
import { Screen } from "@components/ui/Screen";
import {
  selectLeftValveOpen,
  selectLightsOn,
  selectPumpOn,
  selectRightValveOpen,
  selectStatusTiles,
} from "@features/terrarium/selectors";
import { useAppSelector } from "@state/hooks";
import { useTheme } from "@theme/useTheme";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function DashboardScreen() {
  const t = useTheme();
  const s = styles(t);

  // Replace systemOk with a real state object later
  const systemOk = true;
  const statusTone = systemOk ? "ok" : "warn";

  const statusTiles = useAppSelector(selectStatusTiles);

  const pumpOn = useAppSelector(selectPumpOn);
  const lightsOn = useAppSelector(selectLightsOn);
  const leftValveOpen = useAppSelector(selectLeftValveOpen);
  const rightValveOpen = useAppSelector(selectRightValveOpen);

  return (
    <Screen scrollable>
      {/* Header */}
      <View style={s.headerRow}>
        <View style={{ flex: 1 }}>
          <AppText variant="title" weight="bold">
            Dashboard
          </AppText>
          <AppText variant="subtitle">Terrarium overview</AppText>
        </View>

        <Pill
          label={systemOk ? "SYSTEM OK" : "ATTENTION"}
          tone={statusTone}
          style={{ marginTop: 6 }}
        />
      </View>

      {/* Terrarium Status Card */}
      <Card
        glow={systemOk ? "cyan" : "amber"}
        style={{ marginTop: t.spacing.xxl }}
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
      </Card>

      {/* Sensor Metrics Snapshot */}
      <Card
        glow={systemOk ? "cyan" : "amber"}
        style={{ marginTop: t.spacing.xxl }}
      >
        <AppText weight="semibold">Sensor Metrics Snapshot</AppText>

        <View style={s.grid}>
          {statusTiles.map((tile) => (
            <View key={tile.label} style={s.tile}>
              <AppText variant="muted">{tile.label}</AppText>
              <AppText weight="bold" style={s.value}>
                {tile.value}
              </AppText>
              <AppText variant="muted">{tile.hint}</AppText>
            </View>
          ))}
        </View>
      </Card>

      <View style={s.divider} />

      {/* Controls Status */}
      <AppText weight="semibold">Controls Status</AppText>

      <View style={s.controlsRow}>
        <ControlStatusCard label="Pump" active={pumpOn} />
        <View style={{ width: t.spacing.xl }} />
        <ControlStatusCard label="Lights" active={lightsOn} />
      </View>

      <View style={s.controlsRow}>
        <ControlStatusCard label="Left Valve" active={leftValveOpen} />
        <View style={{ width: t.spacing.xl }} />
        <ControlStatusCard label="Right Valve" active={rightValveOpen} />
      </View>
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
      marginVertical: t.spacing.xxl,
    },
    controlsRow: {
      flexDirection: "row",
      marginTop: t.spacing.xl,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: t.spacing.md,
      marginTop: t.spacing.md,
    },
    tile: {
      flexBasis: "47.5%",
      flexGrow: 0,
      padding: t.spacing.md,
      borderRadius: t.radius.lg,
      backgroundColor: "rgba(0,0,0,0.03)",
      borderWidth: 1,
      borderColor: t.colors.border,
    },
    value: {
      marginTop: 6,
      marginBottom: 2,
      fontSize: t.typography.size.xl,
    },
  });
