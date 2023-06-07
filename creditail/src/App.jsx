/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Homescreen from './containers/Homescreen';
import PaymentScreen from './containers/PaymentScreen';


const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderHeader = () =>{
    return(
      <View>
        <Text>Header</Text>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Home"
          component={Homescreen}
        />
         <Stack.Screen
          name="Payment"
          component={PaymentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
