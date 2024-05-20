import {View, Text} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
  const navigate = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          fontSize: 18,
          borderRadius: 10,
          backgroundColor: 'black',
          color: 'white',
        }}
        onPress={() => {
          navigate.navigate('Dash-Board'); // when we click this navigate to Drawer Screen
        }}>
        Go to Drawer Screen Home {' >'}
      </Text>
    </View>
  );
};

export default Screen2;

// now i want that when i want when i click
// any button simply go to drawer screen and open drawer means open main home/dashboard
// page of deffrent list of routes to deffrent pages screens
