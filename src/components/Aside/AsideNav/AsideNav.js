import React from 'react';

const Nav = () => {
 return(
   <>
      <nav className="w-full flex flex-col justify-center">
        <a href="./" className="hover:text-blue-800 nav-link nav-link_active px-4 py-2">Websites</a>
        <a href="./" className="hover:text-blue-800 nav-link px-4 py-2">Profile</a>
        <a href="./" className="hover:text-blue-800 nav-link px-4 py-2">My Library</a>
        <a href="./" className="hover:text-blue-800 nav-link px-4 py-2">Become a PRO</a>
      </nav>
   </>
 )
};

export default Nav;