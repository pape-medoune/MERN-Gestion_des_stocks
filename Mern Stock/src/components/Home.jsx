import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-black">
      {/* <Home /> */}
      <div className="max-w-[800px] mt-[-100px] mb-[-100px] w-full m-auto h-screen text-center flex flex-col justify-center">
        <p className="md:text-2xl font-bold p-2">
          Bienvenue chez{" "}
          <span className="md:text-5xl text-blue-600">SamaStock</span>,
        </p>
        <h1 className="md:text-3xl sm:text-6xl text-4xl font-bold md:py-6">
          votre gestionnaire de stock en ligne avec une efficacité votre <span className="text-blue-500 font-bold">stock</span>.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-4xl text-xl font-bold text-gray-600 py-4">
            Les produits disponibles en stock :
            <TypeAnimation
              sequence={[
                " Téléphones",
                1000,
                " Ordinateurs",
                1000,
                " Télévisions",
                1000,
              ]}
              speed={10}
              style={{ color: "blue" }}
              repeat={Infinity}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          <q>
            Chez nous, le suivi des produits d'un boutique n'a jamais était
            aussi facile
          </q>
        </p>
        <button className="bg-indigo-600 active:bg-blue-600 active:shadow-none text-white w-[120px] rounded-lg font-medium my-6 mx-auto py-4 hover:bg-indigo-500 shadow">
          <Link to="/">Accéder</Link>
          {/* En cliquant sur ce boutton, l'utilisateur pourra acceder directement au tableau de bord */}
        </button>
      </div>
    </div>
  );
}

export default Home;
