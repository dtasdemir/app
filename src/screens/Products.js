import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList} from 'react-native';

import {fetchCategory} from '../redux/store/categorySlice';
import {fetchData} from '../redux/store/productsSlice';

// Custom Component
import ProductCard from '../component/cards/ProductCard';
import LoadIndicator from '../component/loadIndicator/LoadIndicator';
import ListFooterLoadIndicator from '../component/loadIndicator/ListFooterLoadIndicator';
import ProductSearchAndFilterCard from '../component/cards/ProductsSearchAndFilterCard';
import FilterModals from '../component/modals/FilterModals';

// Custom Css Style
import m from '../style/MStyle';

export default function Products({navigation}) {
  const dispatch = useDispatch();

  const load = useSelector(state => state.products.isLoad);
  const error = useSelector(state => state.products.isErr);
  const DataP = useSelector(state => state.products.data); // Products Data

  const data = DataP.slice(0, 6);

  const [LoadedData, setLoadedData] = useState(data);

  const [Search, setSearch] = useState('');

  const CategoryData = useSelector(state => state.category.categories); //Category Data

  const [CategoriesModal, setCategoriesModal] = useState(false);

  const [Categories, setCategories] = useState('');

  const handleCategoryPress = (category) => {
    setCategories(category);
    //setCategoriesModal(false);
  }

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


  useEffect(() => {
    if(!load && DataP.length > 0) {
      const filteredDatas = DataP.filter(i => {
        const SearchData = String(i.title + i.info + i.brand)
          .toLowerCase()
          .includes(Search.toLowerCase());
        const CategoriesData = i.category === Categories;
  
        return SearchData && CategoriesData;
      });
  
      setLoadedData(filteredDatas.slice(0, 6));
    }
  }, [Search, Categories, DataP])

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
            onCategories={() => setCategoriesModal(true)}
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

      <FilterModals 
        modalVisible={CategoriesModal}
        handleClose={() => setCategoriesModal(false)}
        HeadTitle="Kategoriler"
        FilterData={CategoryData}
        onPress={handleCategoryPress}
        isSelected={Categories}
      />
    </View>
  );
}
