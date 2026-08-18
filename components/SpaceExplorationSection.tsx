"use client";

import React from "react";
import { ArrowRight, Compass, Sun, Moon } from "lucide-react";

export const SpaceExplorationSection: React.FC = () => {
  return (
    <section id="exploration" className="py-24 bg-[#f3e9d5] text-[#151512] border-b border-[#d8cca8] relative overflow-hidden">
      {/* Background Orbital Geometric Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
          <circle cx="200" cy="400" r="300" stroke="#d8cca8" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <line x1="0" y1="400" x2="1440" y2="400" stroke="#d8cca8" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#c95a20]"></span>
            <span>DEEP SPACE &amp; PLANETARY SCIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#151512] uppercase leading-[0.95]">
            FROM THE MOON<br />
            <span className="text-[#c95a20]">TO THE SUN.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4a473e] font-sans leading-relaxed">
            India’s space science portfolio spans planetary exploration at the lunar high-latitudes, continuous solar coronagraphy at the Sun-Earth L1 Lagrange point, and multi-wavelength X-ray polarimetry across distant celestial sources.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase (Lunar + Solar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Feature: Chandrayaan Lunar South Pole (7 cols) */}
          <div className="lg:col-span-7 bg-[#ece2cd] border border-[#d8cca8] rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between space-y-6 group">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold">
                <Moon className="w-4 h-4" />
                <span>CHANDRAYAAN-3 // LUNAR EXPLORATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#151512] uppercase font-mono">
                First Nation at the Lunar South Pole
              </h3>
              <p className="text-xs sm:text-sm text-[#4a473e] font-sans leading-relaxed">
                The Vikram Lander and Pragyan Rover conducted in-situ thermophysical, plasma, and elemental analysis at 69.373° S latitude, confirming the presence of sulfur and documenting lunar regolith thermal gradients.
              </p>
            </div>

            {/* Real Lunar Surface Photograph */}
            <div className="aspect-16/9 rounded-xl overflow-hidden border border-[#d8cca8] shadow-sm bg-black">
              <img
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80"
                alt="Lunar South Pole terrain and surface exploration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#5c584e] pt-2 border-t border-[#d8cca8]">
              <span>LANDING: 23 AUG 2023</span>
              <span className="font-bold text-[#151512]">SHIV SHAKTI POINT</span>
            </div>
          </div>

          {/* Right Feature: Aditya-L1 Solar Observatory (5 cols) */}
          <div className="lg:col-span-5 bg-[#ece2cd] border border-[#d8cca8] rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between space-y-6 group">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold">
                <Sun className="w-4 h-4" />
                <span>ADITYA-L1 // SOLAR OBSERVATORY</span>
              </div>
              <h3 className="text-2xl font-black text-[#151512] uppercase font-mono">
                1.5 Million KM Halo Orbit
              </h3>
              <p className="text-xs sm:text-sm text-[#4a473e] font-sans leading-relaxed">
                Stationed at the first Sun-Earth Lagrange point (L1), Aditya-L1 captures unobstructed observations of coronal mass ejections, solar flares, and chromospheric dynamics via seven indigenous payloads.
              </p>
            </div>

            {/* Real Solar Corona Photograph */}
            <div className="aspect-16/10 rounded-xl overflow-hidden border border-[#d8cca8] shadow-sm bg-black">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
                alt="Solar coronal observation and chromospheric telemetry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-[#5c584e] pt-2 border-t border-[#d8cca8]">
              <span>ORBIT: SUN-EARTH L1</span>
              <span className="font-bold text-[#c95a20]">7 ACTIVE PAYLOADS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
