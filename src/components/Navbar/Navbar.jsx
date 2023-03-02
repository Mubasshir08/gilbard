import React from 'react';
import { useState } from "react";

// importing css
import './Navbar.css';

// importing logo
import Logo from '../../assets/images/logo.png'

function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-8 pl-3 bg-[#081B1F]">
            <a href="/">
                <img src={Logo} alt="logo" className='lg:ml-1'/>
            </a>
            <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-5"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>

          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Games</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Videos</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Forums</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Pages</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
             <li className="bg-[#081B1F] text-white rounded-md py-2 px-7 my-8 uppercase">
                <a href="/contact">Login</a>
             </li>
             <li className="bg-[#081B1F] text-white rounded-md py-3 px-10 my-4 uppercase">
                <a href="/contact">Register</a>
             </li>
            
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 mr-20 lg:flex text-white">
          <li>
            <a href="/about">Home</a>
          </li>
          <li>
            <a href="/portfolio">Games</a>
          </li>
          <li>
            <a href="/contact">Videos</a>
          </li>
          <li>
            <a href="/contact">Forums</a>
          </li>
          <li>
            <a href="/contact">Pages</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li className='pl-52 text-[#9F9F9F]'>
            <a href="/login">Login</a>
          </li>
          <li className='pl-3 text-[#9F9F9F]'>
            <a href="/register">Register</a>
           </li>
        </ul>
      </nav>
        </div>
    );
}

export default Navbar;