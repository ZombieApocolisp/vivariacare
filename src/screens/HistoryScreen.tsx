import { AppText } from "@components/ui/AppText";
import { Screen } from "@components/ui/Screen";
import { View } from "react-native";

export default function HistoryScreen() {
  // const t = useTheme();
  // const s = styles(t);

  return (
    <Screen scrollable>
      <View>
        <AppText>
          This is a template foundation for the history tab, where previously
          recorded information on the terrarium status can be viewed. This page
          may be updated in the future to be something else entirely.
        </AppText>
      </View>
    </Screen>
  );
}

// const styles = (t: ReturnType<typeof useTheme>) => StyleSheet.create({});
