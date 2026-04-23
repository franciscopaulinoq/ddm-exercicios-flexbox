import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Exercicio01() {
  return (
    <View style={styles.container}>
      <Text style={styles.indicatorText}>Exercício 05 - DDM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorText: {
    fontSize: 12,
    color: "#8E8E93",
    position: "absolute",
    top: 50,
  },
});
