import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FindScreen from "../screens/FindScreen";
import { Ionicons } from "@expo/vector-icons";

const size = 32;
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, style }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Find") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else {
            iconName = focused ? "chatbox" : "chatbox-ellipses";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        // activeBackgroundColor:"black",
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle:{
          fontWeight:"bold"
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5Df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;














//const CustomTabBarButton = ({ children, onPress }) => {
  //   return (
  //     <TouchableOpacity
  //       style={{
  //         top: -30,
  //         alignItems: "center",
  //         justifyContent: "center",
  //         ...styles.shadow,
  //       }}
  //       onPress={onPress}
  //     >
  //       <View
  //         style={{
  //           width: 70,
  //           height: 70,
  //           borderRadius: 35,
  //           backgroundColor: "#e32f45",
  //         }}
  //       >
  //         {children}
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };