import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import styles from './Styles/PaymentScreenStyles';

const PAYMENT_MODES = [{mode: 'Online'}, {mode: 'Cash'}, {mode: 'Cheque'}];

export default function PaymentScreen({navigation}) {
  const [selected, setSelected] = useState(-1);

  const paymentCard = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.modeCard, index === selected && styles.selectedModeCard]}
        key={index}
        onPress={() => setSelected(index)}>
        <Text style={styles.modeText}>{item.mode}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* header */}
      <Header navigation={navigation}>
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
      {/* Amount Input Container */}
      <View style={styles.amountContainer}>
        <View style={styles.inputContainerWrapper}>
          <Text style={styles.amountText}>Amount</Text>
          <View style={styles.inputContainer}></View>
        </View>
      </View>

      {/* Payment Mode */}
      <View style={styles.paymentsViewWrapper}>
        <View style={styles.paymentsView}>
          <Text style={styles.paymentMethodText}>Choose Payment Method</Text>
          <View style={styles.paymentModesView}>
            {PAYMENT_MODES.map((item, index) => {
              return paymentCard({item, index});
            })}
          </View>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Cash')}
        style={[
          styles.confirmButton,
          selected >= 0 && styles.selectedConfirmButton,
        ]}>
        <Text
          style={[
            styles.confirmText,
            selected >= 0 && styles.selectedConfirmText,
          ]}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}
