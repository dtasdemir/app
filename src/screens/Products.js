import { Button } from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

// Custom Css Style
import m from '../style/MStyle';

export default function Products({ navigation }) {
  return (
    <View style={[m.hcenter, m.vcenter, m.container]}>
      <Text>Products</Text>
      <Button onPress={() => navigation.navigate("productsDetail")}>Detay Sayfası</Button>
    </View>
  );
}
