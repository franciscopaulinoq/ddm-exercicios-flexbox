import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

export default function Exercicio02() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View
        style={[
          styles.sectionContainer,
          styles.rowCenter,
          { flex: 2, justifyContent: "space-between" },
        ]}
      >
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>

      <View
        style={[
          styles.sectionContainer,
          styles.rowCenter,
          { flex: 2, justifyContent: "space-evenly" },
        ]}
      >
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>

      <View style={[styles.sectionContainer, styles.rowEnd, { flex: 3 }]}>
        <View style={styles.rectangle} />
        <View style={styles.rectangle} />
        <View style={styles.rectangle} />
        <View style={styles.rectangle} />
      </View>

      <View
        style={[
          styles.sectionContainer,
          styles.rowCenter,
          { flex: 1.5, gap: 15, justifyContent: "center" },
        ]}
      >
        <View style={styles.smallSquare} />
        <View style={styles.smallSquare} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5b9d7",
    padding: 20,
  },
  sectionContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 2,
    borderColor: "#9EA4C9",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowEnd: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  darkItem: {
    backgroundColor: "#1e1e2c",
    borderRadius: 8,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1e1e2c",
  },
  square: {
    width: 55,
    height: 55,
    borderRadius: 8,
    backgroundColor: "#1e1e2c",
  },
  rectangle: {
    flex: 1,
    maxWidth: 70,
    height: 45,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: "#1e1e2c",
  },
  smallSquare: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: "#1e1e2c",
  },
});
