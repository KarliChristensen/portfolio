"use client";

import React from "react";

function page() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start  bg-red-400">
        <h1>Page 1</h1>
      </section>
      <section className="h-screen snap-start  bg-blue-500">
        <h1> Page 2</h1>
      </section>
      <section className="h-screen snap-start  bg-green-500">
        <h1> Page 3</h1>
      </section>
    </div>
  );
}

export default page;
