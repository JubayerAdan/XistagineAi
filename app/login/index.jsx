import { View, Text, Image, StyleSheet, Button } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";
import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { TouchableOpacity } from "react-native";
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function index() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("(tabs)/home", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        // setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View>
      <Image
        style={{ width: "100%", height: 600 }}
        source={require("../../assets/images/authpageillst.jpg")}
      ></Image>
      <View style={styles.loginContainer}>
        <Text style={styles.WelcomeText}>Welcome to XistagineAI</Text>
        <Text style={{ color: Colors.GRAY.text, textAlign: "center" }}>
          Create Ai Art In Just On Click
        </Text>
        <View style={styles.Button}>
          <TouchableOpacity onPress={onPress} style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 13,
            color: Colors.GRAY.text,
          }}
        >
          By continuing you agree to ours terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: 25,
    marginTop: -20,
    backgroundColor: "white",
    height: 600,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  WelcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  Button: {
    backgroundColor: "#000000",
    borderRadius: 40,
    marginTop: 20,
  },
  buttonTouchable: {
    padding: 20,

    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
