"use client";

import React, { useState } from "react";
import { MISSIONS_DATA, Mission } from "../data/missions";
import { 
  Compass, 
  MapPin, 
  Rocket, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  Layers, 
  Activity 
} from "lucide-react";

export const MissionExplorer: React.FC = () => {
  const [activeMissionId, setActiveMissionId] = useState<string>("chandrayaan-3");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeMission: Mission =
    MISSIONS_DATA.find((m) => m.id === activeMissionId) || MISSIONS_DATA[0];

  const getMissionNumber = (id: string) => {
    const idx = MISSIONS_DATA.findIndex((m) => m.id === id);
    return `0${idx + 1}`;
  };

  return (
    <section id="missions" className="py-24 bg-white border-b border-[#e5e3dc] relative">
      {/* Background Trajectory Continuation Line */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#e5e3dc] hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e5e3dc]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e65c00] font-bold uppercase tracking-widest mb-2">
              <span className="w-2 h-0.5 bg-[#e65c00]"></span>
              <span>CHAPTER // 02 • SCIENTIFIC FLEET</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase leading-[1.05]">
              Missions That Changed<br />
              <span className="text-[#e65c00]">How India Sees Space</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-mono max-w-md">
            Interactive mission dossiers, in-situ planetary instrumentation matrices, and verified flight trajectory profiles across the Solar System.
          </p>
        </div>

        {/* Art-Directed Split Layout: Vertical Left Selector + Huge Right Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT SIDE: Vertical Mission Selector List */}
          <div className="lg:col-span-4 space-y-2 font-mono">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold px-2 mb-2">
              Select Mission Archive
            </div>

            <div className="divide-y divide-[#e5e3dc] border border-[#e5e3dc] rounded-lg bg-[#faf9f5] overflow-hidden">
              {MISSIONS_DATA.map((mission, idx) => {
                const isSelected = mission.id === activeMissionId;
                const num = `0${idx + 1}`;
                return (
                  <button
                    key={mission.id}
                    onClick={() => {
                      setActiveMissionId(mission.id);
                      setActiveStepIndex(0);
                    }}
                    className={`w-full text-left p-4 transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e65c00] ${
                      isSelected
                        ? "bg-white text-slate-900 border-l-4 border-l-[#e65c00] shadow-xs"
                        : "hover:bg-[#f3f2ee] text-slate-600 hover:text-slate-900"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold font-mono ${
                          isSelected ? "text-[#e65c00]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {num}
                      </span>
                      <div>
                        <div
                          className={`text-sm font-extrabold tracking-tight ${
                            isSelected ? "text-slate-900" : "text-slate-700"
                          }`}
                        >
                          {mission.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                          {mission.categoryLabel}
                        </div>
                      </div>
                    </div>

                    <div className="text-right text-[10px] text-slate-500">
                      <span className="block font-bold text-slate-700">
                        {mission.launchDate.split(" ").slice(-1)[0]}
                      </span>
                      <span
                        className={`block text-[9px] uppercase font-bold ${
                          mission.statusType === "success"
                            ? "text-emerald-700"
                            : mission.statusType === "active"
                            ? "text-[#e65c00]"
                            : "text-blue-700"
                        }`}
                      >
                        {mission.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Huge Mission Photograph & Full Editorial Dossier */}
          <div className="lg:col-span-8 space-y-8 bg-[#faf9f5] border border-[#d1cfca] rounded-lg p-6 sm:p-8 shadow-md">
            {/* Mission Masthead & Massive Photo */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#e5e3dc]">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2.5 py-0.5 bg-[#e65c00] text-white font-bold text-[10px] uppercase rounded">
                    MISSION // {getMissionNumber(activeMission.id)}
                  </span>
                  <span className="font-bold text-slate-900">
                    {activeMission.categoryLabel}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-600">
                  Target: <strong className="text-slate-900">{activeMission.destination.split("(")[0]}</strong>
                </span>
              </div>

              {/* Large Real Space Mission Photograph */}
              <div className="relative bg-white border border-[#e5e3dc] rounded-md p-2.5 shadow-sm">
                <div className="relative aspect-16/10 w-full overflow-hidden rounded bg-slate-100">
                  <img
                    src={activeMission.imageUrl}
                    alt={`${activeMission.name} real space mission photography`}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold tracking-wider uppercase border border-white/20">
                    {activeMission.name} • {activeMission.launchVehicle}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-mono font-bold border border-[#e5e3dc]">
                    {activeMission.orbitCoordinates || activeMission.destination}
                  </div>
                </div>
              </div>

              {/* Typography & Purpose Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeMission.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[#e65c00] font-bold">
                  {activeMission.tagline}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {activeMission.fullOverview}
                </p>
              </div>
            </div>

            {/* Conceptual Technical Trajectory Diagram */}
            <div className="p-5 bg-white border border-[#e5e3dc] rounded-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e3dc]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#e65c00]" />
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider">
                    Aerospace Flight Trajectory Profile
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  Conceptual Sequence Diagram
                </span>
              </div>

              {/* Step Sequence Stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeMission.trajectory.steps.map((step, sidx) => {
                  const isCur = sidx === activeStepIndex;
                  return (
                    <button
                      key={sidx}
                      onClick={() => setActiveStepIndex(sidx)}
                      className={`p-3 rounded text-left border font-mono transition-all text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e65c00] ${
                        isCur
                          ? "bg-[#faf9f5] border-[#e65c00] text-slate-900 shadow-xs"
                          : "bg-white border-[#e5e3dc] text-slate-600 hover:border-slate-400"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] text-[#e65c00] font-bold mb-1">
                        <span>STAGE 0{sidx + 1}</span>
                        <span className="text-emerald-700 uppercase font-semibold">{step.status}</span>
                      </div>
                      <div className="font-bold text-slate-900 text-xs truncate">
                        {step.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 font-sans font-normal line-clamp-2">
                        {step.sublabel}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scientific Instrumentation Matrix Table */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#e65c00]" />
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider">
                    Scientific Payloads Matrix ({activeMission.payloads.length} Instruments)
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-500">ISRO Lead Labs</span>
              </div>

              <div className="overflow-x-auto border border-[#e5e3dc] rounded-md bg-white">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-[#f3f2ee] text-slate-700 border-b border-[#e5e3dc] uppercase tracking-wider">
                      <th className="py-2.5 px-3.5 font-bold w-24">Acronym</th>
                      <th className="py-2.5 px-3.5 font-bold w-56">Full Designation</th>
                      <th className="py-2.5 px-3.5 font-bold w-40 hidden md:table-cell">Laboratory</th>
                      <th className="py-2.5 px-3.5 font-bold">Scientific Measurement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e3dc] text-slate-700">
                    {activeMission.payloads.map((payload, pidx) => (
                      <tr key={pidx} className="hover:bg-[#faf9f5] transition-colors">
                        <td className="py-3 px-3.5 font-bold text-[#e65c00]">
                          {payload.name}
                        </td>
                        <td className="py-3 px-3.5 text-slate-900 font-semibold">
                          {payload.fullName}
                        </td>
                        <td className="py-3 px-3.5 text-slate-600 hidden md:table-cell">
                          {payload.institution || "ISRO Research Lab"}
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 font-sans text-xs leading-relaxed">
                          {payload.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
