"use client";

import React from "react";
import { Mission } from "@/data/missions";
import { ArrowUpRight, Calendar, MapPin, Rocket, Sparkles } from "lucide-react";

interface MissionCardProps {
  mission: Mission;
  onSelect: (mission: Mission) => void;
  isFeatured?: boolean;
}

export default function MissionCard({ mission, onSelect, isFeatured }: MissionCardProps) {
  return (
    <div
      onClick={() => onSelect(mission)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(mission);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Explore mission details for ${mission.name}: ${mission.tagline}`}
      className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7722] ${
        isFeatured
          ? "bg-gradient-to-b from-[#0e1626] to-[#070b14] border border-[#ff7722]/30 hover:border-[#ff7722]/60 shadow-xl shadow-black/40 hover:shadow-[#ff7722]/10"
          : "bg-gradient-to-b from-[#090d16] to-[#050810] border border-white/10 hover:border-white/20 hover:bg-[#0c1322]"
      }`}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
        style={{ background: mission.accentColor }}
      />

      {/* Card Header: Category & Status */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#ff7722]/30 transition-colors">
            {mission.categoryLabel}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-medium border flex items-center gap-1.5 ${
              mission.statusType === "success"
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : mission.statusType === "active"
                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            <span>{mission.status}</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff7722] transition-colors tracking-tight flex items-center justify-between">
            <span>{mission.name}</span>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#ff7722] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 line-clamp-1">
            {mission.tagline}
          </p>
        </div>

        {/* Short Factual Description */}
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
          {mission.shortDescription}
        </p>

        {/* Payload Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {mission.payloads.slice(0, 4).map((p) => (
            <span
              key={p.name}
              className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-mono text-slate-400 group-hover:text-slate-200 group-hover:border-white/10 transition-colors"
            >
              {p.name}
            </span>
          ))}
          {mission.payloads.length > 4 && (
            <span className="px-1.5 py-0.5 rounded-md bg-white/[0.03] text-[10px] font-mono text-slate-500">
              +{mission.payloads.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Metadata Specs */}
      <div className="relative z-10 pt-5 mt-5 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5 truncate">
          <Calendar className="w-3.5 h-3.5 text-[#ff7722] shrink-0" />
          <span className="truncate">{mission.launchDate}</span>
        </div>
        <div className="flex items-center gap-1.5 truncate">
          <Rocket className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">{mission.launchVehicle}</span>
        </div>
        <div className="flex items-center gap-1.5 col-span-2 truncate text-slate-300 font-medium">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">{mission.destination}</span>
        </div>
      </div>
    </div>
  );
}
