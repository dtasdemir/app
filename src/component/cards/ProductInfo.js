import React from 'react';
import {View, Text} from 'react-native';
import {Divider, AirbnbRating} from '@rneui/themed';

// Custom Css Style
import m from '../../style/MStyle';

export default function ProductInfo({Brand, Title, Rating, Info}) {
  return (
    <View style={[m.container]}>
      <View style={[m.bg(m.white), m.mb(16), m.p(12)]}>
        <Text
          numberOfLines={2}
          style={[m.fontSCW(16, m.darkGray, '600'), m.mb(4)]}>
          <Text style={[m.fontSCW(16, m.black, '600')]}>{Brand}</Text> {Title}
        </Text>
        <View style={[m.row]}>
          <AirbnbRating
            reviews={[1, 2, 3, 4, 5]}
            size={14}
            showRating={false}
            defaultRating={Rating}
          />
          <Text style={[m.fontSCW(14, m.darkGray, '500'), m.ml(4)]}>
            {Rating}
          </Text>
        </View>
      </View>

      <View style={[m.bg(m.white)]}>
        <Text style={[m.fontSCW(16, m.black, '600'), m.p(12)]}>Ürün Bilgisi</Text>
        <Divider />
        <Text style={[m.fontSCW(16, m.darkGray, '600'), m.p(12)]}>{Info}</Text>
      </View>
    </View>
  );
}
