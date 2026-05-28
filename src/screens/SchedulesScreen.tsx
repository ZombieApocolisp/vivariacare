import { AppText } from "@components/ui/AppText";
import { Screen } from "@components/ui/Screen";
import { View } from "react-native";

export default function SchedulesScreen() {
  // const t = useTheme();
  // const s = styles(t);

  return (
    <Screen scrollable>
      <View>
        <AppText>
          This is the starting template for this screen. Need to figure out
          where to find a calendar component or how to create one myself. Better
          yet, how to export the schedule to a user&apos;s Google Calendars app.
        </AppText>
      </View>
    </Screen>
  );
}

// const styles = (t: ReturnType<typeof useTheme>) => StyleSheet.create({});
