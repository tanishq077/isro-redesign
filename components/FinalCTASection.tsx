"use client";

import React from "react";
import { ArrowRight, Compass } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  return (
    <section id="cta" className="py-20 lg:py-24 bg-[#c95a20] text-white relative overflow-hidden border-b border-[#a84411]">
      {/* Background Orbital Geometric Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none">
          <circle cx="150" cy="200" r="260" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="150" cy="200" r="340" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
        </svg>
      </div>

      {/* Subtle Moon / Earth Orbit Graphic Inset on Left */}
      <div className="hidden md:block absolute -bottom-16 -left-16 w-60 h-60 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl opacity-75 z-0 pointer-events-none bg-black">
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80"
          alt="Planetary orbit horizon"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Headline & Subtitle */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-white/80 font-bold uppercase tracking-widest">
              <span className="w-4 h-0.5 bg-white"></span>
              <span>SOVEREIGN HORIZONS // 2026 &amp; BEYOND</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]">
              WHERE DOES<br />
              INDIA GO NEXT?
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed">
              Explore India’s upcoming interplanetary missions, Bharatiya Antariksh Station (BAS), Next Generation Launch Vehicle (NGLV), and lunar sample-return programmes.
            </p>
          </div>

          {/* Large Pill CTA Button */}
          <div className="shrink-0">
            <a
              href="#missions"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#151512] hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group"
            >
              <span>EXPLORE MISSIONS</span>
              <span className="w-6 h-6 rounded-full bg-[#c95a20] group-hover:bg-white text-white group-hover:text-[#151512] flex items-center justify-center transition-colors">
                →
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
