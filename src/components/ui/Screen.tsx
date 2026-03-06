import React from "react";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/useTheme";

type Props = ViewProps & {
  padded?: boolean;
  scrollable?: boolean;
};

export function Screen({
  padded = true,
  scrollable = false,
  style,
  children,
  ...props
}: Props) {
  const t = useTheme();
  const s = styles(t);

  if (scrollable) {
    return (
      <SafeAreaView style={s.safe}>
        <ScrollView
          style={s.root}
          contentContainerStyle={[padded && s.padded, s.scrollContent, style]}
          showsVerticalScrollIndicator={false}
          {...props}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.safe}>
      <View {...props} style={[s.root, padded && s.padded, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: t.colors.bg0,
    },
    root: {
      flex: 1,
      backgroundColor: t.colors.bg0,
    },
    padded: {
      padding: t.spacing.xl,
    },
    scrollContent: {
      paddingBottom: t.spacing.xxl,
    },
  });
