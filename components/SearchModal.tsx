"use client";

import React, { useState, useEffect } from "react";
import { Search, X, Rocket, Compass, Building2, ExternalLink, ArrowRight } from "lucide-react";
import { MISSIONS_DATA } from "@/data/missions";
import { LAUNCH_VEHICLES_DATA } from "@/data/launchVehicles";
import { ISRO_CENTRES_DATA } from "@/data/centres";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMission?: (missionId: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectMission }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredMissions = MISSIONS_DATA.filter(
    (m) =>
      m.name.toLowerCase().includes(normalizedQuery) ||
      m.categoryLabel.toLowerCase().includes(normalizedQuery) ||
      m.destination.toLowerCase().includes(normalizedQuery) ||
      m.shortDescription.toLowerCase().includes(normalizedQuery)
  );

  const filteredVehicles = LAUNCH_VEHICLES_DATA.filter(
    (v) =>
      v.name.toLowerCase().includes(normalizedQuery) ||
      v.codeName.toLowerCase().includes(normalizedQuery) ||
      v.role.toLowerCase().includes(normalizedQuery)
  );

  const filteredCentres = ISRO_CENTRES_DATA.filter(
    (c) =>
      c.name.toLowerCase().includes(normalizedQuery) ||
      c.shortCode.toLowerCase().includes(normalizedQuery) ||
      c.city.toLowerCase().includes(normalizedQuery) ||
      c.role.toLowerCase().includes(normalizedQuery)
  );

  const totalResults =
    filteredMissions.length + filteredVehicles.length + filteredCentres.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#faf4eb] border border-[#d8cca8] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#d8cca8] gap-3 bg-[#ece2cd]">
          <Search className="w-4 h-4 text-[#c95a20] shrink-0" aria-hidden="true" />
          <input
            id="search-modal-title"
            type="text"
            placeholder="Search missions (Chandrayaan-3, Aditya-L1), rockets (LVM3, PSLV), centres, or portals..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none text-[#151512] placeholder:text-[#5c584e] text-xs sm:text-sm font-mono focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[11px] font-mono text-[#5c584e] hover:text-[#151512] px-2 py-0.5 bg-[#f3e9d5] rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1 text-[#5c584e] hover:text-[#151512] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-5 flex-1">
          {normalizedQuery && totalResults === 0 && (
            <div className="text-center py-12 text-[#5c584e] font-mono text-xs">
              <p>No verified ISRO records found matching &ldquo;{query}&rdquo;</p>
              <p className="text-[#a8a08e] mt-1">
                Try searching for &ldquo;Chandrayaan&rdquo;, &ldquo;Aditya&rdquo;, &ldquo;LVM3&rdquo;, &ldquo;VSSC&rdquo;, or &ldquo;Bhuvan&rdquo;.
              </p>
            </div>
          )}

          {/* Missions Category */}
          {filteredMissions.length > 0 && (
            <div>
              <div className="text-[11px] font-mono font-bold text-[#c95a20] uppercase tracking-wider mb-2 px-1">
                Flagship Missions ({filteredMissions.length})
              </div>
              <div className="space-y-1">
                {filteredMissions.map((mission) => (
                  <button
                    key={mission.id}
                    onClick={() => {
                      if (onSelectMission) onSelectMission(mission.id);
                      onClose();
                      const el = document.getElementById("missions");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full text-left p-3 rounded bg-[#f3e9d5] hover:bg-[#ece2cd] border border-[#d8cca8] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#151512] group-hover:text-[#c95a20] transition-colors font-mono">
                          {mission.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#ece2cd] text-[#5c584e]">
                          {mission.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-[#5c584e] line-clamp-1 mt-0.5 font-sans">{mission.tagline}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5c584e] group-hover:text-[#c95a20] transition-colors shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Launch Vehicles Category */}
          {filteredVehicles.length > 0 && (
            <div>
              <div className="text-[11px] font-mono font-bold text-[#151512] uppercase tracking-wider mb-2 px-1">
                Launch Fleet ({filteredVehicles.length})
              </div>
              <div className="space-y-1">
                {filteredVehicles.map((vehicle) => (
                  <a
                    key={vehicle.id}
                    href="#technology"
                    onClick={onClose}
                    className="w-full text-left p-3 rounded bg-[#f3e9d5] hover:bg-[#ece2cd] border border-[#d8cca8] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#151512] group-hover:text-[#c95a20] transition-colors font-mono">
                          {vehicle.name}
                        </span>
                        <span className="text-xs text-[#5c584e] font-mono">{vehicle.codeName}</span>
                      </div>
                      <p className="text-xs text-[#5c584e] line-clamp-1 mt-0.5 font-sans">{vehicle.role}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5c584e] group-hover:text-[#c95a20] transition-colors shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Centres Category */}
          {filteredCentres.length > 0 && (
            <div>
              <div className="text-[11px] font-mono font-bold text-[#151512] uppercase tracking-wider mb-2 px-1">
                Centres &amp; Units ({filteredCentres.length})
              </div>
              <div className="space-y-1">
                {filteredCentres.slice(0, 5).map((centre) => (
                  <a
                    key={centre.id}
                    href={centre.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-left p-3 rounded bg-[#f3e9d5] hover:bg-[#ece2cd] border border-[#d8cca8] transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#151512] group-hover:text-[#c95a20] transition-colors font-mono">
                          {centre.name} ({centre.shortCode})
                        </span>
                        <span className="text-[11px] text-[#5c584e] font-mono">
                          {centre.city}, {centre.state}
                        </span>
                      </div>
                      <p className="text-xs text-[#5c584e] line-clamp-1 mt-0.5 font-sans">{centre.role}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#5c584e] group-hover:text-[#c95a20] transition-colors shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#ece2cd] border-t border-[#d8cca8] flex items-center justify-between text-[11px] font-mono text-[#5c584e]">
          <span>Verified Department of Space Records</span>
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-[#f3e9d5] text-[10px] text-[#151512] font-bold">ESC</span>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
