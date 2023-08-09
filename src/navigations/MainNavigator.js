import React from "react";
// React Native Navigation Component
import { createStackNavigator } from '@react-navigation/stack';

// Custom Css Style
import m from '../style/MStyle';

// Screens
import Products from "../screens/Products";
import ProductDetail from "../screens/ProductDetail";

const Stack = createStackNavigator(); // Stack Navigator

export default function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="products" component={Products} />
            <Stack.Screen name="productDetail" component={ProductDetail} />

        </Stack.Navigator>
    )
}