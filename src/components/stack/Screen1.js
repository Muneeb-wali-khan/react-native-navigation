import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
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
          navigate.navigate('Screen2') // when we click this navigate to screen2
        }}>
        Go to Screen 2 {' >'}
      </Text>
    </View>
  );
};

export default Screen1;
