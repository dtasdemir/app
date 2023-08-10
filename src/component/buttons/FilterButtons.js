import React from 'react';
import {Button} from '@rneui/themed';

// Custom Css Style
import m from '../../style/MStyle';

export default function FilterButton({BtnTitle, BtnPress}) {
  return (
    <Button
      title={BtnTitle}
      onPress={BtnPress}
      type="default"
      titleStyle={[m.fontSCW(12, m.darkGray, '500')]}
      containerStyle={[m.b(0.8), m.bC(m.darkGray), m.rad(24), m.mr(8), m.pl(8)]}
      iconRight
      icon={{
        name: 'chevron-small-down',
        type: 'entypo',
        size: 20,
        color: m.darkGray,
      }}
    />
  );
}
