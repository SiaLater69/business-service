import React from 'react';

export default function Clients() {
  const topRowClients = [
    { src: "/bagatelle.png", alt: "bagatelle logo", className: "h-20 w-auto object-contain" },
    { src: "/sumosan.png", alt: "sumosan logo", className: "h-24 w-auto object-contain" },
    { src: "/cipriani.png", alt: "cipriani logo", className: "h-32 w-auto object-contain" },
    { src: "/MNKY.png", alt: "MNKY logo", className: "h-10 w-auto object-contain" }
  ];

  const bottomRowClients = [
    { src: "/Abdul.png", alt: "Abdul Latif Jameel logo", className: "h-12 w-auto object-contain" },
    { src: "/Asador.png", alt: "Asador De Aranda logo", className: "h-24 w-auto object-contain" },
    { src: "/santini.png", alt: "santini logo", className: "h-12 w-auto object-contain" }
  ];

  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-2xl md:text-3xl text-blue-600 text-center mb-8 font-semibold">
        Our Clients & Projects
      </h2>
      
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            {topRowClients.map((client, index) => (
              <div key={index} className="w-full flex justify-center items-center p-4 hover:scale-105 transition-transform duration-300">
                <img
                  src={client.src}
                  alt={client.alt}
                  className={client.className}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {bottomRowClients.map((client, index) => (
              <div key={index} className="w-full flex justify-center items-center p-4 hover:scale-105 transition-transform duration-300">
                <img
                  src={client.src}
                  alt={client.alt}
                  className={client.className}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}