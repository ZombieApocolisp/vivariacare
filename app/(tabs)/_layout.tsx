import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useTheme } from "@theme/useTheme";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  const t = useTheme();
  const s = styles(t);
  return (
    <Tabs
      screenOptions={{
        headerTitleAllowFontScaling: true,
        headerTransparent: true,
        headerBackground: () => (
          <BlurView
            tint="systemThickMaterialDark"
            intensity={33}
            style={StyleSheet.absoluteFill}
          />
        ),
        headerTintColor: "white",
        tabBarActiveTintColor: "rgba(92, 255, 154, 0.5)",
        tabBarInactiveTintColor: "#ffffff80",
        tabBarAllowFontScaling: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => (
          <BlurView
            tint="systemThickMaterialDark"
            intensity={33}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="leaf" size={s.icon.fontSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="controls"
        options={{
          title: "Controls",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="toggle-off"
              size={s.icon.fontSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="schedules"
        options={{
          title: "Schedules",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="calendar-days"
              size={s.icon.fontSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="clock-rotate-left"
              size={s.icon.fontSize}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="gear" size={s.icon.fontSize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    icon: {
      fontSize: 18,
    },
  });
