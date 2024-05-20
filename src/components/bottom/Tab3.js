import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './NestedNaviga/Profile'
import Passwords from './NestedNaviga/Passwords'

const Stack = createStackNavigator()

const Tab3 = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Passwords" component={Passwords} options={{headerShown:false}}/>
      </Stack.Navigator>
  )
}

export default Tab3


// in TAB3 WE USE nestted Tab STACK NAVIGATOR 
// because its inside the Account on Dashbaord