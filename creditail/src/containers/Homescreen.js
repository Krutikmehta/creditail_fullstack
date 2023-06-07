import {
  Text,
  View,
  Image,
  FlatList,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Styles/HomescreenStyles';
import Header from '../components/Header';
const backButton = require('../../src/assests/Images/Vector.png');

export default function Homescreen({navigation}) {
  const navigateToPayment = () => {
    navigation.navigate('Payment');
  };
  const renderCard = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.invoiceCard} onPress={navigateToPayment}>
        <View style={styles.invoiceIdVIew}>
          <Text style={styles.invoiceId}>MD</Text>
          <Text style={styles.invoiceAmount}>234</Text>
        </View>
        <View>
          <Text style={styles.invoiceName}>printer</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* header */}
      <Header>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 24,
            color: '#ECECEC',
            marginLeft: 24,
          }}>
          Invoices
        </Text>
      </Header>
      {/* list */}
      <FlatList
        data={[{}, {}, {}]}
        renderItem={renderCard}
        style={styles.flatlist}
      />
    </View>
  );
}
