import { AppText } from "@components/ui/AppText";
import { useTheme } from "@theme/useTheme";
import React, { memo, useCallback } from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";

type Props = {
  label: string;
  value: boolean;
  onPress: () => void;
  style?: ViewStyle;
};

export const ToggleButton = memo(function ToggleButton({
  label,
  value,
  onPress,
  style,
}: Props) {
  const t = useTheme();
  const s = styles(t);

  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

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
      backgroundColor: t.colors.surface0,
      borderColor: t.colors.borderActive,
    },
    off: {
      backgroundColor: "rgba(255,255,255,0.04)",
      borderColor: t.colors.borderInactive,
    },
    pressed: {
      opacity: 0.92,
      transform: [{ scale: 0.995 }],
    },
  });
