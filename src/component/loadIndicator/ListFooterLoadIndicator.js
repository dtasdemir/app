import React from 'react';
import {View, ActivityIndicator} from 'react-native';

// Custom Css Style
import m from '../../style/MStyle';

export default function ListFooterLoadIndicator() {
  return (
    <View style={[m.mv(12), m.hcenter]}>
      <ActivityIndicator size="large" color={m.black} />
    </View>
  );
}