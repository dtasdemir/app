import {AirbnbRating, Icon, Image} from '@rneui/themed';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Custom Css Style
import m from '../../style/MStyle';
import LoadIndicator from '../loadIndicator/LoadIndicator';

export default function ProductCard({
  onPress,
  ImgSrc,
  Brand,
  Info,
  Price,
  Rating
}) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[m.container, m.mh(12), m.mb(12), m.rad(10), m.bg(m.white)]}>
      
      <Image
        source={ImgSrc}
        resizeMode="cover"
        containerStyle={[{aspectRatio: 3 / 4,}, m.radtl(10), m.radtr(10)]}
        PlaceholderContent={ <LoadIndicator />}
      />
      
      <View style={[m.p(12)]}>
        <Text numberOfLines={2} style={[m.fontSCW(14, m.darkGray, '600'), m.h(36)]}><Text style={[m.fontSCW(14, m.black, '600')]}>{Brand}</Text> {Info}</Text>
        <View style={[m.row]}> 
          <AirbnbRating reviews={[1, 2, 3, 4, 5]} size={12} showRating={false} defaultRating={Rating} />
          <Text style={[m.fontSCW(14, m.darkGray, '500'), m.ml(4)]}>{Rating}</Text>
          </View>
        <Text style={[m.fontSCW(16, m.black, '700')]}>{Price} TL</Text>
      </View>
    </TouchableOpacity>
  );
}