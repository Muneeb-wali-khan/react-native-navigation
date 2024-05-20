import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = () => {
  const navigate = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../Images/images.png')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          backgroundColor: 'red',
          marginTop: 60,
        }}
      />
      <Text
        style={{
          justifyContent: 'center',
          fontSize: 15,
          alignSelf: 'center',
          marginTop: 10,
          fontWeight: '800',
        }}>
        Muneeb Shah
      </Text>
      <Text
        style={{
          justifyContent: 'center',
          fontSize: 13,
          alignSelf: 'center',
          marginTop: 2,
          fontWeight: '800',
        }}>
        Muneebshah@gmail.com
      </Text>

      {/* items */}
      <View style={{marginTop: 25}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginTop: 20,
            paddingLeft: 30,
            width: '100%',
            padding: 10,
          }}
          onPress={() => {
            navigate.navigate('DashBoard');
          }}>
          DashBoard
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginTop: 10,
            paddingLeft: 30,
            width: '100%',
            padding: 10,
          }}
          onPress={() => {
            navigate.navigate('Drawer1');
          }}>
          Drawer1
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginTop: 10,
            paddingLeft: 30,
            width: '100%',
            padding: 10,
          }}
          onPress={() => {
            navigate.navigate('Drawer2');
          }}>
          Drawer2
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
