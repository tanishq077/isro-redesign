"use client";

import React, { useState } from "react";
import { Play, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("/images/hero-launch.jpg");

  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#f3e9d5] border-b border-[#d8cca8] overflow-hidden">
      {/* Background Subtle Technical Grid & Orbit Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          <line x1="0" y1="120" x2="1440" y2="120" stroke="#d8cca8" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
          <line x1="680" y1="0" x2="680" y2="800" stroke="#d8cca8" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
          {/* Subtle trajectory arc behind right column */}
          <circle cx="1020" cy="400" r="340" stroke="#d8cca8" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="1020" cy="400" r="420" stroke="#c95a20" strokeWidth="0.75" strokeDasharray="6 6" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Large Editorial Typography (approx 48% width) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small Eyebrow Label with Burnt Orange Indicator */}
            <div className="flex items-center gap-3 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-[#c95a20]"></span>
              <span>SPACE PROGRAMME OF INDIA</span>
            </div>

            {/* Giant Condensed Poster Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#151512] uppercase leading-[0.92]">
              INDIA<br />
              <span className="text-[#c95a20]">BEYOND</span><br />
              EARTH.
            </h1>

            {/* Concise Factual Narrative */}
            <p className="text-sm sm:text-base text-[#4a473e] font-sans leading-relaxed max-w-lg">
              ISRO pioneers sovereign space transportation, high-resolution Earth observation constellations, satellite navigation, deep space planetary exploration, and human spaceflight missions.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#missions"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#151512] hover:bg-[#c95a20] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md group"
              >
                <span className="w-5 h-5 rounded-full bg-[#c95a20] group-hover:bg-white text-white group-hover:text-[#151512] flex items-center justify-center transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>VIEW MISSIONS</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#ece2cd] hover:bg-[#e4d8bf] border border-[#d8cca8] text-[#151512] text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-colors"
              >
                <span>ABOUT ISRO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Technical Metadata Bar */}
            <div className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#5c584e] border-t border-[#d8cca8]">
              <div>
                <span className="block text-[10px] text-[#8c8472] uppercase">FOUNDATION</span>
                <span className="font-bold text-[#151512]">15 AUG 1969</span>
              </div>
              <div className="h-6 w-px bg-[#d8cca8]"></div>
              <div>
                <span className="block text-[10px] text-[#8c8472] uppercase">SPACECRAFT</span>
                <span className="font-bold text-[#151512]">430+ LAUNCHED</span>
              </div>
              <div className="h-6 w-px bg-[#d8cca8]"></div>
              <div>
                <span className="block text-[10px] text-[#8c8472] uppercase">HEAVY LIFTER</span>
                <span className="font-bold text-[#c95a20]">LVM3 RECORD</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Real ISRO Rocket Launch Photograph as Primary Visual Object (52% width) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Vertical Running Label on Margin */}
            <div className="hidden xl:block absolute -right-8 top-1/2 -translate-y-1/2 z-20">
              <div className="flex flex-col items-center text-[10px] font-mono text-[#8c8472] tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
                <span className="text-[#c95a20] font-bold">SOVEREIGN EXPLORATION</span>
                <span className="my-2">↑</span>
                <span>INDIGENOUS PROPULSION</span>
                <span className="my-2">↑</span>
                <span>SCIENCE ARCHIVE</span>
              </div>
            </div>

            {/* Editorial Photographic Hero Container */}
            <div className="relative w-full max-w-lg aspect-4/5 sm:aspect-1/1 lg:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#d8cca8] bg-[#1c1b17] group">
              
              {/* Supporting Orange Celestial Arc Accent BEHIND / Overlapping the Launch */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-dashed border-[#c95a20]/60 pointer-events-none z-10"></div>
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-[#c95a20]/20 blur-xl pointer-events-none z-10"></div>

              {/* REAL ISRO ROCKET LIFTOFF PHOTOGRAPH (Primary Object) */}
              <img
                src={imgSrc}
                alt="ISRO LVM3 Heavy-Lift Rocket Launch Liftoff"
                onError={() => setImgSrc("/images/hero_lvm3_launch_1787079958535.jpg")}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-95"
                loading="eager"
              />

              {/* Dark subtle gradient bottom overlay for technical caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"></div>

              {/* Editorial Factual Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white z-20 space-y-1">
                <div className="text-xs font-mono text-[#c95a20] font-bold uppercase tracking-wider">
                  ISRO / LAUNCH VEHICLES
                </div>
                <div className="text-base sm:text-lg font-black text-white uppercase font-mono tracking-tight">
                  LVM3 Heavy-Lift Launch Vehicle
                </div>
                <div className="text-[11px] font-sans text-white/80">
                  Satish Dhawan Space Centre (SDSC SHAR) • Sriharikota
                </div>
              </div>

              {/* Top-left editorial label */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-xs border border-white/20 text-white text-[10px] font-mono font-bold tracking-wider uppercase z-20">
                LVM3 • LAUNCH VEHICLE
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
