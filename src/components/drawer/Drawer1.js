import { View, Text } from 'react-native'
import React from 'react'



const Drawer1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: '600',
        }}>
     Drawer1
      </Text>
    </View>
  )
}

export default Drawer1


// now i want a bottom navigator in Page1  only so
// we can Make a Botton Navigator Here