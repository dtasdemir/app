// Loading Screeen Component

import React from 'react';
// React Native Packages Components
import {View, ActivityIndicator} from 'react-native';

// Custom Css Style
import m from '../../style/MStyle';

export default function LoadIndicator() {
  return (
    <View style={[m.container, m.vcenter, m.hcenter, m.resH(1), m.resW(1)]}>
      <ActivityIndicator size="large" color={m.black} />
    </View>
  );
}