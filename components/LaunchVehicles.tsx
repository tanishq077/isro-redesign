"use client";

import React, { useState } from "react";
import { LAUNCH_VEHICLES_DATA, LaunchVehicle } from "../data/launchVehicles";
import { Rocket, Shield, Gauge, CheckCircle2, ChevronRight, Layers, Flame, ArrowUpRight } from "lucide-react";

export const LaunchVehicles: React.FC = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("lvm3");

  const activeVehicle: LaunchVehicle =
    LAUNCH_VEHICLES_DATA.find((v) => v.id === selectedVehicleId) ||
    LAUNCH_VEHICLES_DATA[0];

  return (
    <section id="launch-vehicles" className="py-24 bg-[#faf9f5] border-b border-[#e5e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#e5e3dc]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e65c00] font-bold uppercase tracking-widest mb-2">
              <span className="w-2 h-0.5 bg-[#e65c00]"></span>
              <span>CHAPTER // 03 • VEHICLE HANGAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase leading-[1.05]">
              Vehicles Built<br />
              <span className="text-[#e65c00]">To Reach Beyond</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-mono max-w-md">
            Sovereign orbital access across heavy-lift (LVM3), polar workhorse (PSLV), cryogenic geosynchronous (GSLV), and responsive small satellite (SSLV) launchers.
          </p>
        </div>

        {/* Vehicle Hangar Grid: Vertical Selector Left + Massive Vehicle Profile Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Fleet Selector on Left */}
          <div className="lg:col-span-3 space-y-2 font-mono">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold px-2 mb-2">
              Launch Fleet Roster
            </div>

            <div className="divide-y divide-[#e5e3dc] border border-[#e5e3dc] rounded-lg bg-white overflow-hidden shadow-xs">
              {LAUNCH_VEHICLES_DATA.map((vehicle, vidx) => {
                const isSelected = vehicle.id === selectedVehicleId;
                return (
                  <button
                    key={vehicle.id}
                    onClick={() => setSelectedVehicleId(vehicle.id)}
                    className={`w-full text-left p-4 transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e65c00] ${
                      isSelected
                        ? "bg-[#faf9f5] text-slate-900 border-l-4 border-l-[#e65c00] font-bold"
                        : "hover:bg-[#f3f2ee] text-slate-600 hover:text-slate-900"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-bold ${
                            isSelected ? "text-[#e65c00]" : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
                          0{vidx + 1}
                        </span>
                        <span className="text-base font-extrabold text-slate-900">
                          {vehicle.name}
                        </span>
                      </div>
                      <span className="block text-[11px] text-slate-500 font-normal mt-0.5">
                        {vehicle.codeName.split("(")[0]}
                      </span>
                    </div>

                    <div className="text-right text-[10px] text-[#e65c00] font-bold">
                      {vehicle.numberOfStages} Stages
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Fleet Summary Box */}
            <div className="p-4 bg-white border border-[#e5e3dc] rounded-lg space-y-2 text-xs">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Spaceport Range</span>
              <p className="text-slate-700 font-sans text-xs">
                All vehicles integrated and launched from <strong>Satish Dhawan Space Centre (SDSC SHAR)</strong>, Sriharikota.
              </p>
            </div>
          </div>

          {/* Massive Vehicle Hangar Feature Dossier */}
          <div className="lg:col-span-9 space-y-8 bg-white border border-[#d1cfca] rounded-lg p-6 sm:p-8 shadow-md">
            {/* Header Strip & Large Rocket Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-[#e5e3dc]">
              <div className="lg:col-span-6 space-y-4 font-mono">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 bg-[#e65c00] text-white font-bold text-[10px] uppercase rounded">
                    FLEET // {activeVehicle.name}
                  </span>
                  <span className="text-slate-600">
                    Total Flights: <strong className="text-slate-900">{activeVehicle.totalLaunches}</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-sans tracking-tight">
                  {activeVehicle.name}
                </h3>
                <p className="text-xs text-[#e65c00] font-bold font-mono">
                  {activeVehicle.codeName}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 font-sans font-normal leading-relaxed">
                  {activeVehicle.overview}
                </p>

                {/* Measurement-Style Dimensional Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
                  <div className="bg-[#faf9f5] p-2.5 rounded border border-[#e5e3dc]">
                    <span className="text-[9px] text-slate-500 uppercase block font-bold">Height</span>
                    <span className="font-extrabold text-slate-900">{activeVehicle.height}</span>
                  </div>
                  <div className="bg-[#faf9f5] p-2.5 rounded border border-[#e5e3dc]">
                    <span className="text-[9px] text-slate-500 uppercase block font-bold">Lift-Off Mass</span>
                    <span className="font-extrabold text-slate-900">{activeVehicle.liftOffMass}</span>
                  </div>
                  <div className="bg-[#faf9f5] p-2.5 rounded border border-[#e5e3dc]">
                    <span className="text-[9px] text-slate-500 uppercase block font-bold">LEO Capacity</span>
                    <span className="font-extrabold text-emerald-800">{activeVehicle.payloadToLEO}</span>
                  </div>
                  <div className="bg-[#faf9f5] p-2.5 rounded border border-[#e5e3dc]">
                    <span className="text-[9px] text-slate-500 uppercase block font-bold">GTO Capacity</span>
                    <span className="font-extrabold text-[#e65c00]">{activeVehicle.payloadToGTO}</span>
                  </div>
                </div>
              </div>

              {/* Large Rocket Launch / Pad Photograph */}
              <div className="lg:col-span-6">
                <div className="bg-[#faf9f5] border border-[#e5e3dc] rounded-md p-2.5 shadow-sm">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded bg-slate-100">
                    <img
                      src={activeVehicle.imageUrl}
                      alt={`${activeVehicle.name} rocket launch photography`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold uppercase border border-white/20">
                      {activeVehicle.name} • {activeVehicle.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage-by-Stage Propulsion Architecture Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#e65c00]" />
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-900 tracking-wider">
                    Stage-by-Stage Propulsion Architecture
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  {activeVehicle.stages.length} Integrated Stages
                </span>
              </div>

              <div className="overflow-x-auto border border-[#e5e3dc] rounded-md bg-[#faf9f5]">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="bg-[#f3f2ee] text-slate-700 border-b border-[#e5e3dc] uppercase tracking-wider">
                      <th className="py-2.5 px-3.5 font-bold w-20">Stage</th>
                      <th className="py-2.5 px-3.5 font-bold w-44">Stage Designation</th>
                      <th className="py-2.5 px-3.5 font-bold w-44">Engine / Motor</th>
                      <th className="py-2.5 px-3.5 font-bold w-36">Propellant</th>
                      <th className="py-2.5 px-3.5 font-bold w-32">Vacuum Thrust</th>
                      <th className="py-2.5 px-3.5 font-bold">Engineering Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e3dc] text-slate-700">
                    {activeVehicle.stages.map((stage) => (
                      <tr key={stage.stageNumber} className="hover:bg-white transition-colors">
                        <td className="py-3 px-3.5 font-bold text-[#e65c00]">
                          Stage 0{stage.stageNumber}
                        </td>
                        <td className="py-3 px-3.5 text-slate-900 font-semibold">
                          {stage.name}
                        </td>
                        <td className="py-3 px-3.5 text-slate-800">
                          {stage.engineMotor}
                        </td>
                        <td className="py-3 px-3.5 text-slate-600">
                          <span className="px-1.5 py-0.5 rounded bg-white border border-[#e5e3dc] text-[11px]">
                            {stage.propellantType}
                          </span>
                        </td>
                        <td className="py-3 px-3.5 text-slate-900 font-semibold">
                          {stage.thrustVacuum || "Nominal"}
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 font-sans text-xs leading-relaxed">
                          {stage.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Notable Flight Manifests */}
            <div className="pt-4 border-t border-[#e5e3dc] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Key Historical Launches &amp; Milestones
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {activeVehicle.notableMissions.map((m, idx) => (
                  <div key={idx} className="bg-[#faf9f5] border border-[#e5e3dc] rounded p-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-900 font-mono font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e65c00] shrink-0" />
                      <span>{m.split("(")[0]}</span>
                    </div>
                    {m.includes("(") && (
                      <p className="text-[11px] text-slate-600 mt-1 pl-5.5 font-sans">
                        {m.substring(m.indexOf("(") + 1, m.lastIndexOf(")"))}
                      </p>
                    )}
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
