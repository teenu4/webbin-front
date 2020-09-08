import React from 'react';

const ProductInfo = () => {
  return(
    <>
      <div className="flex flex-row justify-start rounded overflow-hidden shadow-lg max-w-md mb-12 bg-white">
        {/* <img className="max-w-xs" src="" alt="Картинка"/> */}
        <div className="max-w-xs bg-black text-white p-2">Картинка</div>
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2">Apple Inc.</div>
          <p className="text-gray-700 text-base">
          Короткий опис суті сайта/продукта
          </p>
        </div>
      </div>
    </>
  )
};

export default ProductInfo;