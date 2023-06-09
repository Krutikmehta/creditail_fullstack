import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles/CashScreenStyles';
import axios from 'axios';
const tickmark = require('../../src/assests/Images/tickmark.png');

export default function CashScreen(props) {
  const {navigation, route} = props;
  const [data, setDate] = useState(route.params.data);
  const [state, setState] = useState('loading');

  useEffect(() => {
    axios
      .post('https://creditail-backend.vercel.app/api/v1/update_invoice', {
        billNo: data.billNo,
        pendingAmount: data.pendingAmount - route.params.amountPaid,
      })
      .then(resp => {
        setState('success');
      })
      .catch(e => {
        setState('error');
      })
      .finally(() => {
        setTimeout(() => {
          navigation.navigate('Home');
        }, 2000);
      });
  }, []);

  if (state === 'loading') {
    return (
      <View style={styles.container}>
        <Text style={styles.statesText}>Processing Payment ...</Text>
      </View>
    );
  }
  if (state === 'error') {
    return (
      <View style={styles.container}>
        <Text style={styles.statesText}>
          An error occured. Please try again!
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* tick image */}
      <View>
        <Image source={tickmark} style={styles.tickImage} />
      </View>
      {/* bill details */}
      <View style={styles.invoiceDetailsView}>
        <Text style={styles.billNoText}>{data.billNo}</Text>
        <Text style={styles.cashText}>${route.params.amountPaid}</Text>
      </View>
      <View>
        <Text style={styles.merchantText}>{data.retailerName}</Text>
      </View>
      {/* payment mode */}
      <View style={styles.cashDetailsView}>
        <View style={styles.dashedLine}></View>
        <Text style={styles.paymentModeText}>
          Paid By {route.params.paymentMethod}
        </Text>
      </View>
      {/* redirection info */}
      <View style={styles.redirectingView}>
        <Text style={styles.redirectingText}>Redirecting to home screen..</Text>
      </View>
    </View>
  );
}
