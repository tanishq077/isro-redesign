"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("/images/about-facility.jpg");

  return (
    <section id="about" className="py-24 bg-[#151512] text-[#f3e9d5] border-b border-[#2e2d27] relative overflow-hidden">
      {/* Background Orbital Geometric Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 700" fill="none">
          <circle cx="240" cy="350" r="320" stroke="#2e2d27" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
          <circle cx="240" cy="350" r="400" stroke="#c95a20" strokeWidth="1" opacity="0.25" />
          <line x1="0" y1="350" x2="1440" y2="350" stroke="#2e2d27" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Large Real Launch Complex Facility Photograph Portal */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#2e2d27] bg-black group">
              {/* Thin Technical Orbital Ring Overlays */}
              <div className="absolute -inset-4 rounded-3xl border border-dashed border-[#c95a20]/30 pointer-events-none z-10"></div>
              
              {/* REAL ISRO LAUNCH PAD & ASSEMBLY UMBILICAL TOWER */}
              <img
                src={imgSrc}
                alt="ISRO Satish Dhawan Space Centre Sriharikota Launch Pad Assembly Complex"
                onError={() => setImgSrc("/images/about_facility_1787084193268.jpg")}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

              {/* Technical Facility Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-[#1e1d19]/90 border border-[#2e2d27] backdrop-blur-xs text-xs font-mono">
                <div className="flex items-center justify-between text-[#c95a20] font-bold text-[10px]">
                  <span>SDSC SHAR</span>
                  <span>SRIHARIKOTA</span>
                </div>
                <div className="text-[#f3e9d5] font-bold mt-0.5">Umbilical Launch Tower &amp; Vehicle Assembly</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Factual Charter */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-[#c95a20]"></span>
                <span>ABOUT ISRO // NATIONAL MANDATE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f3e9d5] uppercase leading-[1.05]">
                ENGINEERING<br />
                INDIA’S ACCESS<br />
                <span className="text-[#c95a20]">TO SPACE.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#a8a08e] font-sans leading-relaxed max-w-xl">
              The Indian Space Research Organisation (ISRO) is the national space agency of India, operating under the Department of Space. Headquartered in Bengaluru, ISRO harnesses space technology for socio-economic development, sovereign security, Earth observation, and deep space exploration.
            </p>

            <div className="pt-1">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent hover:bg-[#c95a20] border border-[#d8cca8]/40 hover:border-[#c95a20] text-[#f3e9d5] text-xs font-mono font-bold uppercase tracking-wider transition-colors"
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Giant Number Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2e2d27]">
              <div className="space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-[#c95a20] font-mono tracking-tight">
                  430+
                </span>
                <span className="block text-[10px] sm:text-xs font-mono text-[#a8a08e] uppercase font-bold tracking-wider">
                  SATELLITES LAUNCHED
                </span>
              </div>

              <div className="space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-[#f3e9d5] font-mono tracking-tight">
                  104
                </span>
                <span className="block text-[10px] sm:text-xs font-mono text-[#a8a08e] uppercase font-bold tracking-wider">
                  SINGLE LAUNCH RECORD
                </span>
              </div>

              <div className="space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-[#c95a20] font-mono tracking-tight">
                  100%
                </span>
                <span className="block text-[10px] sm:text-xs font-mono text-[#a8a08e] uppercase font-bold tracking-wider">
                  LVM3 RELIABILITY
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
