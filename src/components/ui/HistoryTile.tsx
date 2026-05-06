import { useTheme } from "@theme/useTheme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
  subtext?: string;
};

export default function HistoryTile({ label, value, subtext }: Props) {
  const t = useTheme();
  const s = styles(t);

  return (
    <View style={s.card}>
      <Text style={s.label}>{label}</Text>
      <Text style={s.value}>{value}</Text>
      {subtext ? <Text style={s.subtext}>{subtext}</Text> : null}
    </View>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    card: {
      borderWidth: 1,
      borderColor: t.colors.borderDefault,
      borderRadius: 12,
      padding: 12,
      gap: 6,
    },
    label: {
      fontSize: 14,
      opacity: 0.7,
    },
    value: {
      fontSize: 18,
      fontWeight: "600",
    },
    subtext: {
      fontSize: 12,
      opacity: 0.6,
    },
  });
