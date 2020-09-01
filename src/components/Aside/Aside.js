import React from 'react';

import Nav from './Aside-nav/';

import './Aside-style.css'

const Aside = () => {
  return(
    <>
      <aside className="aside flex flex-col bg-gray-300">
        <div className="aside-wrapper flex flex-col items-start justify-center">
          <h1 className="text-2xl bg-gray-600 my-6 ml-4 px-4">Logo here</h1>
          <Nav/>
          <footer className="mt-auto w-full">
            <div className="flex flex-col w-full">
              <a href="./" className="hover:text-blue-800 px-4 py-2">Contact Us</a>
              <a href="./" className="hover:text-blue-800 px-4 py-2">About Us</a>
            </div>
          </footer>
        </div>
      </aside>
    </>
  )
};

export default Aside;