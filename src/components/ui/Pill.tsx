import { AppText } from "@components/ui/AppText";
import { useTheme } from "@theme/useTheme";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

type Props = ViewProps & {
  label: string;
  tone?: "neutral" | "ok" | "warn" | "bad";
};

export function Pill({ label, tone = "neutral", style, ...props }: Props) {
  const t = useTheme();
  const s = styles(t);

  const toneStyle =
    tone === "ok"
      ? s.ok
      : tone === "warn"
        ? s.warn
        : tone === "bad"
          ? s.bad
          : s.neutral;

  return (
    <View {...props} style={[s.pill, toneStyle, style]}>
      <AppText variant="muted" weight="semibold" style={s.text}>
        {label}
      </AppText>
    </View>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    pill: {
      paddingHorizontal: t.spacing.sm,
      paddingVertical: t.spacing.xs,
      borderRadius: 999,
      borderWidth: 1,
      alignSelf: "flex-start",
    },
    text: {
      letterSpacing: 0.2,
    },
    neutral: {
      backgroundColor: "rgba(255,255,255,0.04)",
      borderColor: t.colors.borderInactive,
    },
    ok: {
      backgroundColor: "rgba(92,255,154,0.10)",
      borderColor: t.colors.borderStrong,
    },
    warn: {
      backgroundColor: "rgba(228,184,103,0.10)",
      borderColor: t.colors.borderWarn,
    },
    bad: {
      backgroundColor: "rgba(255,77,109,0.10)",
      borderColor: t.colors.borderBad,
    },
  });
