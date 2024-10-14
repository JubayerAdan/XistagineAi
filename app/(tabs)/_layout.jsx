import { View, Text } from "react-native";
import React from "react";
import home from "./home";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "black" }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: (color) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          headerShown: false,
          title: "Collection",
          tabBarIcon: (color) => (
            <Ionicons name="folder-open" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: (color) => (
            <Ionicons name="people-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
