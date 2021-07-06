import React from 'react';
import {View, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import PostsList from './PostsList';


const ChatStack = createStackNavigator()
const ChatStackScreen = () => {
  return(
    <ChatStack.Navigator>
      <ChatStack.Screen name="Chat" component={ChatScreen}/>
      <ChatStack.Screen name="Post" component={PostsList}/>
    </ChatStack.Navigator>
  )
 

}
export const ChatScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Chat screen</Text>
      <Button
        title="Go to Post"
        onPress={() => navigation.navigate("Post")}
      />
    </View>
    )
}

export default ChatStackScreen;
