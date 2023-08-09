import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './src/screens/Products';
import ProductDetail from './src/screens/ProductDetail';

import m from './src/style/MStyle';
import {Provider, useDispatch} from 'react-redux';

import store from './src/redux/index';

const Stack = createNativeStackNavigator();

export default function App() {
    
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarColor: m.primaryColor,
          }}>
          <Stack.Screen name="products" component={Products} />
          <Stack.Screen name="productsDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
