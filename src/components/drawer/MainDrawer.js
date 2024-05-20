import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer1 from './Drawer1';
import Drawer2 from './Drawer2';
import DashBoard from './DashBoard';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props)=> <CustomDrawer {...props}/>}>
      <Drawer.Screen name="DashBoard" component={DashBoard} />
      {/* now i want the Drawer1 drawer to be customise drawer  */}
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;

// main page where deffrent screens routes and drawer can found


// ===>  drawerContent={(props)=> <CustomDrawer {...props}/>
// we add this when we want custom drawer for single screen  just like we have 
// Drawer1 drawer in Drawer1 so we will make it customisable