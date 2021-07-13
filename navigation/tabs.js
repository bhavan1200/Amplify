import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons,Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FindScreen from "../screens/FindScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactsScreen from "../screens/ContactsScreen"
import Colors from "../constants/Colors";


const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "MyApp",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 60,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <Octicons name="search" size={24} color="#fff" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="#fff"
              />
            </View>
          ),
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={30}
              color="black"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

// const ChatStackScreen = ({ navigation }) => {
//   return (
//     <ChatStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: Colors.light.tint,
//         },
//         headerTintColor: Colors.light.background,
//         headerTitleAlign: "center",
//         headerTitleStyle: {
//           fontWeight: "bold",
//         },
//       }}
//     >
//       <ChatStack.Screen
//         name="Chat"
        
//         component={ChatScreen}
//         options={{
//           title: "MyApp",
          
//           headerRight: () => (
//             <View
//               style={{
//                 flexDirection: "row",
//                 width: 60,
//                 justifyContent: "space-between",
//                 marginRight: 10,
//               }}
//             >
//               <Octicons name="search" size={24} color="#fff" />
//               <MaterialCommunityIcons
//                 name="dots-vertical"
//                 size={24}
//                 color="#fff"
//               />
//             </View>
//             // <Ionicons name="ios-menu" size={30} color="black" onPress={() => {navigation.openDrawer()}} />
//           ),
//         }}
//       />
      {/* <ChatStack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          title: "User",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <FontAwesome5 name="video" size={22} color="#fff" />
              <MaterialIcons name="call" size={22} color="#fff" />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color="#fff"
              />
            </View>
          ),
        }}
      />
       */}
    //    <ChatStack.Screen
    //     name="Contacts"
    //     component={ContactsScreen} />
    // </ChatStack.Navigator>
 // );
//};



const Tabs = () => {
  
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";
    if (routeName === "Chat") {
      return false;
    }
    return true;
  };
  
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
          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        // activeBackgroundColor:"black",
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Find" component={FindScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Chat"
        component={SettingsScreen}
        // options={({ route }) => ({
        //   tabBarVisible: getTabBarVisibility(route),
        // })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

