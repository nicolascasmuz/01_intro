import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { Hands } from "@/components/Hands";
import { MainTitle } from "@/components/MainTitle";
import { RoomForm } from "@/components/RoomForm";

import background from "@/assets/images/white-background.png";

export default function EnterRoomScreen() {
  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <MainTitle text="Piedra Papel o Tijera" />
        </View>
        <View style={styles.formContainer}>
          <RoomForm />
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: 20,
  },
});
