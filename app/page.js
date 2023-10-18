"use client";

import React from "react";

function page() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="h-screen snap-start bg-red-400">
        <div className="pt-40">
          <h1 className="ml-[8vw] md:ml-[16vw] text-scaling-large">
            Textual design philosophy
          </h1>
          <p className="mt-6 ml-[8vw] md:ml-[32vw] mr-[8vw] text-scaling-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quibusdam, voluptatibus maiores nemo eveniet, nulla provident
            obcaecati esse reprehenderit enim sunt facilis non consectetur
            veniam inventore quaerat ducimus nostrum autem!
          </p>
        </div>
      </section>
      <section className="h-screen snap-start  bg-blue-500">
        <h1 className="text-center pt-40 text-scaling-large">about</h1>
        <div className="mt-10 px-10 md:flex">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              at consequuntur ut aperiam libero, numquam fugit quis quod debitis
              dolorem, tempora harum expedita nesciunt nostrum alias earum
              maiores labore iste!
            </p>
          </div>
          <div>
            <p className="mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              cupiditate quas tenetur aperiam! Deleniti, quod. Quae cumque
              dolore porro. Veritatis itaque voluptatem voluptates ut fugit
              earum ex hic nesciunt similique.
            </p>
          </div>
          <div>
            <h2 className="mt-5">FULL STACK DEVELOPMENT</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto dicta incidunt tempora, nihil dolor, excepturi autem
              quia quasi in obcaecati, mollitia repellat natus! Unde maiores
              aperiam soluta et id odio!
            </p>
          </div>
          <div>
            <h2 className="mt-5">DESIGN</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto dicta incidunt tempora, nihil dolor, excepturi autem
              quia quasi in obcaecati, mollitia repellat natus! Unde maiores
              aperiam soluta et id odio!
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen snap-start  bg-green-500">
        <h1> Page 3</h1>
      </section>
    </div>
  );
}

export default page;
