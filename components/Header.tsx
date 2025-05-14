import logotipo from "@/assets/images/logo-patagonia-trip.png";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <Link href="/">
        <Image source={logotipo} style={styles.proyectLogo} />
      </Link>
      <Text style={styles.proyectName}>Patagonia Trip</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#30336b",
    width: "100%",
    padding: 20,
  },
  proyectLogo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  proyectName: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
  },
});
