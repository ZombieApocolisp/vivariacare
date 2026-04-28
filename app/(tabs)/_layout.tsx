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
        tabBarActiveTintColor: "#2EF2FF",
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
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="controls"
        options={{
          title: "Controls",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="toggle-off" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="schedules"
        options={{
          title: "Schedules",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="calendar-days" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="clock-rotate-left" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="gear" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = (t: ReturnType<typeof useTheme>) => StyleSheet.create({});
