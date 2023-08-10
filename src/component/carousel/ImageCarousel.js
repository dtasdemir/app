import {Icon} from '@rneui/themed';
import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Animated,
  useWindowDimensions,
} from 'react-native';

// Custom Css Style
import m from '../../style/MStyle';

export default function ImageCarousel({IMGData}) {
  const {width} = useWindowDimensions(); // Window width

  const [ImageIx, setImageIx] = useState(0); // Ix ; Index

  // Animated
  const scrollX = useRef(new Animated.Value(0)).current; // ScrollX

  const slidesRef = useRef(); // Slide Referans

  // Size Changed
  const contentSizeChanged = useRef(({contentSize}) => {
    setImageIx(contentSize);
  }).current;

  const [isFav, setIsFav] = useState(false);

  return (
    <View style={[m.h(500)]}>
      {/** Images */}

      <View style={[m.reltv]}>
        <FlatList
          data={IMGData}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          ref={slidesRef}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onContentSizeChange={contentSizeChanged}
          scrollEventThrottle={16}
          renderItem={({item}) => {
            return (
              <Image
                style={[m.resW(1), m.h(500)]}
                resizeMode="cover"
                source={{uri: item}}
              />
            );
          }}
        />
        <View style={[m.abslt, m.posT(24), m.posR(24)]}>
          <Icon
            onPress={() => setIsFav(!isFav)}
            name="heart"
            type="font-awesome"
            color={!isFav ? m.darkGray : m.red}
            size={30}
          />
        </View>
      </View>
      {/** Image Swipper Dots */}
      {IMGData.length >= 2 && (
        <View
          style={[
            m.resW(1),
            m.hcenter,
            m.bg(m.transparent),
            m.row,
            m.abslt,
            {top: 480},
          ]}>
          {IMGData.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.2, 1, 1],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                style={[
                  m.h(8),
                  m.rad(4),
                  m.bg(m.white),
                  m.mh(4),
                  m.w(dotWidth),
                  {opacity: opacity},
                ]}
                key={i.toString()}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}
