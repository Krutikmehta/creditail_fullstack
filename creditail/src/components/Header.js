import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const backButton = require('../../src/assests/Images/vector.png');

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
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image
          source={backButton}
          style={{width: 16, aspectRatio: 1, marginLeft: 16}}
        />
      </TouchableOpacity>
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
