import React from 'react';

const HeaderContent = () => {
  return(
    <>
      <div className="flex items-center justify-between mb-12">
        <button 
          className="flex flex-row items-center justify-between bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Back
        </button>

        <div className="relative mr-32 w-1/4">
          <input type="text" className="w-full text-blue-700 border border-blue-500 p-3" placeholder="Search by name..."/>
        </div>
      </div>
    </>
  )
};

export default HeaderContent;