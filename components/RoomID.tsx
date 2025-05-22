import { StyleSheet, Text, View } from "react-native";

export function RoomID(props: any) {
  return (
    <View>
      <Text style={styles.sala}>Sala</Text>
      <Text style={styles.roomID}>{props.roomID}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sala: {
    fontFamily: "American Typewriter Bold",
    fontSize: 24,
    margin: 0,
    textAlign: "right",
  },
  roomID: {
    fontFamily: "American Typewriter Regular",
    fontSize: 24,
    margin: 0,
    textAlign: "right",
  },
});
