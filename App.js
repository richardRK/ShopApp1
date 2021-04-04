import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

export default function App() {

  LogBox.ignoreLogs(['Remote debugger']);

  return (
    <View style={styles.container}>
      <Text> Open up App.js to start working on your app! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
