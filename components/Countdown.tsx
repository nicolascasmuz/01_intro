import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export function Countdown() {
  const [count, setCount] = useState(3);
  const countRef = useRef(count); // Guarda el valor actual del conteo

  useEffect(() => {
    countRef.current = count;

    if (count > 0) {
      const timeout = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <View>
      <Text style={styles.countdownNumber}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  countdownNumber: {
    color: "#000000",
    fontFamily: "American Typewriter Bold",
    fontSize: 170,
    textAlign: "center",
  },
});
