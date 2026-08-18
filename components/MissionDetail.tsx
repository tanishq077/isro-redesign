"use client";

import React, { useEffect } from "react";
import { Mission } from "@/data/missions";
import OrbitalVisualizer from "./OrbitalVisualizer";
import { X, Calendar, MapPin, Rocket, Award, Cpu, Target, ExternalLink } from "lucide-react";

interface MissionDetailProps {
  mission: Mission | null;
  onClose: () => void;
}

export default function MissionDetail({ mission, onClose }: MissionDetailProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (mission) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [mission, onClose]);

  if (!mission) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mission-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#090d16] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Badge & Close */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-gradient-to-r from-white/[0.03] to-transparent shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff7722]/15 text-[#ff7722] border border-[#ff7722]/30">
                {mission.categoryLabel}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                  mission.statusType === "success"
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : mission.statusType === "active"
                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                }`}
              >
                ● {mission.status}
              </span>
            </div>
            <h3
              id="mission-detail-title"
              className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              {mission.name}
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">{mission.tagline}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close mission detail"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Quick Technical Specs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-[#ff7722]" />
                <span>Launch Date</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">{mission.launchDate}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Rocket className="w-3.5 h-3.5 text-cyan-400" />
                <span>Launch Vehicle</span>
              </div>
              <p className="text-sm font-semibold text-slate-200">{mission.launchVehicle}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 col-span-2 sm:col-span-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Destination / Target Orbit</span>
              </div>
              <p className="text-sm font-semibold text-slate-200 truncate">{mission.destination}</p>
            </div>
          </div>

          {/* Full Mission Overview */}
          <div className="space-y-3">
            <h4 className="font-display text-base sm:text-lg font-semibold text-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#ff7722] rounded-full" />
              Mission Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-white/[0.01] p-4 rounded-xl border border-white/5">
              {mission.fullOverview}
            </p>
          </div>

          {/* Conceptual Trajectory Visualizer */}
          <div className="space-y-3">
            <OrbitalVisualizer mission={mission} />
          </div>

          {/* Verified Primary Objectives */}
          <div className="space-y-3">
            <h4 className="font-display text-base sm:text-lg font-semibold text-slate-100 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#ff7722]" />
              Primary Mission Objectives
            </h4>
            <div className="grid gap-2">
              {mission.primaryObjectives.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#ff7722]/10 text-[#ff7722] font-mono text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Payloads & Instruments */}
          <div className="space-y-3">
            <h4 className="font-display text-base sm:text-lg font-semibold text-slate-100 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Scientific Payloads & Instrumentation ({mission.payloads.length})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mission.payloads.map((payload) => (
                <div
                  key={payload.name}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-cyan-400 group-hover:text-cyan-300">
                      {payload.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                      Payload
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-200">{payload.fullName}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{payload.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Facts & Verified Milestones */}
          <div className="space-y-3">
            <h4 className="font-display text-base sm:text-lg font-semibold text-slate-100 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Verified Key Milestones
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {mission.keyHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1"
                >
                  <span className="text-[11px] text-slate-400 block">{hl.label}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 block">
                    {hl.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with External Link & Action */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <a
            href={`https://www.isro.gov.in/${mission.id.replace("-", "_")}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>View Official ISRO Documentation</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#ff7722] hover:bg-[#ea580c] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#ff7722]/20"
          >
            Done Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
