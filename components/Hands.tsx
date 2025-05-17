import paper from "@/assets/images/papel.png";
import rock from "@/assets/images/piedra.png";
import scissor from "@/assets/images/tijera.png";
import { Image, StyleSheet, View } from "react-native";

export function Hands() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={rock} />
      <Image style={styles.img} source={paper} />
      <Image style={styles.img} source={scissor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 46,
  },
  img: {
    alignSelf: "flex-end",
  },
});
