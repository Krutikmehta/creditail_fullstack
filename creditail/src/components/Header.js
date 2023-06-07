import {View, Text, Image} from 'react-native';
import React from 'react';
const backButton = require('../../src/assests/Images/Vector.png');

export default function Header(props) {
  return (
    <View
      style={{
        width: '100%',
        height: 56,
        backgroundColor: '#2A2D31',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={backButton}
        style={{width: 16, aspectRatio: 1, marginLeft: 16}}
      />
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.children}
      </View>
    </View>
  );
}
