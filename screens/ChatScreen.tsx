import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ChatListItem from "../components/ChatListItem/index";
import chatRooms from "../data/ChatRooms";
import NewMessageButton from "../components/NewMessageButtton";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from "./queries";

export const ChatScreen = () => {

  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)
        // console.log(userData.data.getUser.chatRoomUser.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchChatRooms();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
};

export default ChatScreen;
