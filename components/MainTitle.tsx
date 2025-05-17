import { StyleSheet, Text } from "react-native";

export function MainTitle(props: any) {
  return <Text style={styles.title}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    width: 300,
    height: 225,
    color: "#009048",
    fontFamily: "American Typewriter Bold",
    fontSize: 75,
    lineHeight: 70.48,
  },
});
