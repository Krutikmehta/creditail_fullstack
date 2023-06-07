import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import styles from './Styles/PaymentScreenStyles';

const PAYMENT_MODES = [{mode: 'Online'}, {mode: 'Cash'}, {mode: 'Cheque'}];

export default function PaymentScreen() {
  const paymentCard = ({item, index}) => {
    return (
      <View style={styles.modeCard}>
        <Text style={styles.modeText}>{item.mode}</Text>
      </View>
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
            {PAYMENT_MODES.map(item => {
              return paymentCard({item});
            })}
          </View>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
