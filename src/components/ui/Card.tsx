import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

type Props = ViewProps & {
  glow?: "cyan" | "lime" | "violet" | "amber" | "none";
};

export function Card({ glow = "none", style, ...props }: Props) {
  const t = useTheme();
  const s = styles(t);

  const glowStyle =
    glow === "cyan"
      ? s.glowCyan
      : glow === "lime"
        ? s.glowLime
        : glow === "violet"
          ? s.glowViolet
          : glow === "amber"
            ? s.glowAmber
            : null;

  return <View {...props} style={[s.card, glowStyle, style]} />;
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    card: {
      backgroundColor: t.colors.surface0,
      borderRadius: t.radius.xl,
      padding: t.spacing.lg,
      borderWidth: 1,
      borderColor: t.colors.border,
    },

    // "Glow" is intentionally subtle (performance-friendly).
    glowCyan: {
      borderColor: t.colors.borderStrong,
      shadowColor: t.colors.neonCyan,
      shadowOpacity: 0.25,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 8 },
      elevation: 6,
    },
    glowLime: {
      borderColor: "rgba(92, 255, 154, 0.22)",
      shadowColor: t.colors.neonLime,
      shadowOpacity: 0.22,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 8 },
      elevation: 6,
    },
    glowViolet: {
      borderColor: "rgba(155, 124, 255, 0.22)",
      shadowColor: t.colors.neonViolet,
      shadowOpacity: 0.22,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 8 },
      elevation: 6,
    },
    glowAmber: {
      borderColor: "rgba(228, 184, 103, 0.25)",
      shadowColor: t.colors.amber,
      shadowOpacity: 0.18,
      shadowRadius: 14,
      shadowOffset: { width: 0, height: 8 },
      elevation: 6,
    },
  });
