import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Exercicio06() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View
          style={[styles.sectionContainer, styles.centerAlign, { flex: 0 }]}
        >
          <View style={styles.profileCircle} />
          <View style={[styles.textBar, { width: "40%", marginTop: 15 }]} />
          <View
            style={[
              styles.textBar,
              { width: "25%", backgroundColor: "#6C7293", height: 8 },
            ]}
          />
        </View>

        <View style={[styles.sectionContainer, styles.rowBetween]}>
          <View style={styles.miniSquare} />
          <View style={styles.miniSquare} />
          <View style={styles.miniSquare} />
        </View>

        <View style={[styles.sectionContainer, styles.rowBetween, { gap: 15 }]}>
          <View style={styles.actionButton} />
          <View style={styles.actionButton} />
        </View>

        <View style={styles.sectionContainer}>
          <View style={[styles.textBar, { width: "100%" }]} />
          <View
            style={[
              styles.textBar,
              { width: "100%", backgroundColor: "#6C7293" },
            ]}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5b9d7",
  },
  scrollContent: {
    padding: 20,
    gap: 15,
  },
  sectionContainer: {
    borderWidth: 2,
    borderColor: "#9EA4C9",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  centerAlign: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1e1e2c",
  },
  textBar: {
    height: 12,
    backgroundColor: "#1e1e2c",
    borderRadius: 6,
    marginBottom: 10,
  },
  miniSquare: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#1e1e2c",
    borderRadius: 10,
  },
  actionButton: {
    flex: 1,
    height: 45,
    backgroundColor: "#1e1e2c",
    borderRadius: 12,
  },
});
