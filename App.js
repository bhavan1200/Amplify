import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawers from "./navigation/Drawer";
import Amplify from "@aws-amplify/core";
import awsmobile from "./src/aws-exports";
import {withAuthenticator} from "aws-amplify-react-native";
import {Auth, API, graphqlOperation} from "aws-amplify";
import {getUser} from "./src/graphql/queries"
import {createUser} from "./src/graphql/mutations"
import {View, Text} from "react-native"

 Amplify.configure(awsmobile);

 const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]



function App() {
 

  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  }

  // run this snippet only when App is first mounted
  useEffect( () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
            )
        )

        if (userData.data.getUser) {
          console.log("User is already registered in database");
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: userInfo.username,
          imageUri: getRandomImage(),
          status: 'Hey, I am using WhatsApp',
        }

        await API.graphql(
          graphqlOperation(
            createUser,
            { input: newUser }
          )
        )
      }
    }

    fetchUser();
  }, [])  
  return (
    <NavigationContainer>
      <Drawers />
    </NavigationContainer>
  

  // <View>
  //   <Text>Hello</Text>
  // </View>
  )

}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefault: ['phone_number']
  }
}) ;


