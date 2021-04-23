import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Watches from '../Screens/WatchesScreen.js';
import Clients from '../Screens/ClientsScreen.js';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Watches">
        <Tab.Screen name="Clients" component={Clients} options={{ tabBarLabel: "Clients" }} />
        <Tab.Screen name="Watches" component={Watches} options={{ tabBarLabel: "Watches" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopBarNavigator;
