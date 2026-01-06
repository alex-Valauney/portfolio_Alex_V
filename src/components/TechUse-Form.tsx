"use client"
import React from "react";

const logos = [
  "/logo/css.svg",
  "/logo/go.svg",
  "/logo/html5.svg",
  "/logo/javascript.svg",
  "/logo/nextjs.svg",
  "/logo/tailwindcss.svg",
  "/logo/github.svg",
  "/logo/gitea.svg",
];

export function TechUsedForm() {
  const numLogos = logos.length;
  const radius = 70; // rayon du cercle en px

  return (
    <div id="technos" className="scroll-mt-16 bg-gray-600 text-white p-6 flex flex-col items-center">
      <h2 className="mb-6 text-xl font-semibold">Technologies utilisées :</h2>

      <div
        className="relative w-[320px] h-[200px] perspective-1000"
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
          {logos.map((logo, i) => {
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

      <style>{`
        @keyframes spin3d {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}
