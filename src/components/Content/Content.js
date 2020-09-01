import React from 'react';

import HeaderContent from './Header-content/';
import ProductInfo from './Product-Info/';
import ContentCard from './Content-card/';

import './Content-style.css'

const Content = () => {
  return(
    <div className="content ml-auto mt-12 px-6">
      <HeaderContent/>
      <ProductInfo/>
      <div className="flex items-start justify-between flex-wrap">
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
        <ContentCard/>
      </div>
    </div>
  )
};

export default Content