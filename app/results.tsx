import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { Button } from "@/components/Button";
import { ResultsChart } from "@/components/ResultsChart";
import { Star } from "@/components/Star";

import yellowFilter from "@/assets/images/Rectangle-3.png";
import background from "@/assets/images/white-background.png";

export default function ResultsScreen() {
  return (
    <ImageBackground style={styles.background} source={background}>
      <ImageBackground style={styles.background} source={yellowFilter}>
        <View style={styles.container}>
          <Star />
          <ResultsChart />
          <Button>Volver a jugar</Button>
        </View>
      </ImageBackground>
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
    justifyContent: "space-around",
    alignItems: "center",
  },
});
