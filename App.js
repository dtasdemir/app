import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from "./src/navigations/MainNavigator";
import Products from "./src/screens/Products";
import ProductDetail from "./src/screens/ProductDetail";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer >
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="products" component={Products} />
            <Stack.Screen name="productsDetail" component={ProductDetail} />

        </Stack.Navigator>
        </NavigationContainer>
    )
}