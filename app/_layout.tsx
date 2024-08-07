import { StyleSheet, Text, View } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";

import { GlobalProvider } from "@/context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    // Loading the Clash Display font files

    ClashDisplayMedium: require("../assets/fonts/ClashDisplayMedium.otf"),
    ClashDisplayRegular: require("../assets/fonts/ClashDisplayRegular.otf"),
    ClashDisplayBold: require("../assets/fonts/ClashDisplayBold.otf"),
    ClashDisplaySemibold: require("../assets/fonts/ClashDisplaySemibold.otf"),
    ClashDisplayLight: require("../assets/fonts/ClashDisplayLight.otf"),
    ClashDisplayExtralight: require("../assets/fonts/ClashDisplayExtralight.otf"),

    // Loading the Poppins font files

    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsSemibold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    PoppinsExtralight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <GlobalProvider>
      <Stack>
        {/* Stack screen for the entry point */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* Stack screen for the authorization flow */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* Stack screen for the main window */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Stack screen for the profile options */}
        <Stack.Screen name="(profile)" options={{ headerShown: false }} />
        {/* Stack screen for the game options */}
        <Stack.Screen name="(game)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
