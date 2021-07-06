import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawers from "./navigation/drawer";
// import Amplify from "@aws-amplify/core";
// import awsmobile from "./src/aws-exports";
// import {withAuthenticator} from "aws-amplify-react-native";

// Amplify.configure(awsmobile);


const App = () => {
  return (
    <NavigationContainer>
      <Drawers />
    </NavigationContainer>
  )

}

// export default withAuthenticator(App, {
//   signUpConfig: {
//     hiddenDefault: ['phone_number']
//   }
// }) ;

export default App;

