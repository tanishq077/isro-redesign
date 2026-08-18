"use client";

import React, { useState } from "react";
import { MISSIONS_DATA, Mission } from "../data/missions";
import { Play, ArrowRight, X, Compass, Cpu, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FeaturedMissions: React.FC = () => {
  const [selectedMission, setSelectedMission] = useState<Mission>(MISSIONS_DATA[0]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <section id="missions" className="py-24 bg-[#f3e9d5] border-b border-[#d8cca8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#d8cca8]">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-xs font-mono text-[#c95a20] font-bold uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[#c95a20]"></span>
              <span>FLAGSHIP MISSIONS ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#151512] uppercase tracking-tight font-sans">
              FEATURED MISSIONS
            </h2>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#151512] hover:text-[#c95a20] font-bold uppercase tracking-wider transition-colors self-start sm:self-auto"
          >
            <span>FULL MISSION DOSSIER ({selectedMission.name})</span>
            <span className="w-5 h-5 rounded-full bg-[#151512] text-white flex items-center justify-center text-[10px]">
              →
            </span>
          </button>
        </div>

        {/* 1. Horizontal Photographic Mission Strip (Matches Reference 5-Card Strip) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MISSIONS_DATA.slice(0, 5).map((mission) => {
            const isSelected = selectedMission.id === mission.id;
            return (
              <div
                key={mission.id}
                onClick={() => setSelectedMission(mission)}
                className={`group cursor-pointer space-y-3 transition-all ${
                  isSelected ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                {/* Sharp Rectangular Image Thumbnail with Play Overlay */}
                <div className={`relative aspect-16/10 w-full overflow-hidden bg-[#151512] border transition-all duration-300 ${
                  isSelected ? "border-[#c95a20] ring-2 ring-[#c95a20]/30 shadow-md" : "border-[#d8cca8]"
                }`}>
                  <img
                    src={mission.imageUrl}
                    alt={mission.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors"></div>

                  {/* Centered Circular View Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
                      isSelected ? "bg-[#c95a20] text-white" : "bg-black/75 group-hover:bg-[#c95a20] text-white"
                    }`}>
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Micro Category Tag */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-white text-[9px] font-mono font-bold uppercase">
                    {mission.categoryLabel.split(" ")[0]}
                  </div>
                </div>

                {/* Title & Short Factual Summary */}
                <div className="space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-extrabold tracking-tight uppercase font-mono transition-colors ${
                      isSelected ? "text-[#c95a20]" : "text-[#151512] group-hover:text-[#c95a20]"
                    }`}>
                      {mission.name}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#5c584e] font-sans line-clamp-1">
                    {mission.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Interactive Mission Spotlight Showcase (Framer Motion Animation) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMission.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#ece2cd] border border-[#d8cca8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Spotlight Image (approx 45% width) */}
            <div className="lg:col-span-5 aspect-16/10 sm:aspect-4/3 rounded-xl overflow-hidden border border-[#d8cca8] shadow-md bg-black relative">
              <img
                src={selectedMission.imageUrl}
                alt={selectedMission.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#151512]/90 text-white font-mono text-[10px] font-bold uppercase border border-white/20">
                {selectedMission.categoryLabel}
              </div>
            </div>

            {/* Right Spotlight Narrative & Payloads */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold uppercase">
                  <span>DESTINATION: {selectedMission.destination}</span>
                  <span>•</span>
                  <span>LAUNCH: {selectedMission.launchDate}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#151512] uppercase font-mono">
                  {selectedMission.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#c95a20] font-mono">
                  {selectedMission.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#4a473e] font-sans leading-relaxed">
                {selectedMission.fullOverview}
              </p>

              {/* Highlight Payloads */}
              <div className="pt-2">
                <div className="text-[10px] font-mono font-bold uppercase text-[#8c8472] mb-2">
                  Key Scientific Instrumentation ({selectedMission.payloads.length} Payloads)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {selectedMission.payloads.slice(0, 4).map((pl, pidx) => (
                    <div key={pidx} className="p-2 rounded bg-[#f3e9d5] border border-[#d8cca8]">
                      <div className="font-bold text-[#151512] text-[11px]">{pl.name} — <span className="text-[#c95a20]">{pl.fullName}</span></div>
                      <div className="text-[10px] text-[#5c584e] line-clamp-1 mt-0.5">{pl.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#151512] hover:bg-[#c95a20] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>OPEN FULL MISSION SPECIFICATION</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3. Detailed Full Mission Dossier Modal */}
        {modalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-[#faf4eb] border border-[#d8cca8] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#ece2cd] text-[#151512] hover:bg-[#c95a20] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-1 pb-4 border-b border-[#d8cca8]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#c95a20] font-bold uppercase">
                  <span>OFFICIAL DOSSIER</span>
                  <span>•</span>
                  <span>{selectedMission.categoryLabel}</span>
                </div>
                <h2 className="text-3xl font-black text-[#151512] uppercase font-mono">
                  {selectedMission.name}
                </h2>
                <p className="text-xs font-mono text-[#5c584e]">
                  Destination: <strong className="text-[#151512]">{selectedMission.destination}</strong> • Launcher: <strong className="text-[#151512]">{selectedMission.launchVehicle}</strong>
                </p>
              </div>

              {/* Instrumentation Matrix Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-[#151512]">
                  Scientific Instrumentation Matrix ({selectedMission.payloads.length} Payloads)
                </h4>
                <div className="overflow-x-auto border border-[#d8cca8] rounded-lg bg-white">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="bg-[#ece2cd] text-[#151512] border-b border-[#d8cca8] uppercase text-[10px]">
                        <th className="p-2.5 font-bold">Acronym</th>
                        <th className="p-2.5 font-bold">Designation</th>
                        <th className="p-2.5 font-bold hidden sm:table-cell">Laboratory</th>
                        <th className="p-2.5 font-bold">Scientific Objective</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#d8cca8] text-[#5c584e]">
                      {selectedMission.payloads.map((pl, idx) => (
                        <tr key={idx} className="hover:bg-[#f3e9d5]">
                          <td className="p-2.5 font-bold text-[#c95a20]">{pl.name}</td>
                          <td className="p-2.5 font-semibold text-[#151512]">{pl.fullName}</td>
                          <td className="p-2.5 hidden sm:table-cell">{pl.institution || "ISRO Lab"}</td>
                          <td className="p-2.5 font-sans text-xs">{pl.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Flight Trajectory Sequence */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-[#151512]">
                  Flight Trajectory Sequence
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 font-mono text-xs">
                  {selectedMission.trajectory.steps.map((st, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-[#ece2cd] border border-[#d8cca8] space-y-1">
                      <div className="flex justify-between text-[10px] text-[#c95a20] font-bold">
                        <span>STAGE 0{idx + 1}</span>
                        <span className="text-emerald-800 uppercase">{st.status}</span>
                      </div>
                      <div className="font-bold text-[#151512] text-xs">{st.label}</div>
                      <div className="text-[10px] text-[#5c584e] font-sans">{st.sublabel}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
