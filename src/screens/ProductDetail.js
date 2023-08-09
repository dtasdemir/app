import React from 'react';
import {View, Text} from 'react-native';

// Custom Css Style
import m from '../style/MStyle';

export default function ProductDetail({route}) {

  const DataP = route.params.DataP;


  return (
    <View style={[m.hcenter, m.vcenter, m.container]}>
      <Text>Ürün Detay</Text>
      <Text>{DataP.brand}</Text>
    </View>
  );
}
