import React from 'react';
import {View, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
// import PostsList from './PostsList';
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { AddPostForm } from '../features/post/addPostForm';
import Colors from "../constants/Colors"



const HomeStack = createStackNavigator()
const HomeStackScreen = ({navigation}) => {
  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor:Colors.light.tint,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: "center",
      headerTitleStyle:{
        fontWeight:"bold",

      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title:"MyApp",
        headerRight:() => (
          <View style={{flexDirection:"row", width:60, justifyContent:"space-between", marginRight:10}}>
            <Octicons name="search" size={24} color="#fff" />
            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
          </View>
          // <Ionicons name="ios-menu" size={30} color="black" onPress={() => {navigation.openDrawer()}} />
        )
      }}/>
    </HomeStack.Navigator>
  )
 

}
export const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Home screen</Text>
      {/* <AddPostForm />
      <PostsList /> */}
    </View>
    )
}

export default HomeStackScreen;
