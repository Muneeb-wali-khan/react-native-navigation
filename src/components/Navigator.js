import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Screen1 from './stack/Screen1';
import Screen2 from './stack/Screen2';
import MainDrawer from './drawer/MainDrawer';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Dash-Board" component={MainDrawer} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;


// we hide the header on MainDrawer page beacuase dont want
//  header on top only want drawer


// you have wrap this container only one time to wrap whole navigation for other 
// navigators