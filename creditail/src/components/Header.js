import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles/HeaderStyles';

const backButton = require('../../src/assests/Images/vector.png');

export default function Header(props) {
  const {showBackButton = true} = props;
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={backButton} style={styles.backImage} />
        </TouchableOpacity>
      )}
      <View style={styles.childView}>{props.children}</View>
    </View>
  );
}
