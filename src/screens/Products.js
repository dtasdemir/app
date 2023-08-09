import {Button, SearchBar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductCard from '../component/cards/ProductCard';

// Custom Component
import LoadIndicator from '../component/loadIndicator/LoadIndicator';
import {fetchCategory} from '../redux/store/categorySlice';
import {fetchData} from '../redux/store/productsSlice';

// Custom Css Style
import m from '../style/MStyle';

export default function Products({navigation}) {
  const dispatch = useDispatch();

  const load = useSelector(state => state.products.isLoad);
  const error = useSelector(state => state.products.isErr);
  const DataP = useSelector(state => state.products.data); // Products Data

  const data = DataP.slice(0, 6);

  const [LoadedData, setLoadedData] = useState(data);

  const CategoryData = useSelector(state => state.category.categories); //Category Data

  const uploadData = () => {
    const startIndex = LoadedData.length;
    const endIndex = startIndex + 2;
    const newData = DataP.slice(startIndex, endIndex);
    setLoadedData(prev => [...prev, ...newData]);
  };

  const HeaderItem = () => {
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
        />

        <View style={[m.row,  m.mt(8)]}>
          <Button
            title="Değerlendirme"
            type="default"
            titleStyle={[m.fontSCW(12, m.darkGray, '500')]}
            containerStyle={[m.b(0.8), m.bC(m.darkGray), m.rad(24)]}
          />
          <Button
            title="Fiyat"
            type="default"
            titleStyle={[m.fontSCW(12, m.darkGray, '500')]}
            containerStyle={[m.b(0.8), m.bC(m.darkGray), m.rad(24), m.mh(8)]}
          />
          <Button
            title="Kategori"
            type="default"
            titleStyle={[m.fontSCW(12, m.darkGray, '500')]}
            containerStyle={[m.b(0.8), m.bC(m.darkGray), m.rad(24)]}
          />
        </View>
      </View>
    );
  };

  const LoaderItem = () => {
    return LoadedData.length >= DataP.length ? null : (
      <View style={[m.mv(12), m.hcenter]}>
        <ActivityIndicator size="large" color={m.black} />
      </View>
    );
  };

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCategory());
  }, [dispatch]);

  return load ? (
    <LoadIndicator />
  ) : error !== null ? (
    <View style={[m.container, m.hcenter, m.vcenter]}>
      <Text style={[m.fontSCW(20, m.black, '600')]}>{error}</Text>
    </View>
  ) : (
    <View style={[m.container]}>
      <FlatList
        ListHeaderComponent={HeaderItem}
        showsVerticalScrollIndicator={false}
        data={LoadedData}
        ListFooterComponent={LoaderItem}
        keyExtractor={(item, index) => item + index}
        numColumns={'2'}
        onEndReached={uploadData}
        onEndReachedThreshold={0.1}
        style={[]}
        renderItem={({item}) => (
          <ProductCard
            onPress={() => navigation.navigate('productsDetail', {DataP: item})}
            ImgSrc={{uri: item.images[0]}}
            Brand={item.brand}
            Info={item.title}
            Rating={item.rating}
            Price={item.price}
          />
        )}
      />
    </View>
  );
}
