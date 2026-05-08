import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/state/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
