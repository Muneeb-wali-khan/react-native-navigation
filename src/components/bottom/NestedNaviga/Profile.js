import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigate = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Profile</Text>
      <Text
        onPress={() => navigate.navigate('Passwords')}
        style={{
          fontSize: 19,
          padding: 13,
          marginTop: 18,
          backgroundColor: 'gray',
          borderRadius: 10,
          color: 'white',
        }}>
        Go to Passwords {' >'}
      </Text>
    </View>
  );
};

export default Profile;
