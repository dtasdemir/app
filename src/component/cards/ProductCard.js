import {AirbnbRating, Icon, Image} from '@rneui/themed';
import React, {useState} from 'react';
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
  Rating,
}) {
  const [isFav, setIsFav] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[m.container, m.rad(10), m.bg(m.white), m.cardW, m.ml(6), m.mb(12), m.maxw(180),]}>
      <View style={[m.reltv]}>
        <Image
          source={ImgSrc}
          resizeMode="cover"
          containerStyle={[{aspectRatio: 3 / 4}, m.radtl(10), m.radtr(10)]}
          PlaceholderContent={<LoadIndicator />}
        />
        <View style={[m.abslt, m.posT(12), m.posR(12)]}>
          <Icon
            backgroundColor={m.transparent}
            onPress={() => setIsFav(!isFav)}
            name="heart"
            type="font-awesome"
            color={!isFav ? m.darkGray : m.red}
            size={24}
          />
        </View>
      </View>

      <View style={[m.p(12)]}>
        <Text
          numberOfLines={2}
          style={[m.fontSCW(14, m.darkGray, '600')]}>
          <Text style={[m.fontSCW(14, m.black, '600')]}>{Brand}</Text> {Info}
        </Text>
        <View style={[m.row]}>
          <AirbnbRating
            reviews={[1, 2, 3, 4, 5]}
            size={12}
            showRating={false}
            defaultRating={Rating}
          />
          <Text style={[m.fontSCW(14, m.darkGray, '500'), m.ml(4)]}>
            {Rating}
          </Text>
        </View>
        <Text style={[m.fontSCW(16, m.black, '700')]}>{Price} TL</Text>
      </View>
    </TouchableOpacity>
  );
}
