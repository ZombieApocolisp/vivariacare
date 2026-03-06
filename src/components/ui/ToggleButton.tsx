import React, { memo, useCallback } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../../theme/useTheme";
import { AppText } from "./AppText";

type Props = {
  label: string;
  value: boolean;
  onToggle: () => void;
  style?: ViewStyle;
};

export const ToggleButton = memo(function ToggleButton({
  label,
  value,
  onToggle,
  style,
}: Props) {
  const t = useTheme();
  const s = styles(t);

  const handlePress = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        s.base,
        value ? s.on : s.off,
        pressed && s.pressed,
        style,
      ]}
    >
      <AppText weight="semibold">{label}</AppText>
      <AppText variant="muted">{value ? "ON" : "OFF"}</AppText>
    </Pressable>
  );
});

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    base: {
      flex: 1,
      minHeight: 62,
      borderRadius: t.radius.lg,
      paddingHorizontal: t.spacing.lg,
      paddingVertical: t.spacing.md,
      borderWidth: 1,
      justifyContent: "space-between",
    },
    on: {
      backgroundColor: "rgba(46,242,255,0.10)",
      borderColor: "rgba(46,242,255,0.30)",
    },
    off: {
      backgroundColor: "rgba(255,255,255,0.04)",
      borderColor: t.colors.border,
    },
    pressed: {
      opacity: 0.92,
      transform: [{ scale: 0.995 }],
    },
  });
