import React from 'react';

import Nav from './AsideNav/';

import './Aside-style.css'

const Aside = () => {
  return(
    <>
      <aside className="aside flex flex-col bg-white shadow-2xl">
        <div className="aside-wrapper flex flex-col items-start justify-center">
          <h1 className="text-2xl text-blue-700 border-2 rounded-lg my-6 ml-4 px-4">Webbin</h1>

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