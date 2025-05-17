import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export function Button(props: any) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.button}
      onPress={props.onSubmit ? props.onSubmit : () => router.push(props.goTo)}
    >
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006CFC",
    borderStyle: "solid",
    borderColor: "#001997",
    borderWidth: 10,
    borderRadius: 10,
    width: 322,
    height: 87,
    margin: 0,
  },
  text: {
    color: "#D8FCFC",
    fontFamily: "Odibee Sans",
    fontSize: 45,
    textAlign: "center",
  },
});
