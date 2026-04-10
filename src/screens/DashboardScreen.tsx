import { useDashboardData } from "@/features/terrarium/hooks/useDashboardData";
import { useQuickControls } from "@/features/terrarium/hooks/useQuickControls";
import { AppText } from "@components/ui/AppText";
import { Card } from "@components/ui/Card";
import { Pill } from "@components/ui/Pill";
import { Screen } from "@components/ui/Screen";
import { ToggleButton } from "@components/ui/ToggleButton";
import { useTheme } from "@theme/useTheme";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function DashboardScreen() {
  const t = useTheme();
  const s = styles(t);

  // Replace systemOk with a real state object later
  const systemOk = true;
  const statusTone = systemOk ? "ok" : "warn";

  const { pumpOn, lightsOn, leftValveOpen, rightValveOpen, sensorSnapshot } =
    useDashboardData();

  const {
    onTogglePump,
    onToggleLights,
    onToggleLeftValve,
    onToggleRightValve,
  } = useQuickControls();

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
      </Card>

      <View style={s.divider} />

      {/* Quick Controls */}
      <AppText weight="semibold">Quick Controls</AppText>

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

      <Card style={{ marginTop: t.spacing.lg }}>
        <AppText weight="semibold">Sensor Snapshot</AppText>
        <View style={s.grid}>
          {sensorSnapshot.map((x) => (
            <View key={x.label} style={s.tile}>
              <AppText variant="muted">{x.label}</AppText>
              <AppText weight="bold" style={s.value}>
                {x.value}
              </AppText>
              <AppText variant="muted">{x.hint}</AppText>
            </View>
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
    controlsRow: {
      flexDirection: "row",
      marginTop: t.spacing.md,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: t.spacing.md,
      marginTop: t.spacing.md,
    },
    tile: {
      flexBasis: "48%",
      flexGrow: 1,
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
