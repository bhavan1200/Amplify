import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import Tabs from "./tabs";
import { DrawerContent } from '../screens/drawerContent';

const Drawer = createDrawerNavigator();
const Drawers = () => {
    return (
       
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  initialRouteName="Home">
          <Drawer.Screen  name="Home" component={Tabs} />
          {/* <Drawer.Screen name="Chat" component={ChatScreen} /> */}
        </Drawer.Navigator>
     
    )
}

export default Drawers;
