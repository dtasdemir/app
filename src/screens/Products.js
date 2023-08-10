import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList} from 'react-native';
import {Button, SearchBar} from '@rneui/themed';

import {fetchCategory} from '../redux/store/categorySlice';
import {fetchData} from '../redux/store/productsSlice';

// Custom Component
import ProductCard from '../component/cards/ProductCard';
import LoadIndicator from '../component/loadIndicator/LoadIndicator';
import ListFooterLoadIndicator from '../component/loadIndicator/ListFooterLoadIndicator';

// Custom Css Style
import m from '../style/MStyle';
import FilterButton from '../component/buttons/FilterButtons';
import ProductSearchAndFilterCard from '../component/cards/ProductsSearchAndFilterCard';

export default function Products({navigation}) {
  const dispatch = useDispatch();

  const load = useSelector(state => state.products.isLoad);
  const error = useSelector(state => state.products.isErr);
  const DataP = useSelector(state => state.products.data); // Products Data

  const data = DataP.slice(0, 6);

  const [LoadedData, setLoadedData] = useState(data);

  const [Search, setSearch] = useState('');

  const CategoryData = useSelector(state => state.category.categories); //Category Data

  const uploadData = () => {
    const startIndex = LoadedData.length;
    const endIndex = startIndex + 2;
    const newData = DataP.slice(startIndex, endIndex);
    setLoadedData(prev => [...prev, ...newData]);
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
        ListHeaderComponent={
          <ProductSearchAndFilterCard
            SearchValue={Search}
            onChangeText={s => setSearch(s)}
            onRating={() => console.log('Rating')}
            onCategories={() => console.log('Categories')}
            onPricing={() => console.log('Pricing')}
          />
        }
        showsVerticalScrollIndicator={false}
        data={LoadedData}
        ListFooterComponent={
          LoadedData.length >= DataP.length ? null : <ListFooterLoadIndicator />
        }
        keyExtractor={(item, index) => item + index}
        numColumns={'2'}
        onEndReached={uploadData}
        onEndReachedThreshold={0.1}
        style={[]}
        renderItem={({item}) => (
          <View style={[m.pl(4)]}>
            <ProductCard
              onPress={() =>
                navigation.navigate('productsDetail', {DataP: item})
              }
              ImgSrc={{uri: item.images[0]}}
              Brand={item.brand}
              Info={item.title}
              Rating={item.rating}
              Price={item.price}
            />
          </View>
        )}
      />
    </View>
  );
}
