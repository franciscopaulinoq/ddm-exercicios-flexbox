import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Exercicio04() {
  return (
    <View style={styles.container}>
      <View style={[styles.sectionContainer, { flex: 0.8 }]}>
        <View style={styles.darkBar} />
      </View>

      <View style={[styles.sectionContainer, { flex: 4 }]}>
        <View style={styles.darkCard} />
      </View>

      <View style={styles.rowContainer}>
        <View style={[styles.sectionContainer, styles.halfColumn]}>
          <View style={styles.darkCard} />
        </View>
        <View style={[styles.sectionContainer, styles.halfColumn]}>
          <View style={styles.darkCard} />
        </View>
      </View>

      <View style={[styles.sectionContainer, { flex: 0.8 }]}>
        <View style={styles.darkBar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5b9d7",
    padding: 20,
    gap: 15,
  },
  sectionContainer: {
    borderWidth: 2,
    borderColor: "#9ea4c9",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  rowContainer: {
    flexDirection: "row",
    flex: 2,
    gap: 15,
  },
  halfColumn: {
    flex: 1,
    marginBottom: 0,
  },
  darkCard: {
    flex: 1,
    backgroundColor: "#1e1e2c",
    borderRadius: 12,
  },
  darkBar: {
    height: 30,
    backgroundColor: "#1e1e2c",
    borderRadius: 8,
    width: "100%",
  },
});
