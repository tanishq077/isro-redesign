"use client";

import React, { useState } from "react";
import { Cpu, Rocket, ShieldCheck, Flame, Compass, Layers } from "lucide-react";

export const SpaceTechSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("/images/tech-propulsion.jpg");

  const techPillars = [
    {
      category: "LAUNCH VEHICLES",
      headline: "Multi-Stage Sovereign Rocket Fleet",
      specs: "LVM3 (Heavy Lifter) • PSLV (Workhorse) • GSLV Mk II • SSLV (Small Satellite)",
      code: "PROP-01",
    },
    {
      category: "SATELLITE BUS TECHNOLOGY",
      headline: "Modular Bus Architecture & Power Systems",
      specs: "I-3K & I-6K geostationary bus platforms • High-efficiency GaAs solar arrays",
      code: "BUS-02",
    },
    {
      category: "EARTH OBSERVATION PAYLOADS",
      headline: "Multispectral & Synthetic Aperture Radar",
      specs: "Sub-meter Panchromatic • Thermal Infrared • Dual-Frequency L & S Band SAR (NISAR)",
      code: "RADAR-03",
    },
    {
      category: "COMMUNICATION ARCHITECTURE",
      headline: "High-Throughput Transponder Payloads",
      specs: "Advanced Ku/Ka-band multi-beam transponders • Optical inter-satellite links",
      code: "COMMS-04",
    },
    {
      category: "NAVIGATION & ATOMIC CLOCKS",
      headline: "NavIC Space-Qualified Precision Timing",
      specs: "Indigenous space-grade Rubidium atomic frequency standards (RAFS)",
      code: "NAV-05",
    },
    {
      category: "DEEP SPACE PROPULSION",
      headline: "Cryogenic & Semi-Cryogenic Engines",
      specs: "CE-20 (200 kN Cryo) • CE-7.5 • Vikas Liquid Engine • S200 Solid Boosters",
      code: "CRYO-06",
    },
  ];

  return (
    <section id="technology" className="py-24 bg-[#151512] text-[#f3e9d5] border-b border-[#2e2d27] relative overflow-hidden">
      {/* Background Subtle Technical Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          <line x1="0" y1="200" x2="1440" y2="200" stroke="#2e2d27" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
          <line x1="680" y1="0" x2="680" y2="800" stroke="#2e2d27" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="1100" cy="400" r="320" stroke="#c95a20" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Technology Pillars with Thin Hairline Lines & Labels */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-[#c95a20]"></span>
                <span>SPACE TECHNOLOGY // R&amp;D ECOSYSTEM</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f3e9d5] uppercase font-sans">
                INDIGENOUS SPACE TECHNOLOGY
              </h2>
              <p className="text-xs sm:text-sm text-[#a8a08e] font-sans max-w-xl leading-relaxed">
                Over five decades of continuous innovation across specialized ISRO centres: Liquid Propulsion Systems Centre (LPSC), Vikram Sarabhai Space Centre (VSSC), and U R Rao Satellite Centre (URSC).
              </p>
            </div>

            {/* List of Technology Pillars with Clean Hairlines */}
            <div className="space-y-4 font-mono">
              {techPillars.map((tech, idx) => (
                <div key={idx} className="space-y-1.5 group">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#f3e9d5] tracking-wide group-hover:text-[#c95a20] transition-colors">
                      {tech.category}
                    </span>
                    <span className="text-[10px] text-[#c95a20] font-bold uppercase px-2 py-0.5 rounded bg-[#c95a20]/10 border border-[#c95a20]/30">
                      {tech.code}
                    </span>
                  </div>
                  <div className="text-[12px] font-bold text-[#f3e9d5]/90 font-sans">
                    {tech.headline}
                  </div>
                  <div className="text-[11px] text-[#a8a08e]">
                    {tech.specs}
                  </div>
                  {/* Subtle Technical Hairline Divider */}
                  <div className="w-full h-px bg-[#2e2d27] group-hover:bg-[#c95a20]/60 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Real Rocket Propulsion Static Hot-Fire Photograph */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#2e2d27] bg-black group">
              
              {/* Thin Technical Orbital Arcs */}
              <div className="absolute -inset-4 rounded-3xl border border-dashed border-[#c95a20]/35 pointer-events-none z-10"></div>
              
              {/* REAL ISRO CE-20 CRYOGENIC ENGINE HOT FIRE TEST PHOTOGRAPH */}
              <img
                src={imgSrc}
                alt="ISRO CE-20 Cryogenic Rocket Engine Static Hot Fire Test at IPRC Mahendragiri"
                onError={() => setImgSrc("/images/tech_propulsion_1787084228601.jpg")}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>

              {/* Technical Facility Stamp */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded bg-[#1e1d19]/90 border border-[#2e2d27] backdrop-blur-xs text-xs font-mono">
                <div className="flex items-center justify-between text-[#c95a20] font-bold text-[10px]">
                  <span>IPRC MAHENDRAGIRI</span>
                  <span>CRYOGENIC TEST FACILITY</span>
                </div>
                <div className="text-[#f3e9d5] font-bold mt-0.5">CE-20 High-Thrust Engine Qualification</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
