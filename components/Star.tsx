import starImg from "@/assets/images/Star-3.png";
import { Image, StyleSheet, Text, View } from "react-native";

export function Star() {
  return (
    <View>
      <Image style={styles.image} source={starImg} />
      <Text style={styles.text}>Empate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 254,
    height: 259,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Odibee Sans",
    fontSize: 55,
    fontWeight: 400,
    lineHeight: 61,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: 0,
  },
});
