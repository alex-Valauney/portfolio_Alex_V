"use client"
import React from "react";

const carouselLogos = [
  "/logo/css.svg",
  "/logo/go.svg",
  "/logo/html5.svg",
  "/logo/javascript.svg",
  "/logo/nextjs.svg",
  "/logo/tailwindcss.svg",
];

const allTechnos = [
  { src: "/logo/css.svg", label: "CSS" },
  { src: "/logo/go.svg", label: "Go" },
  { src: "/logo/html5.svg", label: "HTML5" },
  { src: "/logo/javascript.svg", label: "JavaScript" },
  { src: "/logo/nextjs.svg", label: "Next.js" },
  { src: "/logo/tailwindcss.svg", label: "Tailwind CSS" },
  { src: "/logo/github.svg", label: "GitHub" },
  { src: "/logo/gitea.svg", label: "Gitea" },
];

export function TechUsedForm() {
  const numLogos = carouselLogos.length;
  const radius = 70; // rayon du cercle en px

  return (
    <div id="technos" className="scroll-mt-16 bg-gray-600 text-white p-6 flex flex-col items-center">
      <h2 className="mb-6 text-xl font-semibold">Technologies utilisées :</h2>

      {/* Carousel 3D */}
      <div
        className="relative w-[320px] h-[200px] perspective-1000 mb-10"
        style={{
          perspective: "1000px", // perspective pour effet 3D
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform-style-preserve-3d"
          style={{
            width: "200px",
            height: "200px",
            marginTop: "-100px",
            marginLeft: "-100px",
            animation: "spin3d 15s linear infinite",
            transformStyle: "preserve-3d",
          }}
        >
          {carouselLogos.map((logo, i) => {
            const angle = (360 / numLogos) * i;
            return (
              <img
                key={i}
                src={logo}
                alt={logo.split('/').pop()?.split('.')[0] || 'Technology Logo'}
                className="absolute w-20 h-20 object-contain"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-40px", // moitié largeur img pour centrer
                  marginTop: "-40px",  // moitié hauteur img
                  backfaceVisibility: "hidden"
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Liste complète en dessous */}
      <div className="flex flex-wrap justify-center gap-6 mt-4 max-w-2xl">
        {allTechnos.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={tech.src}
              alt={tech.label}
              className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-200"
            />
            <span className="text-sm font-medium">{tech.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes spin3d {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
