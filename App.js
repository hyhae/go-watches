import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/HeaderComponent/HeaderComponent.js";
import TopBarNavigator from "./Navigators/TopBarNavigator.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TopBarNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
});
