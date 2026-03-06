import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { useTheme } from "../../theme/useTheme";

type Props = TextProps & {
  variant?: "title" | "subtitle" | "body" | "muted" | "mono";
  weight?: "regular" | "medium" | "semibold" | "bold";
};

export function AppText({
  variant = "body",
  weight = "regular",
  style,
  ...props
}: Props) {
  const t = useTheme();
  const s = styles(t);

  return (
    <Text
      {...props}
      style={[
        s.base,
        s[variant],
        { fontWeight: t.typography.weight[weight] },
        style,
      ]}
    />
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    base: {
      color: t.colors.text0,
      fontSize: t.typography.size.md,
    },
    title: {
      fontSize: t.typography.size.xxl,
      letterSpacing: 0.2,
    },
    subtitle: {
      fontSize: t.typography.size.lg,
      color: t.colors.text1,
    },
    body: {
      fontSize: t.typography.size.md,
      color: t.colors.text0,
    },
    muted: {
      fontSize: t.typography.size.sm,
      color: t.colors.text2,
    },
    mono: {
      fontSize: t.typography.size.sm,
      color: t.colors.text1,
      // If you later want a true mono font, add it here.
    },
  });
