import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  const images = [
    { src: "/img/confiture_cédrat.jpg", title: "Confiture Cédrat", alt: "Confiture Cédrat" },
    { src: "/img/confiture_coings.jpg", title: "Confiture Coings", alt: "Confiture Coings" },
    { src: "/img/confiture_citron.jpg", title: "Confiture Citron", alt: "Confiture Citron" },
    { src: "/img/eau_de_bigaradier.JPG", title: "Eau de Bigaradier", alt: "Eau de Bigaradier" },
    { src: "/img/eau_de_rose.JPG", title: "Eau de Rose", alt: "Eau de Rose" },
    { src: "/img/eau_de_géranium.JPG", title: "Eau de Géranium", alt: "Eau de Géranium" },
    { src: "/img/confiture_gernade.JPG", title: "Confiture Grenade", alt: "Confiture Grenade" },
    { src: "/img/confiture_goyave.JPG", title: "Confiture Goyave", alt: "Confiture Goyave" },
    { src: "/img/confiture_orange.JPG", title: "Confiture Orange", alt: "Confiture Orange" },
  ];

  return (
    <section className="mx-auto max-w-screen-xl p-5">
      <h1 className="text-center text-green-600 font-bold text-5xl mb-6">Nos Produits</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredTitle(image.title)}
            onMouseLeave={() => setHoveredTitle(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            {hoveredTitle === image.title && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl">
                {image.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
