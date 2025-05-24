import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Button } from "./Button";

export function SignInForm(props: any) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    console.log("name: ", value);

    setValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="tu nombre"
        onChangeText={setValue}
      >
        {props.children}
      </TextInput>
      <Button goTo="/share-code" /* onSubmit={handleSubmit} */>Empezar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 20 },
  input: {
    backgroundColor: "#fafafa",
    borderStyle: "solid",
    borderColor: "#001997",
    borderWidth: 10,
    borderRadius: 10,
    color: "#080808",
    fontFamily: "Odibee Sans",
    fontSize: 45,
    textAlign: "center",
    width: 322,
    height: 87,
    margin: 0,
  },
});
