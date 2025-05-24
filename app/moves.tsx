import rockImg from "@/assets/images/piedra.png";
import background from "@/assets/images/white-background.png";
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

export default function MovesScreen() {
  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <Image style={styles.topHand} source={rockImg} />
        <Image style={styles.bottomHand} source={rockImg} />
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
  topHand: {
    width: 150,
    height: 300,
    transform: "rotate(-180deg)",
  },
  bottomHand: {
    width: 150,
    height: 300,
  },
});
