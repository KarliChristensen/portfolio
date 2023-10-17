"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="absolute top-0 bg-transparent w-full z-50">
      <div className="flex justify-evenly md:justify-between px-10 py-7">
        <div className="flex justify-evenly w-screen md:w-auto">
          <a className="hover:text-purple-600 nav-text" href="#about">ABOUT</a>
          <a className="hover:text-purple-600 nav-text" href="#work">WORK</a>
          <a className="hover:text-purple-600 nav-text" href="#contact">CONTACT</a>
        </div>
        <div className="hidden md:block">
          <p className="nav-text">DIGITAL PORTFOLIO</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
