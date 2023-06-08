import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './Styles/CashScreenStyles';

const tickmark = require('../../src/assests/Images/tickmark.png');

export default function CashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image source={tickmark} style={styles.tickImage} />
      </View>
      <View style={styles.invoiceDetailsView}>
        <Text style={styles.billNoText}>MD22/10111</Text>
        <Text style={styles.cashText}>$500</Text>
      </View>
      <View>
        <Text style={styles.merchantText}>Agarwal Brothers and Sons</Text>
      </View>
      <View style={styles.cashDetailsView}>
        <View style={styles.dashedLine}></View>
        <Text style={styles.paymentModeText}>Paid By Cash</Text>
      </View>
      <View style={styles.redirectingView}>
        <Text style={styles.redirectingText}>Redirecting to home screen..</Text>
      </View>
    </View>
  );
}
