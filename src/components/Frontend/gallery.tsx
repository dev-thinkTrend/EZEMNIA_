import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/img/confiture_cédrat.jpg", title: "Confiture Cédrat" },
  { src: "/img/confiture_coings.jpg", title: "Confiture Coings" },
  { src: "/img/confiture_citron.jpg", title: "Confiture Citron" },
  { src: "/img/eau_de_bigaradier.JPG", title: "Eau de Bigaradier" },
  { src: "/img/eau_de_rose.JPG", title: "Eau de Rose" },
  { src: "/img/eau_de_géranium.JPG", title: "Eau de Géranium" },
  { src: "/img/confiture_gernade.JPG", title: "Confiture Grenade" },
  { src: "/img/confiture_goyave.JPG", title: "Confiture Goyave" },
  { src: "/img/confiture_orange.JPG", title: "Confiture Orange" },
];

export default function Gallery() {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-screen-xl p-5">
      <h1 className="text-center text-green-600 font-bold text-5xl mb-6">Nos Produits</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg"
            onMouseLeave={() => setHoveredTitle(null)}
          >
            <Image
              className="h-auto w-full rounded-lg transition-transform duration-300 transform hover:scale-105"
              src={image.src}
              alt={image.title}
              height={450}
              width={450}
            />
            {hoveredTitle === image.title && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold">
                {image.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
