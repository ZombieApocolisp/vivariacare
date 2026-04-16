import { useControls } from "@/features/terrarium/hooks/useControls";
import { AppText } from "@components/ui/AppText";
import { Screen } from "@components/ui/Screen";
import { ToggleButton } from "@components/ui/ToggleButton";
import { useTheme } from "@theme/useTheme";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function ControlsScreen() {
  const t = useTheme();
  const s = styles(t);

  const {
    pumpOn,
    lightsOn,
    leftValveOpen,
    rightValveOpen,
    togglePumpControl,
    toggleLightsControl,
    toggleLeftValveControl,
    toggleRightValveControl,
  } = useControls();

  return (
    <Screen scrollable>
      {/* Header */}
      <View style={s.headerRow}>
        <View style={{ flex: 1 }}>
          <AppText variant="title" weight="bold">
            Controls
          </AppText>
          <AppText variant="subtitle">Actuator Toggle Settings</AppText>
        </View>
      </View>

      {/* Controls */}
      <View style={s.controlsRow}>
        <ToggleButton label="Pump" value={pumpOn} onPress={togglePumpControl} />
        <View style={{ width: t.spacing.xl }} />
        <ToggleButton
          label="Lights"
          value={lightsOn}
          onPress={toggleLightsControl}
        />
      </View>

      <View style={s.controlsRow}>
        <ToggleButton
          label="Left Valve"
          value={leftValveOpen}
          onPress={toggleLeftValveControl}
        />
        <View style={{ width: t.spacing.xl }} />
        <ToggleButton
          label="Right Valve"
          value={rightValveOpen}
          onPress={toggleRightValveControl}
        />
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
    controlsRow: {
      flexDirection: "row",
      marginTop: t.spacing.xl,
    },
  });
