"use client";

import React from "react";

export const PhotographicBreak: React.FC = () => {
  return (
    <section className="relative w-full py-28 lg:py-36 overflow-hidden bg-[#111827] text-white border-y border-[#d1cfca]">
      {/* Background Real Rocket Launch Imagery with Parallax & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=2000&q=85"
          alt="ISRO rocket ascending into clear daylight sky from Sriharikota spaceport"
          className="w-full h-full object-cover object-center opacity-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6">
          {/* Micro Index & Tag */}
          <div className="flex items-center gap-3 text-xs font-mono text-[#e65c00] font-bold uppercase tracking-widest">
            <span className="px-2 py-0.5 rounded bg-[#e65c00] text-white text-[10px]">
              01 / 05
            </span>
            <span className="text-slate-300">PROPULSION &amp; LAUNCH ARCHITECTURE</span>
          </div>

          {/* Giant Typographic Statement */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.92]">
            BUILT<br />
            <span className="text-[#e65c00]">TO REACH</span><br />
            BEYOND.
          </h2>

          <p className="text-sm sm:text-base text-slate-200 font-sans max-w-lg leading-relaxed">
            Every sovereign satellite launched, planetary transfer executed, and interplanetary orbit captured begins from the coastal launch pads of Sriharikota.
          </p>

          {/* Technical Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300 border-t border-white/20">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Spaceport</span>
              <span className="font-bold text-white">SDSC SHAR, Sriharikota</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Active Launch Pads</span>
              <span className="font-bold text-white">First &amp; Second Launch Pads (FLP / SLP)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Primary Propellants</span>
              <span className="font-bold text-[#e65c00]">Solid HTPB • Liquid UH25 • Cryo LH2/LOX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
