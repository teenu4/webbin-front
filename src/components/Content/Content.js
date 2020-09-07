import React from 'react';

import HeaderContent from './HeaderContent/';
import ProductInfo from './ProductInfo/';
import ContentCard from './ContentCard/';




import './Content-style.css'

const Content = () => {
  return(
    <div className="content ml-auto mt-12 px-6">
      <HeaderContent/>
      <ProductInfo/>
      <div className="flex items-start justify-between flex-wrap">
        <ContentCard/>
      </div>
    </div>
  )
};

export default Content