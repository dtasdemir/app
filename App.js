import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './src/screens/Products';
import ProductDetail from './src/screens/ProductDetail';

import m from './src/style/MStyle';
import {Provider} from 'react-redux';

import store from './src/redux/index';
const Stack = createNativeStackNavigator();

export default function App() {
    
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='products'
          screenOptions={{
            headerShown: false,
            statusBarColor: m.white,
            statusBarStyle: "dark"
            
          }}>
          <Stack.Screen name="products" component={Products} />
          <Stack.Screen name="productsDetail" component={ProductDetail} initialParams={{ DataP: [] }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
