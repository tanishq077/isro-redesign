"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const GaganyaanSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("/images/gaganyaan.jpg");

  const specs = [
    { label: "CREW COMPLEMENT", val: "3 Indian Astronauts" },
    { label: "ORBITAL ALTITUDE", val: "400 km Low Earth Orbit" },
    { label: "MISSION DURATION", val: "3 Days in Orbit" },
    { label: "SPLASHDOWN ZONE", val: "Arabian Sea Recovery" },
  ];

  return (
    <section id="gaganyaan" className="py-24 bg-[#151512] text-[#f3e9d5] border-b border-[#2e2d27] relative overflow-hidden">
      {/* Background Subtle Technical Arcs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 700" fill="none">
          <circle cx="1100" cy="350" r="320" stroke="#2e2d27" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
          <circle cx="1100" cy="350" r="400" stroke="#c95a20" strokeWidth="0.75" strokeDasharray="6 6" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Programme Mandate */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-[#c95a20]"></span>
                <span>HUMAN SPACE FLIGHT CENTRE (HSFC)</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#f3e9d5] uppercase leading-[0.92]">
                THE NEXT<br />
                <span className="text-[#c95a20]">GIANT</span><br />
                LEAP.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#a8a08e] font-sans leading-relaxed">
              Gaganyaan demonstrates indigenous human spaceflight capability to low Earth orbit. The programme encompasses human-rated launch vehicle systems (HLVM3), an environmental control and life support system (ECLSS), and comprehensive crew escape protocols.
            </p>

            {/* Spec Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs">
              {specs.map((sp, idx) => (
                <div key={idx} className="bg-[#1e1d19] p-3 rounded-lg border border-[#2e2d27]">
                  <span className="text-[10px] text-[#a8a08e] uppercase block font-bold">{sp.label}</span>
                  <span className="font-extrabold text-[#f3e9d5] text-sm mt-0.5 block">{sp.val}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#missions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c95a20] hover:bg-[#b34d16] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>EXPLORE GAGANYAAN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Large Real Orbital Module & Spacecraft Image */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#2e2d27] bg-black group">
              
              {/* Thin Technical Orbital Rings */}
              <div className="absolute -inset-4 rounded-3xl border border-dashed border-[#c95a20]/35 pointer-events-none z-10"></div>
              
              {/* REAL GAGANYAAN SPACECRAFT PHOTOGRAPHY */}
              <img
                src={imgSrc}
                alt="Gaganyaan human spaceflight orbital module orbiting Earth"
                onError={() => setImgSrc("/images/gaganyaan_orbit_1787080412778.jpg")}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Technical Telemetry Stamp */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#1e1d19]/90 border border-[#2e2d27] backdrop-blur-xs text-xs font-mono">
                <div className="flex items-center justify-between text-[#c95a20] font-bold text-[10px]">
                  <span>HSFC BENGALURU</span>
                  <span>HLVM3 INTEGRATED</span>
                </div>
                <div className="text-[#f3e9d5] font-bold mt-0.5">Crew Module &amp; Service Module Configuration</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
