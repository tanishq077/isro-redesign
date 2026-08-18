"use client";

import React, { useState } from "react";
import { Mission } from "@/data/missions";
import { CheckCircle2, Circle, Clock, Info } from "lucide-react";

interface OrbitalVisualizerProps {
  mission: Mission;
}

export default function OrbitalVisualizer({ mission }: OrbitalVisualizerProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = mission.trajectory.steps;
  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="rounded-2xl bg-[#060a14] border border-white/10 p-4 sm:p-6 space-y-6">
      {/* Header & Verification Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#ff7722] animate-pulse" />
            <h4 className="font-display font-semibold text-sm sm:text-base text-slate-100">
              Orbital Trajectory & Flight Sequence
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Conceptual flight profile for {mission.name}
          </p>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-slate-400 font-mono">
          <Info className="w-3 h-3 text-[#ff7722]" />
          <span>Conceptual Schematic</span>
        </div>
      </div>

      {/* Trajectory Graphic Canvas (SVG) */}
      <div className="relative w-full h-48 sm:h-64 rounded-xl bg-[#03060f] border border-white/5 overflow-hidden flex items-center justify-center p-4">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-cosmic-grid opacity-30" />

        {/* Ambient glow based on mission accent */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${mission.accentColor} 0%, transparent 70%)`
          }}
        />

        {/* SVG Diagram based on trajectory type */}
        <svg
          viewBox="0 0 500 240"
          className="w-full h-full max-h-56 select-none relative z-10"
          aria-label={`Orbital trajectory diagram for ${mission.name}`}
        >
          <defs>
            <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ff7722" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="earthGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#082f49" />
            </radialGradient>
            <radialGradient id="moonGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#334155" />
            </radialGradient>
            <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>

          {/* Coordinate Axes */}
          <line x1="20" y1="120" x2="480" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1="250" y1="20" x2="250" y2="220" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

          {mission.trajectory.type === "lunar-descent" && (
            <>
              {/* Earth at origin */}
              <circle cx="80" cy="120" r="28" fill="url(#earthGrad)" />
              <circle cx="80" cy="120" r="32" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
              <text x="80" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                Earth (SDSC SHAR)
              </text>

              {/* Multi-orbit raising loops */}
              <ellipse cx="110" cy="120" rx="45" ry="25" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
              <ellipse cx="130" cy="120" rx="65" ry="35" fill="none" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />

              {/* Trans-Lunar Transfer Arc */}
              <path
                d="M 195 120 C 260 50, 340 70, 400 110"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="2"
                strokeDasharray="4 2"
              />

              {/* Moon Destination */}
              <circle cx="420" cy="120" r="22" fill="url(#moonGrad)" />
              <circle cx="420" cy="120" r="34" fill="none" stroke="rgba(255, 119, 34, 0.6)" strokeWidth="1.2" strokeDasharray="3 2" />
              <text x="420" y="165" fill="#f8fafc" fontSize="10" textAnchor="middle" fontFamily="monospace">
                Moon (South Pole)
              </text>

              {/* Landing Point Marker */}
              <circle cx="425" cy="138" r="3" fill="#ff7722" />
              <text x="425" y="180" fill="#ff7722" fontSize="9" textAnchor="middle" fontWeight="bold">
                Shiv Shakti Point (69.37°S)
              </text>
            </>
          )}

          {mission.trajectory.type === "l1-halo" && (
            <>
              {/* Earth at Left */}
              <circle cx="80" cy="120" r="28" fill="url(#earthGrad)" />
              <text x="80" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                Earth (1.0 AU)
              </text>

              {/* 1.5 Million km Transfer Line */}
              <path
                d="M 108 120 C 180 80, 260 90, 340 120"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="2"
                strokeDasharray="4 2"
              />

              {/* Sun Direction Indicator */}
              <circle cx="480" cy="120" r="14" fill="url(#sunGrad)" />
              <text x="480" y="155" fill="#f59e0b" fontSize="9" textAnchor="middle">
                To Sun ☀
              </text>

              {/* Lagrange Point L1 & 3D Halo Orbit */}
              <ellipse cx="350" cy="120" rx="30" ry="45" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="350" cy="120" r="3" fill="#ffffff" />
              <text x="350" y="60" fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
                Sun-Earth L1 Halo Orbit
              </text>
              <text x="350" y="180" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">
                1.5M km from Earth
              </text>
            </>
          )}

          {mission.trajectory.type === "leo-human" && (
            <>
              {/* Large Earth Limb */}
              <circle cx="250" cy="300" r="220" fill="url(#earthGrad)" opacity="0.9" />
              <text x="250" y="160" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
                Earth Surface (SDSC Launch)
              </text>

              {/* 400 km LEO Orbit Arc */}
              <path
                d="M 60 70 Q 250 20 440 70"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
              />
              <text x="250" y="38" fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                400 km Circular Low Earth Orbit (51.5° Inclination)
              </text>

              {/* Re-entry Corridor & Parachute Splashdown */}
              <path
                d="M 360 45 Q 400 90 410 140"
                fill="none"
                stroke="#ff7722"
                strokeWidth="2"
                strokeDasharray="3 2"
              />
              <circle cx="410" cy="140" r="4" fill="#ff7722" />
              <text x="410" y="160" fill="#ff7722" fontSize="9" textAnchor="middle" fontWeight="bold">
                Recovery Zone (Indian Waters)
              </text>
            </>
          )}

          {mission.trajectory.type === "mars-insertion" && (
            <>
              {/* Earth at Left */}
              <circle cx="70" cy="140" r="24" fill="url(#earthGrad)" />
              <text x="70" y="180" fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace">
                Earth Orbit Departure
              </text>

              {/* Sun at Center Bottom */}
              <circle cx="200" cy="200" r="16" fill="url(#sunGrad)" />
              <text x="200" y="230" fill="#f59e0b" fontSize="9" textAnchor="middle">
                Sun
              </text>

              {/* 300-Day Heliocentric Hohmann Arc */}
              <path
                d="M 94 140 C 140 40, 310 40, 410 110"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <text x="250" y="45" fill="#f8fafc" fontSize="10" textAnchor="middle" fontFamily="monospace">
                666 Million km Heliocentric Transit
              </text>

              {/* Mars at Right */}
              <circle cx="420" cy="115" r="20" fill="#ef4444" />
              <ellipse cx="420" cy="115" rx="35" ry="18" fill="none" stroke="rgba(239, 68, 68, 0.6)" strokeWidth="1.5" strokeDasharray="3 2" />
              <text x="420" y="150" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold" fontFamily="monospace">
                Mars Orbit Insertion (MOI)
              </text>
            </>
          )}

          {(mission.trajectory.type === "leo-docking" || mission.trajectory.type === "leo-radar") && (
            <>
              {/* Earth Limb */}
              <circle cx="250" cy="320" r="240" fill="url(#earthGrad)" opacity="0.85" />

              {/* LEO Tracks */}
              <path
                d="M 50 70 Q 250 25 450 70"
                fill="none"
                stroke="url(#orbitGrad)"
                strokeWidth="2.5"
              />

              <circle cx="200" cy="45" r="5" fill="#38bdf8" />
              <text x="200" y="32" fill="#38bdf8" fontSize="9" textAnchor="middle">
                Target Craft
              </text>

              <circle cx="280" cy="46" r="5" fill="#ff7722" />
              <text x="280" y="32" fill="#ff7722" fontSize="9" textAnchor="middle">
                Chaser Craft
              </text>

              <path d="M 205 45 L 275 46" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="240" y="65" fill="#f59e0b" fontSize="8" textAnchor="middle" fontFamily="monospace">
                Autonomous Phasing
              </text>
            </>
          )}
        </svg>

        {/* Current Active Step Float Banner */}
        <div className="absolute bottom-2 left-2 right-2 sm:left-4 sm:right-auto sm:max-w-xs p-2.5 rounded-lg bg-[#090d16]/90 backdrop-blur-md border border-white/10 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7722]" />
            <span>Step {activeStepIndex + 1}: {currentStep.label}</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{currentStep.sublabel}</p>
        </div>
      </div>

      {/* Flight Sequence Stepper Controls */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Sequence Milestones ({steps.length} Phases)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {steps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl text-left border transition-all text-xs flex items-start gap-2.5 ${
                  isSelected
                    ? "bg-[#ff7722]/10 border-[#ff7722] text-slate-100 shadow-md shadow-[#ff7722]/10"
                    : "bg-white/[0.02] border-white/5 hover:border-white/15 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {step.status === "completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : step.status === "in-progress" ? (
                    <Clock className="w-4 h-4 text-[#ff7722] animate-pulse" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-600" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-slate-200">{step.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{step.sublabel}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Conceptual Disclaimer Notes */}
      <p className="text-[11px] text-slate-400 italic bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
        * {mission.trajectory.conceptualNotes}
      </p>
    </div>
  );
}
