import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '../bottom/Tab1';
import Tab2 from '../bottom/Tab2';
import Tab3 from '../bottom/Tab3';

const Bottom = createBottomTabNavigator();

const DashBoard = () => {
  return (
    <Bottom.Navigator screenOptions={{tabBarStyle: {height: 65}}}>
      <Bottom.Screen
        name="Tab1"
        component={Tab1}
        options={{
          title: 'Home',
          headerShown: false,
          // change the icons of bottoms tabs
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Image
                source={require('../../Images/home.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          // style the titles of botto{size, color, focused}m tabs
          tabBarLabel: ({size, color, focused}) => {
            return (
              <Text
                style={{
                  fontSize: 15,
                  marginBottom: 6,
                  fontWeight: focused ? '900' : '600',
                  color: focused ? 'black' : 'gray',
                }}>
                Home
              </Text>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Tab2"
        component={Tab2}
        options={{
          title: 'Add',
          headerShown: false,
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Image
                source={require('../../Images/plus-circle.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: ({size, color, focused}) => {
            return (
              <Text
                style={{
                  fontSize: 15,
                  marginBottom: 6,
                  fontWeight: focused ? '900' : '600',
                  color: focused ? 'black' : 'gray',
                }}>
                Add
              </Text>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Tab3"
        component={Tab3}
        options={{
          title: 'User',
          headerShown: false,
          tabBarIcon: ({size, color, focused}) => {
            return (
              <Image
                source={require('../../Images/user.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: ({size, color, focused}) => {
            return (
              <Text
                style={{
                  fontSize: 15,
                  marginBottom: 6,
                  fontWeight: focused ? '900' : '600',
                  color: focused ? 'black' : 'gray',
                }}>
                Account
              </Text>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default DashBoard;

// tabBarIcon
// have three parametters you can give or not
// size,color,focused

// change the height of bottom navigator
// screenOptions={{tabBarStyle:{height:60}}} in

// focused mean which tab is currently active
// tintColor mean which color is used for icon
// style={{width:size,height:size,tintColor:focused? "black":"gray"}}
