import React from 'react';
import {View, ScrollView} from 'react-native';

// Custom Components
import ProductInfo from '../component/cards/ProductInfo';
import ImageCarousel from '../component/carousel/ImageCarousel';
import ProducDetailFooter from '../component/footer/ProducDetailFooter';

// Custom Css Style
import m from '../style/MStyle';

export default function ProductDetail({route}) {

  const DataP = route.params.DataP;

  return (
    <>
    <ScrollView style={[m.container]} showsVerticalScrollIndicator={false}>
      <ImageCarousel  IMGData={DataP.images} />
      <ProductInfo Brand={DataP.brand} Title={DataP.title} Rating={DataP.rating} Info={DataP.description} />
    </ScrollView>
    <ProducDetailFooter Price={DataP.price} />
    </>
  );
}
