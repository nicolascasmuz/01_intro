import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { Hands } from "@/components/Hands";
import { RoomID } from "@/components/RoomID";
import { Score } from "@/components/Score";

import background from "@/assets/images/white-background.png";

export default function ShareCodeScreen() {
  return (
    <ImageBackground style={styles.background} source={background}>
      <View style={styles.container}>
        <View style={styles.ScoreRoomIDContainer}>
          <Score
            style={styles.score}
            player1="Juan"
            player2="Pedro"
            score1={0}
            score2={0}
          />
          <RoomID style={styles.roomID} roomID="HWNUI" />
        </View>
        <View style={styles.codeContainer}>
          <Text style={styles.text1}>Compartí el código:</Text>
          <Text style={styles.roomIDText}>HWNUI</Text>
          <Text style={styles.text2}>con tu contrincante</Text>
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
  },
  ScoreRoomIDContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  score: {
    marginTop: 10,
  },
  roomID: {
    marginTop: 10,
  },
  codeContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    color: "#080808",
    fontSize: 35,
    margin: 0,
  },
  text1: {
    fontFamily: "American Typewriter Regular",
    fontSize: 35,
  },
  roomIDText: {
    fontFamily: "American Typewriter Bold",
    fontSize: 35,
  },
  text2: {
    fontFamily: "American Typewriter Regular",
    fontSize: 35,
  },
});
