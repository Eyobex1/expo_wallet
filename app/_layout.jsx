import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Text } from "@react-navigation/elements";
import { Linking, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayoutNav() {
  const telegramUsername = "Eyobex1";

  const openTelegram = () => {
    const url = `https://t.me/${telegramUsername}`;
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open Telegram:", err)
    );
  };
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
        <Text style={styles.footer}>
          Developed By{" "}
          <Text style={styles.name} onPress={openTelegram}>
            Eyob Tekle
          </Text>
        </Text>
      </SafeScreen>
      <StatusBar style="dark" />
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  footer: {
    textAlign: "center", // Center the text
    fontSize: 13,
    color: "#888",
    marginBottom: 10,
  },
  name: {
    color: "#8B593E",
    fontWeight: "bold",
    fontSize: 15,
  },
});
