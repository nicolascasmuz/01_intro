import { StyleSheet, Text, View } from "react-native";

export function Score(props: any) {
  return (
    <View>
      <Text style={styles.player1}>
        {props.player1}
        <Text style={styles.score1}>: {props.score1}</Text>
      </Text>
      <Text style={styles.player2}>
        {props.player2}
        <Text style={styles.score2}>: {props.score2}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  player1: {
    fontFamily: "American Typewriter Regular",
    fontSize: 24,
    color: "#080808",
    margin: 0,
  },
  score1: {
    fontFamily: "American Typewriter Bold",
    fontSize: 24,
    color: "#080808",
    margin: 0,
  },
  player2: {
    fontFamily: "American Typewriter Regular",
    fontSize: 24,
    color: "#FF6442",
    margin: 0,
  },
  score2: {
    fontFamily: "American Typewriter Bold",
    fontSize: 24,
    color: "#FF6442",
    margin: 0,
  },
});
