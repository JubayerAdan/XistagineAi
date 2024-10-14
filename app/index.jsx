import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const user = useAuth();
  return !user ? <Redirect href="/login" /> : <Redirect href="(tabs)/home" />;
}
