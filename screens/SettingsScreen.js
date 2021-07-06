import React from 'react';
import {View, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';


const SettingsStack = createStackNavigator()
const SettingsStackScreen = () => {
  return(
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
      {/* <SettingsStack.Screen name="Post" component={PostScreen}/> */}
    </SettingsStack.Navigator>
  )
 

}
export const SettingsScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Settings screen</Text>
      <Button
        title="Go to Post"
        onPress={() => navigation.navigate("Post")}
      />
    </View>
    )
}

export default SettingsStackScreen;
