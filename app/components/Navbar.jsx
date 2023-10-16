"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky top-0" >
      <div className="flex justify-between px-16 py-8">
        <div className="flex justify-between w-1/3">
          <Link href="/about">ABOUT</Link>
          <Link href="/work">WORK</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <div>
          <p>DIGITAL PORTFOLIO</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
