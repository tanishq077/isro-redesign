"use client";

import React, { useState } from "react";
import { ISRO_CENTRES_DATA, ISROCentre } from "../data/centres";
import { Building2, MapPin, ExternalLink, Filter, Search, ChevronRight } from "lucide-react";

export const CentresSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("" );

  const categories = [
    { id: "all", label: "All Facilities (12)" },
    { id: "launch-propulsion", label: "Launch & Propulsion" },
    { id: "satellite-systems", label: "Satellites & Sensors" },
    { id: "applications-tracking", label: "Applications & Tracking" },
    { id: "human-research", label: "Human Flight & Science" },
    { id: "commercial-ecosystem", label: "Commercial & IN-SPACe" }
  ];

  const filteredCentres = ISRO_CENTRES_DATA.filter((centre) => {
    const matchesCategory =
      selectedCategory === "all" || centre.category === selectedCategory;
    const matchesSearch =
      centre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      centre.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      centre.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      centre.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="centres" className="py-24 bg-white border-b border-[#e5e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e5e3dc]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e65c00] font-bold uppercase tracking-widest mb-2">
              <span className="w-2 h-0.5 bg-[#e65c00]"></span>
              <span>CHAPTER // 05 • NATIONWIDE MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase leading-[1.05]">
              A Network<br />
              <span className="text-[#e65c00]">Built for Space</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-mono max-w-md">
            National matrix of spaceports, satellite fabrication facilities, propulsion test complexes, research institutes, and commercial enabling arms.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between font-mono text-xs">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e65c00] ${
                  selectedCategory === cat.id
                    ? "bg-[#111827] text-white font-bold"
                    : "bg-[#faf9f5] text-slate-700 hover:text-slate-900 border border-[#e5e3dc]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Query Input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search centres, cities, roles..."
              className="w-full bg-[#faf9f5] border border-[#e5e3dc] rounded px-3 py-1.5 text-xs text-slate-900 placeholder-slate-500 font-mono focus:outline-none focus:border-[#e65c00]"
            />
          </div>
        </div>

        {/* Horizontal Scrolling Photo Gallery on Desktop / Editorial Cards on Mobile */}
        <div className="overflow-x-auto pb-4 pt-1 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 flex gap-6 scrollbar-thin">
          {filteredCentres.map((centre, cidx) => (
            <div
              key={centre.id}
              className="w-80 sm:w-96 shrink-0 bg-[#faf9f5] border border-[#d1cfca] rounded-lg overflow-hidden flex flex-col justify-between shadow-sm hover:border-slate-500 transition-all group"
            >
              {/* Top Facility Photograph */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-[#e5e3dc]">
                <img
                  src={centre.imageUrl}
                  alt={`${centre.name} facility`}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase border border-white/20">
                  {centre.shortCode}
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-mono font-bold border border-[#e5e3dc] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#e65c00]" />
                  <span>{centre.city}</span>
                </div>
              </div>

              {/* Middle Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#e65c00] font-bold uppercase tracking-wider block mb-1">
                    {centre.categoryLabel}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-snug">
                    {centre.name}
                  </h3>
                  <p className="text-xs text-slate-700 font-sans mt-2 leading-relaxed">
                    {centre.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e5e3dc] space-y-2 font-mono text-xs">
                  <div className="flex flex-wrap gap-1">
                    {centre.keySpecialization.slice(0, 2).map((spec, sidx) => (
                      <span
                        key={sidx}
                        className="px-1.5 py-0.5 rounded bg-white border border-[#e5e3dc] text-[9px] text-slate-600 font-semibold"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-between items-center text-[11px]">
                    <span className="text-slate-500">{centre.state}</span>
                    <a
                      href={centre.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#e65c00] hover:text-[#cc5200] font-bold transition-colors"
                    >
                      <span>Visit Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
