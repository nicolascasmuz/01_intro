import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import background from "@/assets/images/white-background.png";

import { Countdown } from "@/components/Countdown";
import { Hands } from "@/components/Hands";

export default function CountdownScreen() {
  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <View style={styles.countdownContainer}>
          <Countdown />
        </View>
        <Hands />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countdownContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
