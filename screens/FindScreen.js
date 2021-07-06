import React from 'react';
import {View, Text, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ExtraScreen1 from './ExtraSScreen1';
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from 'react-redux';




const FindStack = createStackNavigator()
const FindStackScreen = () => {
  
  return(
    <FindStack.Navigator>
      <FindStack.Screen name="Find" component={FindScreen} options={{
         headerLeft:() => (
          <Ionicons name="ios-menu" size={30} color="black" onPress={() => {navigation.openDrawer()}} />
        )
      }}/>
      <FindStack.Screen name="Extra" component={ExtraScreen1}/>
    </FindStack.Navigator>
  )
 

}
const FindScreen = ({navigation}) => {
  const posts = useSelector(state => state.posts);
  console.log(posts);
  

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Find screen</Text>
      {renderedPosts}
      <Button
        title="Go to ExtraScreen1"
        onPress={() => navigation.navigate("Extra")}
      />
    </View>
    )
}

export default FindStackScreen;
