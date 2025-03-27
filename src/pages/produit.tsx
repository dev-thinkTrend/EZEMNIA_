import React from 'react';
import Navbar from '@/components/Frontend/navbar'; // Importation du Navbar
import Footer from '@/components/Frontend/footer';

const products = [
  { id: 1, image: "/img/coffret_eau_1.jpg" },
  { id: 2, image: "/img/coffret_eau_2.jpg" },
  { id: 3, image: "/img/coffret_eau_3.jpg" },
  { id: 4, image: "/img/confiture_goyave.jpg" },
  { id: 5, image: "/img/confiture_mandarine.jpg" },
  { id: 6, image: "/img/confiture_mandarine.jpg" },
  { id: 7, image: "/img/eau_de_rose.jpg" },
  { id: 8, image: "/img/eau_de_géranium.jpg" },
  { id: 9, image: "/img/eau_de_bigaradier.jpg" },
  { id: 9, image: "/img/eau_de_bigaradier.jpg" },
  { id: 8, image: "/img/eau_de_géranium.jpg" },
  { id: 7, image: "/img/eau_de_rose.jpg" },
];

const Produit: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

  
      <div className="mr-7">
        <h1 className="text-center font-semibold text-green-500 lg:text-5xl">
          Nos produits
        </h1>
      </div>

      <br />

      {/* Product Cards Grid */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={product.image}
              alt={`Produit ${product.id}`}
            />
          </div>
        ))}
      </div>

      <br />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Produit;