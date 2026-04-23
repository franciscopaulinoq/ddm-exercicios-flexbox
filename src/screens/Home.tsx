import React from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home({ navigation }: any) {
  const insets = useSafeAreaInsets();

  const exercicios = [
    { id: "Ex1", title: "Exercício 01 - DDM" },
    { id: "Ex2", title: "Exercício 02 - DDM" },
    { id: "Ex3", title: "Exercício 03 - DDM" },
    { id: "Ex4", title: "Exercício 04 - DDM" },
    { id: "Ex5", title: "Exercício 05 - DDM" },
    { id: "Ex6", title: "Exercício 06 - DDM" },
  ];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 20 },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.headerTitle}>Lista de Exercícios</Text>
      <Text style={styles.headerSubtitle}>
        Selecione um wireframe para visualizar
      </Text>

      {exercicios.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => navigation.navigate(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#F5F5F7",
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginTop: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#8E8E93",
    marginBottom: 30,
    marginTop: 5,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2C2C2E",
  },
});
