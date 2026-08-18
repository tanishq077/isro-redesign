"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

export const EarthObservationSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("/images/earth-observation.jpg");

  const applications = [
    { title: "AGRICULTURE & SOIL", desc: "Acreage estimation, crop yield forecasting, and drought assessment across Indian farming belts." },
    { title: "WATER RESOURCES", desc: "Glacial lake monitoring in the Himalayas, reservoir storage levels, and groundwater recharge maps." },
    { title: "DISASTER MANAGEMENT", desc: "Real-time cyclone tracking, flood inundation vectoring, and forest fire alerts via Bhuvan & MOSDAC." },
    { title: "FORESTS & ENVIRONMENT", desc: "Biennial state of forest report, mangrove preservation, and coastal zone management." },
    { title: "URBAN DEVELOPMENT", desc: "High-resolution master planning, smart cities spatial infrastructure, and land-use mapping." },
    { title: "OCEANOGRAPHY", desc: "Potential Fishing Zone (PFZ) advisories and sea surface temperature analytics for coastal safety." },
  ];

  return (
    <section id="earth-observation" className="py-24 bg-[#151512] text-[#f3e9d5] border-b border-[#2e2d27] relative overflow-hidden">
      {/* Background Subtle Orbital Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 700" fill="none">
          <circle cx="1080" cy="350" r="320" stroke="#2e2d27" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
          <circle cx="1080" cy="350" r="400" stroke="#c95a20" strokeWidth="0.75" strokeDasharray="6 6" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Societal Application Cards */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
                <span className="w-6 h-0.5 bg-[#c95a20]"></span>
                <span>EARTH OBSERVATION &amp; REMOTE SENSING</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#f3e9d5] uppercase leading-[0.95]">
                SEEING INDIA<br />
                <span className="text-[#c95a20]">FROM SPACE.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#a8a08e] font-sans leading-relaxed">
              India operates one of the largest civilian constellations of remote sensing satellites globally. From Cartosat sub-meter optical to Oceansat and the NASA-ISRO Synthetic Aperture Radar (NISAR), ISRO powers sovereign geospatial analytics.
            </p>

            {/* List of Applications with Clean Dark Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              {applications.map((app, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#1e1d19] border border-[#2e2d27] hover:border-[#c95a20] transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#f3e9d5] font-bold">
                    <span>{app.title}</span>
                    <span className="text-[#c95a20] text-[10px]">0{idx + 1}</span>
                  </div>
                  <p className="text-[11px] text-[#a8a08e] font-sans mt-1">
                    {app.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://bhuvan.nrsc.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c95a20] hover:bg-[#b34d16] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>LAUNCH BHUVAN GEOPORTAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Large Real Earth Observation Satellite Imagery as Focus */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#2e2d27] bg-black group">
              
              {/* Thin Technical Orbital Overlay Rings */}
              <div className="absolute -inset-4 rounded-3xl border border-dashed border-[#c95a20]/40 pointer-events-none z-10"></div>
              
              {/* REAL HIGH-RESOLUTION EARTH OBSERVATION PHOTOGRAPH */}
              <img
                src={imgSrc}
                alt="High-resolution remote sensing of Indian Subcontinent and maritime waters"
                onError={() => setImgSrc("/images/earth_subcontinent_1787084251351.jpg")}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Technical Telemetry Stamp */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-[#1e1d19]/90 border border-[#2e2d27] backdrop-blur-xs text-xs font-mono">
                <div className="flex items-center justify-between text-[#c95a20] font-bold text-[10px]">
                  <span>NRSC HYDERABAD</span>
                  <span>MULTISPECTRAL SATELLITE IMAGERY</span>
                </div>
                <div className="text-[#f3e9d5] font-bold mt-0.5">Indian Landmass, Himalayas &amp; Maritime EEZ</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
