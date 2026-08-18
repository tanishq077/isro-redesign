"use client";

import React from "react";
import { Database, Globe, BookOpen, ExternalLink, GraduationCap, Microscope } from "lucide-react";

export const ExploreISRO: React.FC = () => {
  const portals = [
    {
      id: "bhuvan",
      title: "Bhuvan Indian Geoportal",
      acronym: "BHUVAN",
      desc: "National open geospatial platform hosting 2D/3D satellite imagery, thematic maps, disaster support vectors, and urban master plan data layers.",
      url: "https://bhuvan.nrsc.gov.in",
      category: "Geospatial Data"
    },
    {
      id: "mosdac",
      title: "Meteorological & Oceanographic Data",
      acronym: "MOSDAC",
      desc: "Open data repository for weather satellite telemetry (INSAT-3D, INSAT-3DR, Oceansat), cyclone tracking models, and sea surface temperature datasets.",
      url: "https://www.mosdac.gov.in",
      category: "Meteorology"
    },
    {
      id: "issdc",
      title: "Indian Space Science Data Centre",
      acronym: "ISSDC",
      desc: "Primary planetary and astrophysical science archive storing raw and calibrated telemetry from Chandrayaan, AstroSat, Aditya-L1, and MOM.",
      url: "https://www.issdc.gov.in",
      category: "Planetary Science"
    },
    {
      id: "vedas",
      title: "EO Data Visualisation & Archival",
      acronym: "VEDAS",
      desc: "Research portal providing geospatial tools for vegetation index monitoring, solar/wind renewable energy estimation, and cryosphere tracking.",
      url: "https://vedas.sac.gov.in",
      category: "Applied Research"
    },
    {
      id: "yuvika",
      title: "Young Scientist Outreach Programme",
      acronym: "YUVIKA",
      desc: "Flagship STEM education initiative selecting rural and urban school students across all Indian States and UTs for residential space technology training.",
      url: "https://www.isro.gov.in/YUVIKA.html",
      category: "Education & Outreach"
    },
    {
      id: "respond",
      title: "Sponsored Space Research Scheme",
      acronym: "RESPOND",
      desc: "Institutional grants-in-aid programme supporting academic research, premier universities, and IITs in advanced aerospace materials, propulsion, and AI.",
      url: "https://www.isro.gov.in/RESPOND.html",
      category: "Academic R&D"
    }
  ];

  return (
    <section id="portals" className="py-20 bg-white border-b border-[#e5e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#e5e3dc]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e65c00] font-bold uppercase tracking-wider mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e65c00]"></span>
              <span>Section 07 // Open Gateways</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Open Space Science Gateways
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-mono max-w-md">
            Direct access to authenticated geospatial repositories, planetary science data archives, student outreach initiatives, and university research grants.
          </p>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map((portal) => (
            <div
              key={portal.id}
              className="bg-[#faf9f5] border border-[#e5e3dc] rounded-md p-6 flex flex-col justify-between space-y-4 hover:border-slate-400 transition-colors shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#e5e3dc]">
                  <span className="text-xs font-mono text-[#e65c00] font-bold">
                    {portal.acronym}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    {portal.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {portal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                  {portal.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e5e3dc]">
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#e65c00] hover:text-[#cc5200] font-bold transition-colors"
                >
                  <span>Access Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
