import React from "react";

export default function Banner() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4">
        <div className="max-w-xl text-center sm:text-left lg:pl-12">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Bienvenue &agrave;
            <strong className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-500">
              Ezemnia
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            <strong>Ezemnia </strong>, c&apos;est l&apos;h&eacute;ritage d&apos;un <strong>savoir-faire ancestral</strong> qui sublime la nature.
            <strong>Nos produits de terroir</strong> sont soigneusement fabriqu&eacute;s au c&oelig;ur du <strong>Cap-Bon, Nabeul, Tunisie.</strong>
            Offrez-vous l&apos;authenticit&eacute; et la richesse d&apos;une tradition pr&eacute;serv&eacute;e.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-16 lg:flex-1 lg:pl-8">
          <video
            autoPlay
            muted
            controls
            className="w-[760px] h-[600px]"  
            title="Ezemnia Video"
          >
            <source src="/img/ezemnia_event.mp4" type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture de vid&eacute;os.
          </video>

        </div>
      </div>
    </section>
  );
}
