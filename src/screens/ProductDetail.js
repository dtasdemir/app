import React from 'react';
import {View, Text} from 'react-native';

// Custom Css Style
import m from '../style/MStyle';

export default function ProductDetail() {
  return (
    <View style={[m.hcenter, m.vcenter, m.container]}>
      <Text>Ürün Detay</Text>
    </View>
  );
}