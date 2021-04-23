import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
} from "react-native";
import{Picker} from '@react-native-community/picker';
import { SearchBar } from "react-native-elements";
import WatchCardComponent from "../components/WatchCardComponents/WatchCardComponent";
import WatchesData from "./../data.js";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Watches = () => {
  const [searchKey, setSearchKey] = useState("");
  const [sortBy, setSortCriteria] = useState("orders");

  const watchesJsonToArray = (watches) => {
    var watchesArray = [];

    for (var i in watches) {
      watchesArray.push(watches[i]);
      if (watches[i].variants.length > 0) {
        var variants = watches[i].variants;
        for (var i in variants) {
          watchesArray.push(variants[i]);
        }
      }
    }
    return watchesArray;
  };

  const filterWatchesBySearchKey = (watchesArray) => {
    if (searchKey) {
      return watchesArray.filter((watch) =>
        watch.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    } else {
      return watchesArray;
    }
  };

  const sortWatchesDataComparatorFunction = (watch1, watch2) =>{
    if(sortBy==="orders"){
     return watch1[sortBy] - watch2[sortBy];
    }
    else{
      return watch1[sortBy].localeCompare(watch2[sortBy]);
    }
  }

  const updateSortMethod = (value) => {
    setSortCriteria(value);
  };

  var filteredWatchesData = filterWatchesBySearchKey(
    watchesJsonToArray(WatchesData)
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search"
        value={searchKey}
        onChangeText={setSearchKey}
        lightTheme={true}
        round={true}
        platform="default"
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchInputBarContainer}
      />

      <View style={styles.filterSortContainer}>
        <View style={styles.sortContainer}>
          <FontAwesome5 name="sort" size={20}></FontAwesome5>
          <Text>Sort by:</Text>
          <Picker
            style= {styles.picker}
            mode= "dropdown"
            selectedValue={sortBy}
            onValueChange={(itemValue) => {
              updateSortMethod(itemValue);
            }}
          >
            <Picker.Item label="Delivery" value="delivery_time" />
            <Picker.Item label="Demand" value="orders" />
            <Picker.Item label="Model" value="model_code" />
            <Picker.Item label="Name" value="name" />
          </Picker>
        </View>

        <View style={styles.filterContainer}>
          <Ionicons name="filter" size={20}></Ionicons>
          <Text>Filter</Text>
        </View>
      </View>

      <FlatList
        data={filteredWatchesData.sort((w1, w2) => sortWatchesDataComparatorFunction(w1,w2))}
        renderItem={({ item }) => <WatchCardComponent WatchData={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
  },
  searchBarContainer: {
    backgroundColor: "transparent",
  },
  searchInputBarContainer: {
    backgroundColor: "lightgray",
  },
  filterSortContainer: {
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  filterContainer: {
    width: win.width / 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  sortContainer: {
    width: win.width / 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  picker: {
    width: win.width/3.1,
    height: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Watches;
