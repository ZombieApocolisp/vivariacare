import { AppText } from "@components/ui/AppText";
import { useTheme } from "@theme/useTheme";
import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  label: string;
  active: boolean;
  style?: ViewStyle;
};

export const ControlStatusCard = memo(function ControlStatusCard({
  label,
  active,
  style,
}: Props) {
  const t = useTheme();
  const s = styles(t);

  return (
    <View style={[s.base, active ? s.on : s.off, style]}>
      <AppText weight="semibold">{label}</AppText>
      <AppText variant="muted">{active ? "ACTIVE" : "OFF"}</AppText>
    </View>
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
      shadowColor: t.colors.neonLime,
      shadowOpacity: 0.25,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 8 },
      elevation: 6,
    },
    off: {
      backgroundColor: "rgba(255,255,255,0.04)",
      borderColor: t.colors.borderDefault,
    },
  });
