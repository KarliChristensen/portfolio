"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 bg-transparent z-50 -mt-20">
      <div className="flex justify-between px-16 py-7">
        <div className="flex justify-between w-1/3">
          <Link href="/">HOME</Link>
          <Link href="/work">WORK</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <div>
          <p>DIGITAL PORTFOLIO</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
