"use client";

import React from "react";
import { UPDATES_DATA } from "../data/updates";
import { ArrowUpRight } from "lucide-react";

export const LatestUpdates: React.FC = () => {
  return (
    <section id="updates" className="py-24 bg-[#151512] text-[#f3e9d5] border-b border-[#2e2d27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-3 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
            <span className="w-6 h-0.5 bg-[#c95a20]"></span>
            <span>GAZETTE // OFFICIAL COMMUNIQUÉ</span>
            <span className="w-6 h-0.5 bg-[#c95a20]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#f3e9d5] uppercase tracking-tight font-sans">
            LATEST FROM ISRO
          </h2>
        </div>

        {/* 3-Column Editorial Grid with Real Press Releases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPDATES_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-[#1e1d19] border border-[#2e2d27] hover:border-[#c95a20] transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              {/* Category Tag & Date */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#c95a20] uppercase px-2.5 py-1 rounded bg-[#c95a20]/10 border border-[#c95a20]/30">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-[#8c8472] font-bold">{item.date}</span>
              </div>

              {/* Headline & Body Summary */}
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-[#f3e9d5] tracking-tight leading-snug group-hover:text-[#c95a20] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a8a08e] font-sans leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Official Source Link */}
              <div className="pt-4 border-t border-[#2e2d27] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8c8472]">Department of Space</span>
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#c95a20] hover:text-white font-bold transition-colors"
                  >
                    <span>Read Release</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
