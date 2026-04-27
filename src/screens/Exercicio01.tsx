import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Exercicio01() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Perfil</Text>
        </View>
      </View>

      <View style={[styles.sectionContainer, { flex: 3 }]}>
        <View style={styles.darkCard} />
      </View>

      <View
        style={[
          styles.sectionContainer,
          { flex: 2, flexDirection: "row", gap: 15 },
        ]}
      >
        <View style={[styles.darkCard, { flex: 1 }]} />
        <View style={[styles.darkCard, { flex: 1 }]} />
      </View>

      <View style={[styles.sectionContainer, { flex: 1.5 }]}>
        <View style={styles.darkCard} />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1e1e2c",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    flex: 0.48,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
  sectionContainer: {
    borderWidth: 2,
    borderColor: "#9EA4C9",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  darkCard: {
    flex: 1,
    backgroundColor: "#1E1E2C",
    borderRadius: 12,
  },
});
