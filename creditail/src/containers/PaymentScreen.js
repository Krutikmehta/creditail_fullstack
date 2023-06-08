import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import axios from 'axios';
import styles from './Styles/PaymentScreenStyles';

const PAYMENT_MODES = [{mode: 'Online'}, {mode: 'Cash'}, {mode: 'Cheque'}];

export default function PaymentScreen(props) {
  const {navigation, route} = props;

  const [data, setDate] = useState(route.params.data);
  const [amount, setAmount] = useState(route.params.data.pendingAmount);
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

  const onChangeText = input => {
    if (input <= data.pendingAmount) {
      setAmount(input);
      return;
    }
    Alert.alert(
      'Invalid amount',
      `Please enter an amount less than ${data.pendingAmount}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <Header navigation={navigation}>
        <Text style={styles.headerText}>{data.billNo}</Text>
        <Text style={styles.headerText}>{data.retailerName}</Text>
      </Header>
      {/* Amount Input Container */}
      <View style={styles.amountContainer}>
        <View style={styles.inputContainerWrapper}>
          <Text style={styles.amountText}>Amount</Text>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType="numeric"
              value={amount.toString()}
              onChangeText={onChangeText}
              defaultValue={route.params.data.pendingAmount.toString()}
            />
          </View>
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
        disabled={selected < 0}
        onPress={() => {
          navigation.navigate('Cash', {
            data,
            paymentMethod: PAYMENT_MODES[selected].mode,
            amountPaid: amount,
          });
        }}
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
