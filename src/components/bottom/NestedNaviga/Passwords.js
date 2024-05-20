import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Passwords = () => {
  const navigate = useNavigation();

  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:20}}>Passwords</Text>
      <Text
        onPress={() => navigate.navigate('Profile')}
        style={{
          fontSize: 19,
          padding: 13,
          marginTop:18,
          backgroundColor: 'gray',
          borderRadius: 10,
          color: 'white',
        }}>
        {'< '} Go to Profile 
      </Text>
    </View>
  )
}

export default Passwords