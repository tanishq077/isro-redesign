"use client";

import React, { useState } from "react";
import { EXPLORATION_DOMAINS, ExplorationDomain } from "../data/exploration";
import { Globe2, Navigation, Radio, LifeBuoy, Users, Antenna, CheckCircle2, ArrowUpRight } from "lucide-react";

export const ExplorationSection: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>("earth-observation");

  const activeDomain: ExplorationDomain =
    EXPLORATION_DOMAINS.find((d) => d.id === activeDomainId) ||
    EXPLORATION_DOMAINS[0];

  const domainPhotos: Record<string, string> = {
    "earth-observation": "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80",
    "satellite-navigation": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    "space-science": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80",
    "disaster-management": "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&w=1600&q=80",
    "human-spaceflight-domain": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    "satellite-communications": "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1600&q=80",
  };

  return (
    <section id="capabilities" className="py-24 bg-[#faf9f5] border-b border-[#e5e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e5e3dc]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e65c00] font-bold uppercase tracking-widest mb-2">
              <span className="w-2 h-0.5 bg-[#e65c00]"></span>
              <span>CHAPTER // 04 • NATIONAL IMPACT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 uppercase leading-[0.95]">
              WHAT WE<br />
              <span className="text-[#e65c00]">DO IN SPACE</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-mono max-w-md">
            Harnessing sovereign space assets for precision agriculture, disaster management support, NavIC navigation, maritime safety, and deep space research.
          </p>
        </div>

        {/* Large Interactive Category Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPLORATION_DOMAINS.map((domain) => {
            const isSelected = domain.id === activeDomainId;
            const photoUrl = domainPhotos[domain.id] || domainPhotos["earth-observation"];
            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomainId(domain.id)}
                className={`group text-left relative overflow-hidden rounded-lg border transition-all duration-300 flex flex-col justify-between aspect-4/3 sm:aspect-1/1 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e65c00] ${
                  isSelected
                    ? "border-[#e65c00] ring-2 ring-[#e65c00] shadow-lg"
                    : "border-[#d1cfca] hover:border-slate-400 bg-white shadow-xs"
                }`}
              >
                {/* Background Photography with Zoom / Crop on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                  <img
                    src={photoUrl}
                    alt={domain.title}
                    className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-white">
                  <span className="px-2 py-0.5 rounded bg-[#e65c00] text-white font-bold text-[10px] uppercase">
                    DOMAIN 0{domain.categoryNumber}
                  </span>
                  <span className="text-slate-300 font-bold">
                    {domain.impactMetrics[0]?.value}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-1 text-white">
                  <span className="text-[10px] font-mono text-[#e65c00] font-bold uppercase tracking-wider block">
                    {domain.shortTitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight uppercase leading-snug text-white">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans line-clamp-2 pt-1">
                    {domain.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detailed Technical Breakdown */}
        <div className="bg-white border border-[#d1cfca] rounded-lg p-6 sm:p-8 space-y-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-[#e5e3dc]">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#e65c00] text-white text-xs font-mono font-bold uppercase rounded">
                  Domain 0{activeDomain.categoryNumber}
                </span>
                <span className="text-xs font-mono text-slate-600">
                  National Space Application Infrastructure
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {activeDomain.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                {activeDomain.description}
              </p>
            </div>

            {/* Impact Metric Cards */}
            <div className="lg:col-span-4 bg-[#faf9f5] border border-[#e5e3dc] rounded p-4 space-y-3 font-mono text-xs">
              <h4 className="text-xs uppercase tracking-wider text-[#e65c00] font-bold pb-1.5 border-b border-[#e5e3dc]">
                Operational Impact Metrics
              </h4>
              {activeDomain.impactMetrics.map((metric, idx) => (
                <div key={idx} className="flex justify-between py-1 border-b border-[#e5e3dc] last:border-none">
                  <span className="text-slate-600">{metric.label}:</span>
                  <span className="text-slate-900 font-bold">{metric.value}</span>
                </div>
              ))}

              {activeDomain.officialPortal && (
                <div className="pt-2">
                  <a
                    href={activeDomain.officialPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#e65c00] hover:text-[#cc5200] font-bold transition-colors"
                  >
                    <span>Launch Open Data Portal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Key Capabilities & Satellites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Core Technological Capabilities
              </h4>
              <ul className="space-y-2.5">
                {activeDomain.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#e65c00] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Primary Satellite Constellations &amp; Missions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {activeDomain.keyMissions.map((m, idx) => (
                  <div key={idx} className="bg-[#faf9f5] border border-[#e5e3dc] rounded p-2.5 text-slate-900 font-medium">
                    <span className="text-[#e65c00] mr-1.5 font-bold">•</span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
