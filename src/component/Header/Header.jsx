import React, { Suspense } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const list = <>
    
      <Link to={'/'}><li><a>Home</a></li></Link>    
      <Link to={'/apps'}><li><a>Apps</a></li></Link>
      <Link to={'/save'}><li><a>Installation</a></li></Link>
    
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {list}
          </ul>
        </div>
        {/* click-go-home */}
        <Link to={'/'}><a className="btn btn-ghost text-xl"> <img className='w-[35px]' src={logo} alt="" /> HERO.IO</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {list}
        </ul>
      </div>
      <div className="navbar-end">
        <a href='https://github.com/ALA22min22' className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"> <FaGithub /> Contribute</a>
      </div>
    </div>
  );
};

export default Header;