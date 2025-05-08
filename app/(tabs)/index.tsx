import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import FitzRoyMountImg from "@/assets/images/monte-fitz-roy.jpg";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={FitzRoyMountImg}>
        <View style={styles.overlay}>
          <Text style={styles.text}>Hola mundo</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000090",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
