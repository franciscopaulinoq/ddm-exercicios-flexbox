import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Exercicio01 from "../screens/Exercicio01";
import Exercicio02 from "../screens/Exercicio02";
import Exercicio03 from "../screens/Exercicio03";
import Exercicio04 from "../screens/Exercicio04";
import Exercicio05 from "../screens/Exercicio05";
import Exercicio06 from "../screens/Exercicio06";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F5F5F7",
        },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTintColor: "#007AFF",
        headerTitleStyle: {
          fontWeight: "600",
          color: "#1C1C1E",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ex1"
        component={Exercicio01}
        options={{ title: "Exercício 01" }}
      />
      <Stack.Screen
        name="Ex2"
        component={Exercicio02}
        options={{ title: "Exercício 02" }}
      />
      <Stack.Screen
        name="Ex3"
        component={Exercicio03}
        options={{ title: "Exercício 03" }}
      />
      <Stack.Screen
        name="Ex4"
        component={Exercicio04}
        options={{ title: "Exercício 04" }}
      />
      <Stack.Screen
        name="Ex5"
        component={Exercicio05}
        options={{ title: "Exercício 05" }}
      />
      <Stack.Screen
        name="Ex6"
        component={Exercicio06}
        options={{ title: "Exercício 06" }}
      />
    </Stack.Navigator>
  );
}
