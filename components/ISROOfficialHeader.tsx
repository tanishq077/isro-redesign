"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram,
  ArrowRight
} from "lucide-react";

interface ISROOfficialHeaderProps {
  onOpenSearch?: () => void;
}

export const ISROOfficialHeader: React.FC<ISROOfficialHeaderProps> = ({ onOpenSearch }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<number>(100);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [searchInput, setSearchInput] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Apply font size adjustment
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenSearch) {
      onOpenSearch();
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navMenuItems = [
    {
      label: "Home",
      targetId: "top",
      dropdown: null,
    },
    {
      label: "About",
      targetId: "about",
      dropdown: [
        { label: "Engineering India's Access to Space", targetId: "about", desc: "Overview of sovereign launch & satellite capabilities" },
        { label: "Historical Milestones & Records", targetId: "about", desc: "430+ satellites launched across 5 decades" },
        { label: "Centres & Infrastructure", targetId: "technology", desc: "VSSC, URSC, SDSC SHAR & SAC nationwide" },
      ],
    },
    {
      label: "Activities",
      targetId: "missions",
      dropdown: [
        { label: "Featured Flagship Missions", targetId: "missions", desc: "Chandrayaan-3, Aditya-L1, SpaDeX & NISAR" },
        { label: "Space Technology R&D", targetId: "technology", desc: "Cryogenic CE-20, Semi-cryo & SAR Radar" },
        { label: "Space Science & Exploration", targetId: "exploration", desc: "From Lunar South Pole to Solar L1 Halo" },
      ],
    },
    {
      label: "Services",
      targetId: "services",
      dropdown: [
        { label: "Earth Observation & Geoportals", targetId: "earth-observation", desc: "Bhuvan, MOSDAC & Cartosat Remote Sensing" },
        { label: "Satellite Communications", targetId: "services", desc: "High-throughput GSAT transponder coverage" },
        { label: "Satellite Navigation (NavIC)", targetId: "services", desc: "Sovereign positioning, velocity & timing" },
      ],
    },
    {
      label: "Programmes",
      targetId: "gaganyaan",
      dropdown: [
        { label: "Gaganyaan Human Spaceflight", targetId: "gaganyaan", desc: "3 Indian astronauts to 400 km low Earth orbit" },
        { label: "Lunar & Solar Exploration", targetId: "exploration", desc: "Shiv Shakti point & Solar Coronal telemetry" },
        { label: "Future Horizons & Roadmap", targetId: "cta", desc: "Next-generation launch vehicles & space station" },
      ],
    },
    {
      label: "Resources",
      targetId: "earth-observation",
      dropdown: [
        { label: "Bhuvan Geospatial Portal", targetId: "earth-observation", desc: "Open satellite maps, disaster & crop analysis" },
        { label: "ISSDC Planetary Data Archive", targetId: "exploration", desc: "Public scientific instrument datasets" },
        { label: "Mission Dossiers & Payloads", targetId: "missions", desc: "Technical payload specifications & trajectories" },
      ],
    },
    {
      label: "Engagements",
      targetId: "updates",
      dropdown: [
        { label: "Latest News & Press Releases", targetId: "updates", desc: "Official Gazette and mission announcements" },
        { label: "Bharatiya Antariksh Hackathon", targetId: "updates", desc: "Academic & student innovation challenges" },
        { label: "Commercial & Private Industry", targetId: "technology", desc: "IN-SPACe & NSIL partnerships" },
      ],
    },
  ];

  return (
    <header className="w-full bg-[#151512] text-[#f3e9d5] select-none z-50 sticky top-0 shadow-xl border-b border-[#2e2d27]">
      {/* 1. TOP UTILITY BAR (Styled in Charcoal & Warm Cream) */}
      <div className="bg-[#11110e] border-b border-[#2e2d27] px-4 py-1.5 text-[11px] font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left utility links */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-[#a8a08e]">
            <button
              onClick={() => setLanguage("en")}
              className={`hover:text-[#c95a20] transition-colors ${language === "en" ? "font-bold text-[#c95a20] underline" : ""}`}
            >
              English
            </button>
            <span className="text-[#2e2d27]">|</span>
            <button
              onClick={() => setLanguage("hi")}
              className={`hover:text-[#c95a20] transition-colors font-hindi ${language === "hi" ? "font-bold text-[#c95a20] underline" : ""}`}
            >
              हिंदी
            </button>
            <span className="text-[#2e2d27] hidden sm:inline">|</span>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-[#f3e9d5] transition-colors hidden sm:inline">Sitemap</a>
            <span className="text-[#2e2d27] hidden sm:inline">|</span>
            <a href="#footer" onClick={(e) => scrollToSection(e, "footer")} className="hover:text-[#f3e9d5] transition-colors hidden sm:inline">Contact us</a>
            <span className="text-[#2e2d27] hidden md:inline">|</span>
            <a href="#footer" onClick={(e) => scrollToSection(e, "footer")} className="hover:text-[#f3e9d5] transition-colors hidden md:inline">Feedback</a>
            <span className="text-[#2e2d27] hidden md:inline">|</span>
            <a href="#updates" onClick={(e) => scrollToSection(e, "updates")} className="hover:text-[#f3e9d5] transition-colors hidden md:inline">RTI</a>
            <span className="text-[#2e2d27] hidden lg:inline">|</span>
            <a href="#updates" onClick={(e) => scrollToSection(e, "updates")} className="hover:text-[#f3e9d5] transition-colors hidden lg:inline">Career</a>
            <span className="text-[#2e2d27] hidden lg:inline">|</span>
            <a href="#updates" onClick={(e) => scrollToSection(e, "updates")} className="hover:text-[#f3e9d5] transition-colors hidden lg:inline">Tender</a>
            <span className="text-[#2e2d27] hidden lg:inline">|</span>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-[#f3e9d5] transition-colors hidden lg:inline">FAQ</a>
          </div>

          {/* Right utility links & Accessibility controls */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-[#a8a08e]">
            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 text-[#a8a08e]">
              <a href="https://facebook.com/ISRO" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#c95a20] transition-colors">
                <Facebook className="w-3 h-3 fill-current" />
              </a>
              <a href="https://twitter.com/isro" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="hover:text-[#c95a20] transition-colors">
                <Twitter className="w-3 h-3 fill-current" />
              </a>
              <a href="https://youtube.com/isro" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#c95a20] transition-colors">
                <Youtube className="w-3 h-3 fill-current" />
              </a>
              <a href="https://instagram.com/isro.dos" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#c95a20] transition-colors">
                <Instagram className="w-3 h-3" />
              </a>
            </div>

            <span className="text-[#2e2d27] hidden sm:inline">|</span>

            {/* Accessibility Font Size Controls */}
            <div className="flex items-center space-x-1.5 font-mono text-[10px]">
              <button
                onClick={() => setFontSize((f) => Math.min(f + 10, 130))}
                className="hover:text-[#c95a20] px-1 py-0.5 rounded hover:bg-[#282722] transition-colors font-bold text-[#f3e9d5]"
                title="Increase Font Size"
                aria-label="Increase font size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize(100)}
                className="hover:text-[#c95a20] px-1 py-0.5 rounded hover:bg-[#282722] transition-colors text-[#f3e9d5]"
                title="Reset Font Size"
                aria-label="Reset font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize((f) => Math.max(f - 10, 80))}
                className="hover:text-[#c95a20] px-1 py-0.5 rounded hover:bg-[#282722] transition-colors text-[#f3e9d5]"
                title="Decrease Font Size"
                aria-label="Decrease font size"
              >
                A-
              </button>
            </div>

            <span className="text-[#2e2d27] hidden sm:inline">|</span>

            <a
              href="#main-content"
              className="text-[#a8a08e] hover:text-[#f3e9d5] text-[10px] hidden sm:inline font-medium"
            >
              Skip to main content
            </a>
          </div>
        </div>
      </div>

      {/* 2. ISRO BRANDING HEADER (Charcoal Canvas matching the Palette) */}
      <div className="bg-[#1c1b17] px-4 py-3.5 sm:py-4 border-b border-[#2e2d27]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Authentic Vector ISRO Logo */}
          <a 
            href="#top" 
            onClick={(e) => scrollToSection(e, "top")}
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c95a20] rounded"
          >
            <div className="flex items-center gap-2.5">
              <svg className="w-11 h-11 sm:w-14 sm:h-14 drop-shadow-md" viewBox="0 0 100 100" fill="none">
                {/* Blue satellite solar crossbars */}
                <rect x="22" y="32" width="56" height="7" rx="2" fill="#00A2E8" />
                <line x1="22" y1="35.5" x2="78" y2="35.5" stroke="#003366" strokeWidth="1.2" />
                <line x1="36" y1="32" x2="36" y2="39" stroke="#003366" strokeWidth="1.2" />
                <line x1="50" y1="32" x2="50" y2="39" stroke="#003366" strokeWidth="1.2" />
                <line x1="64" y1="32" x2="64" y2="39" stroke="#003366" strokeWidth="1.2" />

                {/* Orange upward delta rocket launcher antenna */}
                <path d="M 50 6 L 64 68 L 50 60 L 36 68 Z" fill="#c95a20" />
                <polygon points="50,12 60,62 50,56" fill="#df6e35" />

                {/* Hindi & English ISRO Wordmark */}
                <text x="50" y="84" textAnchor="middle" fill="#c95a20" fontSize="17" fontWeight="bold" fontFamily="sans-serif">
                  इसरो
                </text>
                <text x="50" y="98" textAnchor="middle" fill="#00A2E8" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
                  isro
                </text>
              </svg>
            </div>
          </a>

          {/* Center: Official Multilingual Department of Space Masthead */}
          <div className="text-center flex-1 px-2">
            <div className="text-sm sm:text-base md:text-xl font-medium tracking-wide text-[#f3e9d5] font-hindi leading-snug">
              भारतीय अंतरिक्ष अनुसंधान संगठन, अंतरिक्ष विभाग
            </div>
            <div className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold tracking-tight text-white leading-tight mt-0.5">
              Indian Space Research Organisation, Department of Space
            </div>
            <div className="text-[10px] sm:text-xs text-[#a8a08e] tracking-wider uppercase font-medium mt-1">
              भारत सरकार / Government of India
            </div>
          </div>

          {/* Right: State Emblem of India (Gold Lion Capital) */}
          <div className="shrink-0 flex flex-col items-center">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-md text-[#E5B537]" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="22" r="14" fill="#E5B537" opacity="0.95" />
              <path d="M 32 36 Q 50 28 68 36 L 64 62 L 36 62 Z" fill="#E5B537" />
              <rect x="30" y="63" width="40" height="8" rx="2" fill="#E5B537" />
              <circle cx="50" cy="67" r="3.5" fill="#1c1b17" />
              <rect x="25" y="73" width="50" height="4" rx="1" fill="#E5B537" />
            </svg>
            <span className="text-[9px] font-hindi text-[#E5B537] font-bold tracking-widest uppercase mt-0.5">
              सत्यमेव जयते
            </span>
          </div>
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR with Dropdowns & Search */}
      <div ref={dropdownRef} className="bg-[#151512] border-b border-[#2e2d27] px-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Desktop Navigation Items with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Official ISRO Navigation">
            {navMenuItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  onClick={(e) => {
                    if (!item.dropdown) {
                      scrollToSection(e as any, item.targetId);
                    } else {
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    }
                  }}
                  onMouseEnter={() => {
                    if (item.dropdown) setActiveDropdown(item.label);
                  }}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup={!!item.dropdown}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-[#f3e9d5] hover:text-[#c95a20] hover:bg-[#1e1d19] transition-colors rounded-xs focus:outline-none focus:ring-1 focus:ring-[#c95a20] ${
                    activeDropdown === item.label ? "bg-[#1e1d19] text-[#c95a20]" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 text-[#a8a08e] transition-transform ${activeDropdown === item.label ? "rotate-180 text-[#c95a20]" : ""}`} />
                  )}
                </button>

                {/* Dropdown Menu Panel */}
                {item.dropdown && activeDropdown === item.label && (
                  <div 
                    className="absolute top-full left-0 w-72 bg-[#1e1d19] border border-[#2e2d27] shadow-2xl py-2 z-50 rounded-b-lg"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((sub, sidx) => (
                      <a
                        key={sidx}
                        href={`#${sub.targetId}`}
                        onClick={(e) => scrollToSection(e, sub.targetId)}
                        className="block px-4 py-2.5 text-xs text-[#f3e9d5] hover:text-[#c95a20] hover:bg-[#282722] transition-colors border-b border-[#2e2d27]/40 last:border-none group/sub"
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>{sub.label}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#c95a20]" />
                        </div>
                        <div className="text-[10px] text-[#a8a08e] font-sans mt-0.5">{sub.desc}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search Box on Right */}
          <div className="hidden sm:flex items-center">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                placeholder="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onClick={onOpenSearch}
                className="w-44 lg:w-56 h-7 px-3 pr-8 rounded-full bg-[#282722] text-[#f3e9d5] placeholder:text-[#a8a08e] text-xs font-sans border border-[#2e2d27] focus:outline-none focus:ring-1 focus:ring-[#c95a20]"
              />
              <button
                type="submit"
                onClick={onOpenSearch}
                aria-label="Submit search"
                className="absolute right-2.5 text-[#a8a08e] hover:text-[#c95a20] transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f3e9d5] hover:text-[#c95a20] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1e1d19] border-t border-[#2e2d27] px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="pb-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenSearch) onOpenSearch();
                }}
                className="w-full h-9 px-3 rounded bg-[#282722] border border-[#2e2d27] text-[#a8a08e] text-xs font-sans flex items-center justify-between"
              >
                <span>Search missions, rockets, centres...</span>
                <Search className="w-4 h-4 text-[#a8a08e]" />
              </button>
            </div>

            {/* Mobile Nav Accordion */}
            {navMenuItems.map((item) => (
              <div key={item.label} className="border-b border-[#2e2d27] pb-2">
                <div className="flex items-center justify-between py-1">
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => scrollToSection(e, item.targetId)}
                    className="text-xs font-bold text-[#f3e9d5] hover:text-[#c95a20]"
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                      className="p-1 text-[#a8a08e] hover:text-[#c95a20]"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.dropdown && mobileSubmenu === item.label && (
                  <div className="pl-3 py-1 space-y-1.5 bg-[#151512] rounded mt-1 border border-[#2e2d27]">
                    {item.dropdown.map((sub, sidx) => (
                      <a
                        key={sidx}
                        href={`#${sub.targetId}`}
                        onClick={(e) => scrollToSection(e, sub.targetId)}
                        className="block py-1 text-[11px] text-[#a8a08e] hover:text-[#c95a20]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. FLASH NEWS BAR (Matches exact dark ticker with Burnt Orange Indicator) */}
      <div className="bg-[#11110e] border-b border-[#2e2d27] px-4 py-2 text-xs font-sans flex items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center gap-2.5 overflow-hidden">
          <span className="text-[#c95a20] font-bold whitespace-nowrap shrink-0 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#c95a20] animate-pulse"></span>
            Flash News:
          </span>
          <div className="text-[#f3e9d5] font-medium truncate text-xs">
            <a
              href="#updates"
              onClick={(e) => scrollToSection(e, "updates")}
              className="hover:underline hover:text-[#c95a20] transition-colors"
            >
              ISRO launches Bharatiya Antariksh Hackathon (BAH) 2026 • Registration open for Indian students &amp; researchers • Chandrayaan-3 and Aditya-L1 open data archives released on ISSDC portal
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
