import React from 'react';
import {View, Text} from 'react-native';
import { Button } from '@rneui/themed';

// Custom Css Style
import m from '../../style/MStyle';

export default function ProducDetailFooter({Price}) {
  return (
    <View style={[m.row, m.hbetween, m.p(12), m.bg(m.white), m.btW(0.6), m.bC(m.grayTransparent)]}>
      <View style={[]}>
        <Text style={[m.fontSCW(14, m.black, '600')]}>Ürün Fiyatı</Text>
        <Text style={[m.fontSCW(16, m.red, '600')]}>{Price} TL</Text>
      </View>
      <Button buttonStyle={[m.ph(48), m.rad(24)]} color={m.black} >Sepete Ekle</Button>
    </View>
  );
}
