import React from "react";
import { View, Text } from "react-native";
import Stories from "../components/Stories";
import Feed from "../components/feed/index"
 
// import PostsList from './PostsList';
// import { AddPostForm } from '../features/post/addPostForm';



const HomeScreen = ({ navigation }) => {
  return (
    <View >
      {/* <Stories /> */}
      <Feed  />
    </View>
  );
};

export default HomeScreen;
