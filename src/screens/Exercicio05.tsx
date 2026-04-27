import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

export default function Exercicio05() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.searchBar} />
          <View style={styles.headerButton} />
        </View>

        <View style={styles.grid}>
          {cards.map((item) => (
            <View key={item} style={styles.cardOutline}>
              <View style={styles.darkInnerCard} />
            </View>
          ))}
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    gap: 15,
  },
  searchBar: {
    flex: 3,
    height: 45,
    backgroundColor: "#C8CCE1",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#9EA4C9",
  },
  headerButton: {
    flex: 1,
    height: 45,
    backgroundColor: "#1e1e2c",
    borderRadius: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },
  cardOutline: {
    width: "48%",
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "#9EA4C9",
    borderRadius: 20,
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  darkInnerCard: {
    flex: 1,
    backgroundColor: "#1e1e2c",
    borderRadius: 12,
  },
});
