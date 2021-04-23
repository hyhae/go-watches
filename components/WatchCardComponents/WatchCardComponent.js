import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const WatchCardComponent = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.WatchData.name}</Text>
        <Text style={styles.subText}>{props.WatchData.model_code}</Text>
        <View style={styles.demandDeliveryContainer}>
          <View style={styles.demandContainer}>
            <MaterialIcons name="person" size={22}></MaterialIcons>
            <Text style={styles.subText}>{props.WatchData.orders}</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <FontAwesome name="hourglass-half" size={20}></FontAwesome>
            <Text style={styles.subText}>{props.WatchData.delivery_time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.WatchData.image }} resizeMethod="resize" />
      </View>
    </View>
  );
};

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    margin: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E2E0E0",
    borderRadius: 20,
    borderStyle: "solid",
    backgroundColor: "#F6F4F4",
  },
  textContainer: {
    margin:5,
    flexDirection: "column",
  },
  demandDeliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: win.width / 2.3,
  },
  demandContainer: {
    padding:5,
    width: win.width/6,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#E2E0E0",
    borderRadius: 5,
    borderStyle: "solid",
    backgroundColor: "#F6F4F4",
  },
  deliveryContainer: {
    padding:5,
    width: win.width/4,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#E2E0E0",
    borderRadius: 5,
    borderStyle: "solid",
    backgroundColor: "#F6F4F4",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#E2E0E0",
    borderRadius: 30,
    borderStyle: "solid",
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    width: win.width / 3,
    height: win.height / 9,
    resizeMode: "contain",
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default WatchCardComponent;
