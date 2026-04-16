import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@theme/useTheme";
import React from "react";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView style={s.safe} edges={["left", "right"]}>
        <ScrollView
          style={s.root}
          contentContainerStyle={[
            padded && s.padded,
            s.scrollContent,
            style,
            {
              paddingTop: useHeaderHeight(),
              paddingBottom: useBottomTabBarHeight(),
            },
          ]}
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
      <View
        {...props}
        style={[
          {
            paddingTop: useHeaderHeight(),
            paddingBottom: useBottomTabBarHeight(),
          },
          s.root,
          padded && s.padded,
          style,
        ]}
      >
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
      paddingTop: t.spacing.xl,
      paddingBottom: t.spacing.xl,
    },
    root: {
      flex: 1,
      backgroundColor: t.colors.bg0,
    },
    padded: {
      padding: t.spacing.xl,
    },
    scrollContent: {
      paddingTop: t.spacing.xxl,
      paddingBottom: t.spacing.xxl,
    },
  });
