"use client";

import React from "react";
import { ArrowUp, MapPin, Globe2 } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#151512] text-[#f3e9d5] font-sans text-xs border-t border-[#2e2d27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Col 1-2: Brand & National Headquarters */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-[#c95a20] flex items-center justify-center shadow-md">
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              </div>
              <div>
                <div className="text-[#f3e9d5] font-black text-sm uppercase tracking-wider font-mono">
                  ISRO • INDIA
                </div>
                <div className="text-[10px] font-mono text-[#a8a08e] uppercase">
                  Department of Space • Govt. of India
                </div>
              </div>
            </div>

            <p className="text-xs text-[#a8a08e] font-sans leading-relaxed max-w-sm">
              Indian Space Research Organisation — developing and applying sovereign space technology for national development and deep space exploration.
            </p>

            <div className="space-y-1.5 text-[11px] font-mono text-[#5c584e]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c95a20] shrink-0" />
                <span className="text-[#a8a08e]">Antariksh Bhavan, New BEL Road, Bengaluru 560 094</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#c95a20] shrink-0" />
                <span>Official Portal: <a href="https://www.isro.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#f3e9d5] hover:text-[#c95a20] underline">isro.gov.in</a></span>
              </div>
            </div>
          </div>

          {/* Col 3: Missions */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#c95a20] uppercase tracking-wider">
              Missions
            </h4>
            <ul className="space-y-2 text-[11px] text-[#a8a08e]">
              <li><a href="#missions" className="hover:text-white transition-colors">Chandrayaan-3</a></li>
              <li><a href="#missions" className="hover:text-white transition-colors">Aditya-L1</a></li>
              <li><a href="#gaganyaan" className="hover:text-white transition-colors">Gaganyaan</a></li>
              <li><a href="#missions" className="hover:text-white transition-colors">SpaDeX Docking</a></li>
              <li><a href="#missions" className="hover:text-white transition-colors">NISAR Radar</a></li>
            </ul>
          </div>

          {/* Col 4: Launch Vehicles */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#c95a20] uppercase tracking-wider">
              Launch Vehicles
            </h4>
            <ul className="space-y-2 text-[11px] text-[#a8a08e]">
              <li><a href="#technology" className="hover:text-white transition-colors">LVM3 Heavy Lifter</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">PSLV Workhorse</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">GSLV Mk II</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">SSLV Small Launcher</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">CE-20 Cryogenic Stage</a></li>
            </ul>
          </div>

          {/* Col 5: Space Science & Applications */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#c95a20] uppercase tracking-wider">
              Applications
            </h4>
            <ul className="space-y-2 text-[11px] text-[#a8a08e]">
              <li><a href="#earth-observation" className="hover:text-white transition-colors">Earth Observation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">NavIC Navigation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">GSAT Communications</a></li>
              <li><a href="#exploration" className="hover:text-white transition-colors">Planetary Science</a></li>
              <li><a href="#earth-observation" className="hover:text-white transition-colors">Bhuvan Geoportal</a></li>
            </ul>
          </div>

          {/* Col 6: Resources */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-bold text-[#c95a20] uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-[11px] text-[#a8a08e]">
              <li><a href="https://bhuvan.nrsc.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bhuvan Open Maps</a></li>
              <li><a href="https://www.mosdac.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MOSDAC Weather</a></li>
              <li><a href="https://www.issdc.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISSDC Planetary Data</a></li>
              <li><a href="https://www.inspace.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IN-SPACe Industry</a></li>
              <li><a href="#updates" className="hover:text-white transition-colors">RTI &amp; Annual Reports</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#2e2d27] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8c8472]">
          <div>
            © {new Date().getFullYear()} ISRO Digital Concept • Independent redesign concept and is not an official ISRO website.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white text-[#a8a08e] transition-colors rounded px-2 py-1 font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c95a20]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
