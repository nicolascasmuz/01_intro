import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Button } from "./Button";

export function Form(props: any) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) {
      Alert.alert("Error", "Por favor completa todos los campos.");
      return;
    }

    if (props.placeholder === "tu nombre") {
      console.log("name: ", value);
    }
    if (props.placeholder === "código") {
      console.log("code: ", value);
    }

    setValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={setValue}
      >
        {props.children}
      </TextInput>
      <Button onSubmit={handleSubmit}>{props.text}</Button>
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
