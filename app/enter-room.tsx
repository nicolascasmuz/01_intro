import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { Form } from "@/components/Form";
import { Hands } from "@/components/Hands";
import { MainTitle } from "@/components/MainTitle";

import background from "@/assets/images/white-background.png";

export default function EnterRoomScreen() {
  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <MainTitle text="Piedra Papel o Tijera" />
        <Form placeholder="código" text="Ingresar" />
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
    alignItems: "center",
    justifyContent: "space-between",
  },
});
