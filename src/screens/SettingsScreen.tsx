import { AppText } from "@components/ui/AppText";
import { Card } from "@components/ui/Card";
import { Screen } from "@components/ui/Screen";
import { useTheme } from "@theme/useTheme";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  const t = useTheme();
  const s = styles(t);

  return (
    <Screen scrollable>
      <View style={s.grid}>
        <AppText variant="title" weight="bold">
          Settings
        </AppText>
        <Card style={s.settingGroupCard}>
          <AppText weight="bold">Profile Name</AppText>
          <AppText variant="muted">Switch Profile | example@email.com</AppText>
        </Card>

        <Card style={s.settingGroupCard}>
          <Link href={"/settings/personal-information"} style={s.linkFirst}>
            <AppText>Personal Information</AppText>
          </Link>
          <View style={s.divider}></View>
          <Link href={"/settings/security"} style={s.link}>
            <AppText>Security & Sign-In</AppText>
          </Link>
          <View style={s.divider}></View>
          <Link href={"/settings/data-privacy"} style={s.link}>
            <AppText>Data & Privacy</AppText>
          </Link>
          <View style={s.divider}></View>
          <Link href={"/settings/appearance"} style={s.linkLast}>
            <AppText>Appearance</AppText>
          </Link>
        </Card>

        <Card style={s.settingGroupCard}>
          <Link href={"/settings"} style={s.linkFirst}>
            <AppText>Your Devices</AppText>
          </Link>
          <View style={s.divider}></View>
          <Link href={"/settings"} style={s.linkLast}>
            <AppText>Connect A Device</AppText>
          </Link>
        </Card>

        <Card style={s.settingGroupCard}>
          <Link href={"/settings"} style={s.linkFirst}>
            <AppText>Help</AppText>
          </Link>
          <View style={s.divider}></View>
          <Link href={"/settings"} style={s.linkLast}>
            <AppText>Send Feedback</AppText>
          </Link>
        </Card>
      </View>
    </Screen>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    grid: {
      flexDirection: "column",
      gap: t.spacing.xl,
    },
    settingGroupCard: {
      padding: 14,
      borderRadius: t.radius.lg,
      backgroundColor: "rgba(255,255,255,0.04)",
    },
    divider: {
      height: 1,
      backgroundColor: t.colors.borderDefault,
    },
    linkFirst: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 14,
      paddingLeft: 0,
    },
    link: {
      paddingTop: 14,
      paddingRight: 0,
      paddingBottom: 14,
      paddingLeft: 0,
    },
    linkLast: {
      paddingTop: 14,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
    },
  });
