import {
  Text,
  View,
  Image,
  FlatList,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles/HomescreenStyles';
import Header from '../components/Header';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
const backButton = require('../../src/assests/Images/vector.png');

export default function Homescreen({navigation}) {
  const [data, setData] = useState();
  const [state, setState] = useState('loading');
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setState('loading');
      axios
        .get('https://creditail-backend.vercel.app/api/v1/invoices')
        .then(resp => {
          setData(resp.data.invoices);
          console.log(JSON.stringify(resp.data.invoices));
          setState('success');
        })
        .catch(e => {
          setState('error');
          console.log(e);
        });
    }
  }, [isFocused]);

  const navigateToPayment = index => {
    navigation.navigate('Payment', {
      data: data[index],
    });
  };
  const renderCard = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.invoiceCard}
        onPress={() => navigateToPayment(index)}>
        <View style={styles.invoiceIdVIew}>
          <Text style={styles.invoiceId}>{item.billNo}</Text>
          <Text style={styles.invoiceAmount}>{item.pendingAmount}</Text>
        </View>
        <View>
          <Text style={styles.invoiceName}>{item.retailerName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header>
        <Text style={styles.headerText}>Invoices</Text>
      </Header>

      {/* loading and error states*/}
      {state === 'loading' && (
        <Text style={styles.statesText}>Loading ...</Text>
      )}
      {state === 'error' && (
        <Text style={styles.statesText}>An error occured!</Text>
      )}
      {/* list */}
      {(state === 'success' || data) && (
        <FlatList data={data} renderItem={renderCard} style={styles.flatlist} />
      )}
    </View>
  );
}
