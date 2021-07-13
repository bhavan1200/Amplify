import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from "./Tabs";
import { DrawerContent } from '../screens/drawerContent';

const Drawer = createDrawerNavigator();
const Drawers = () => {
    return (
       
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  initialRouteName="Home">
          <Drawer.Screen  name="Home" component={Tabs} />
        </Drawer.Navigator>
     
    )
}

export default Drawers;
