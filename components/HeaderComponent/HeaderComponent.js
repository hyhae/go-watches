import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome to your watch store!</Text>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity>
          <MaterialIcons name='add' size={30} color={"#ACACAC"} style={styles.menuAdd}></MaterialIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name='menu' size={30} color={"#ACACAC"} style={styles.menuButton}></MaterialIcons>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  menuAdd: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 20,
    borderStyle: "solid",
    backgroundColor: "#EDEDED",
  },
  menuButton: {
    paddingHorizontal: 5
  }
});

export default Header;
