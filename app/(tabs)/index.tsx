import React from "react";
import { StyleSheet, Text, View } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo</Text>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
