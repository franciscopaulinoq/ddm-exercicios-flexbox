import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Exercicio03() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.topRow}>
          <View style={styles.circle} />

          <View style={styles.textColumn}>
            <View style={[styles.textLine, { width: "80%" }]} />
            <View
              style={[
                styles.textLine,
                { width: "50%", backgroundColor: "#6C7293" },
              ]}
            />
          </View>
        </View>

        <View style={styles.bottomBlock} />
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.topRow}>
          <View style={styles.circle} />

          <View style={styles.textColumn}>
            <View style={[styles.textLine, { width: "80%" }]} />
            <View
              style={[
                styles.textLine,
                { width: "50%", backgroundColor: "#6C7293" },
              ]}
            />
          </View>
        </View>

        <View style={styles.bottomBlock} />
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.topRow}>
          <View style={styles.circle} />

          <View style={styles.textColumn}>
            <View style={[styles.textLine, { width: "80%" }]} />
            <View
              style={[
                styles.textLine,
                { width: "50%", backgroundColor: "#6C7293" },
              ]}
            />
          </View>
        </View>

        <View style={styles.bottomBlock} />
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
    borderWidth: 2,
    borderColor: "#9EA4C9",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginBottom: 15,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1e1e2c",
    marginRight: 15,
  },
  textColumn: {
    flex: 1,
    justifyContent: "center",
  },
  textLine: {
    height: 12,
    backgroundColor: "#1e1e2c",
    borderRadius: 6,
    marginBottom: 8,
  },
  bottomBlock: {
    height: 80,
    backgroundColor: "#1e1e2c",
    borderRadius: 12,
    width: "100%",
  },
});
