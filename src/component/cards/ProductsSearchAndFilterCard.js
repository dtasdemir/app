import React from 'react';
import {View} from 'react-native';
import {SearchBar} from '@rneui/themed';

// Custom Component
import FilterButton from '../buttons/FilterButtons';

// Custom Css Style
import m from '../../style/MStyle';

export default function ProductSearchAndFilterCard({SearchValue, onChangeText , onRating , onPricing, onCategories}) {
  return (
    <View style={[m.pv(12), m.ph(12), m.bg(m.white), m.mb(12)]}>
      <SearchBar
        placeholder="Dilediğini ara..."
        platform="android"
        containerStyle={[
          m.bg(m.grayTransparent),
          m.rad(24),
          m.h(40),
          m.hcenter,
        ]}
        cursorColor={m.darkGray}
        value={SearchValue}
        onChangeText={onChangeText}
      />
      <View style={[m.row, m.mt(8)]}>
        <FilterButton BtnTitle="Değerlendirme" BtnPress={onRating} />
        <FilterButton BtnTitle="Fiyat" BtnPress={onPricing} />
        <FilterButton BtnTitle="Kategori" BtnPress={onCategories} />
      </View>
    </View>
  );
}
