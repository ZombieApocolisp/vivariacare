import { AppText } from "@components/ui/AppText";
import { Screen } from "@components/ui/Screen";
import { useTheme } from "@theme/useTheme";
import { StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  const t = useTheme();
  const s = styles(t);

  return (
    <Screen scrollable>
      <View>
        <AppText>
          This is a template starting point for the settings options for this
          app and the user account, along with any other important
          functionality, privacy, security, etc information.
        </AppText>
      </View>
    </Screen>
  );
}

const styles = (t: ReturnType<typeof useTheme>) => StyleSheet.create({});
