import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { API, Auth, graphqlOperation} from "aws-amplify";
import {createMessage} from "../../src/graphql/mutations"

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";

const InputBox = (props) => {

  const [message, setMessage] = useState("");
  const [myUserId, setMyUserId] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
       setMyUserId(userInfo.attributes.sub);
    }
  }, [])

  
  const onMichroPhonePress = () => {
      console.warn("MicroPhone")
  }

  const onSendPress = async () => {
      try{
         await API.graphql(
           graphqlOperation(
             createMessage, {
               input: {
                 content:message,
                 myUserID: myUserId,
                 
               }
             }
           )
         )

      } catch (e) {

        console.log(e)
      }
  }

  const onPress = () => {
      if(!message){
          onMichroPhonePress();
      } else {
         onSendPress();
      }
  }



  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder="type a message"
          multiline
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && <Fontisto name="camera" size={24} color="grey" />}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="#fff" />
          ) : (
            <MaterialIcons name="send" size={28} color="#fff" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
