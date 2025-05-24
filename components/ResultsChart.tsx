import { StyleSheet, Text, View } from "react-native";

export function ResultsChart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puntaje</Text>
      <View>
        <Text style={styles.myResult}>Vos: 2</Text>
        <Text style={styles.oppResult}>Pedro: 5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#000000",
    color: "#D8FCFC",
    width: 259,
    height: 217,
    margin: 0,
    padding: 10,
    gap: 10,
  },
  title: {
    fontFamily: "Odibee Sans",
    fontSize: 55,
    color: "#000000",
    textAlign: "center",
  },
  myResult: {
    fontFamily: "Odibee Sans",
    fontSize: 45,
    textAlign: "right",
    listStyle: "none",
    color: "#000000",
    padding: 0,
  },
  oppResult: {
    fontFamily: "Odibee Sans",
    fontSize: 45,
    textAlign: "right",
    listStyle: "none",
    color: "#000000",
    padding: 0,
  },
});
