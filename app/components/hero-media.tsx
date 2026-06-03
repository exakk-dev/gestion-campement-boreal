"use client";

import Image from "next/image";
import { useState } from "react";
import { photos } from "../lib/photos";

export function HeroMedia() {
  const [videoOk, setVideoOk] = useState(true);

  return (
    <>
      <div className="hero-ken-burns absolute inset-0">
        <Image
          src={photos.accueil.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {videoOk && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-0"
          onError={() => setVideoOk(false)}
          onLoadedData={(e) => {
            const v = e.currentTarget;
            if (v.videoWidth > 0) {
              setVideoOk(true);
              v.classList.remove("opacity-0");
              v.classList.add("opacity-100");
            }
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}
      <div
        className="absolute inset-0 bg-linear-to-t from-boreal-ink via-boreal-ink/60 to-boreal-ink/25"
        aria-hidden
      />
    </>
  );
}
