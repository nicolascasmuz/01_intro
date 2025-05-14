import FitzRoyMountImg from "@/assets/images/monte-fitz-roy.jpg";
import { Header } from "@/components/Header";
import { Link } from "expo-router";

import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground style={styles.img} source={FitzRoyMountImg}>
        <View style={styles.overlay}>
          <Text style={styles.text}>Hola mundo</Text>
          <Link href="/contact" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>CONTACT US</Text>
            </Pressable>
          </Link>
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
    gap: 25,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fafafa75",
    borderRadius: 10,
    padding: 5,
    width: 135,
    height: "auto",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "regular",
    textAlign: "center",
  },
});
