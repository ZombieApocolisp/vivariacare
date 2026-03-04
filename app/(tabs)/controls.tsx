import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../src/state/hooks";
import { togglePump } from "../../src/state/terrariumSlice";

export default function ControlsScreen() {
  const dispatch = useAppDispatch();
  const pumpOn = useAppSelector((state) => state.terrarium.status.pumpOn);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controls</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Pump</Text>
        <Text style={styles.value}>{pumpOn ? "ON" : "OFF"}</Text>

        <Pressable
          onPress={() => dispatch(togglePump())}
          style={({ pressed }) => [
            styles.button,
            pumpOn ? styles.buttonOn : styles.buttonOff,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>
            {pumpOn ? "Turn Pump OFF" : "Turn Pump ON"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
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
  button: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOn: {
    backgroundColor: "#111",
  },
  buttonOff: {
    backgroundColor: "#444",
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
