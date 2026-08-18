"use client";

import React from "react";
import { Globe2, Radio, Navigation, Telescope, Users2 } from "lucide-react";

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      code: "01",
      title: "EARTH OBSERVATION",
      desc: "Remote sensing constellations delivering high-resolution multispectral data for agriculture, water mapping, disaster monitoring, and urban infrastructure.",
      icon: Globe2,
    },
    {
      code: "02",
      title: "COMMUNICATION",
      desc: "High-throughput GSAT transponders bridging nationwide telecommunications, broadband connectivity, rural education, and emergency broadcast networks.",
      icon: Radio,
    },
    {
      code: "03",
      title: "NAVIGATION (NAVIC)",
      desc: "Sovereign regional satellite navigation providing real-time positioning, velocity, and timing accuracy across the Indian landmass and maritime domain.",
      icon: Navigation,
    },
    {
      code: "04",
      title: "SPACE SCIENCE",
      desc: "Deep space astrophysics, solar corona observation via Aditya-L1, lunar resource prospecting via Chandrayaan, and planetary exploration.",
      icon: Telescope,
    },
    {
      code: "05",
      title: "HUMAN SPACEFLIGHT",
      desc: "Indigenous orbital crew module, life support systems (ECLSS), and human-rated launch vehicles designed to loft Indian astronauts into orbit.",
      icon: Users2,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#f3e9d5] border-b border-[#d8cca8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Small Label (Matches Reference Editorial Header) */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-3 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#c95a20]"></span>
            <span>CORE SERVICES // NATIONAL CAPABILITIES</span>
            <span className="w-6 h-0.5 bg-[#c95a20]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#151512] uppercase tracking-tight font-sans">
            WHAT ISRO DOES
          </h2>
        </div>

        {/* Horizontal Editorial Capability Columns with Vertical Hairline Dividers (Matches Reference Horizontal Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-[#d8cca8] border-y border-[#d8cca8]">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.code}
                className="py-8 lg:py-6 px-5 sm:px-6 flex flex-col justify-between space-y-4 hover:bg-[#ece2cd] transition-colors group"
              >
                {/* Geometric Icon with Orbital Ring Frame */}
                <div className="w-10 h-10 rounded-full border border-[#d8cca8] group-hover:border-[#c95a20] flex items-center justify-center transition-colors bg-[#f3e9d5]">
                  <Icon className="w-4 h-4 text-[#151512] group-hover:text-[#c95a20] transition-colors" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-[#c95a20]">
                      {cap.code}
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold tracking-tight text-[#151512] uppercase font-mono">
                      {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#5c584e] font-sans leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
