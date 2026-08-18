"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#capabilities" },
    { label: "TECHNOLOGY", href: "#technology" },
    { label: "MISSIONS", href: "#missions" },
    { label: "GAGANYAAN", href: "#gaganyaan" },
    { label: "UPDATES", href: "#updates" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Editorial Hairline Banner */}
      <div className="bg-[#ece2cd] border-b border-[#d8cca8] px-4 py-1 text-[10px] text-[#5c584e] font-mono tracking-widest flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c95a20]"></span>
          <span className="font-bold text-[#151512]">INDIAN SPACE RESEARCH ORGANISATION</span>
          <span className="text-[#c2b48e]">•</span>
          <span>DEPARTMENT OF SPACE, GOVT. OF INDIA</span>
        </div>
        <div className="mx-auto sm:mx-0 font-medium">
          INDEPENDENT EDITORIAL DIGITAL CONCEPT • ESTD. 1969
        </div>
        <div className="hidden md:flex items-center gap-2 text-[#5c584e]">
          <span>LAT 13.033° N</span>
          <span>LON 77.564° E</span>
        </div>
      </div>

      {/* Main Editorial Navbar */}
      <nav
        className={`transition-all duration-300 border-b border-[#d8cca8] ${
          scrolled
            ? "bg-[#f3e9d5]/95 backdrop-blur-md py-3 shadow-xs"
            : "bg-[#f3e9d5] py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: ISRO Branding with Concentric Orbital Rings */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c95a20] rounded p-1"
            >
              {/* Concentric Orbital Circle Logo Motif */}
              <div className="relative w-9 h-9 rounded-full bg-[#151512] flex items-center justify-center border border-[#151512] group-hover:bg-[#c95a20] transition-colors shadow-xs">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#f3e9d5]/40 animate-spin" style={{ animationDuration: '24s' }}></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#c95a20] group-hover:bg-[#f3e9d5] transition-colors"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tight text-[#151512] uppercase font-mono">
                  ISRO
                </span>
                <span className="text-[9px] font-mono text-[#5c584e] tracking-widest uppercase">
                  Space Programme
                </span>
              </div>
            </Link>

            {/* Middle: Editorial Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-[11px] font-mono font-bold tracking-widest text-[#151512] uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#c95a20] transition-colors py-1 relative focus:outline-none focus-visible:text-[#c95a20]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: Search & Orange Pill Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#ece2cd] hover:bg-[#e5dac4] border border-[#d8cca8] rounded text-xs text-[#151512] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c95a20]"
                aria-label="Search directory"
              >
                <Search className="w-3.5 h-3.5 text-[#c95a20]" />
                <span className="hidden sm:inline font-mono text-[11px]">Index Search</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 bg-[#f3e9d5] border border-[#d8cca8] rounded text-[9px] font-mono text-[#5c584e] font-bold">
                  ⌘K
                </kbd>
              </button>

              <a
                href="#missions"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#c95a20] hover:bg-[#b34d16] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full transition-colors shadow-xs"
              >
                <span>EXPLORE MISSIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#151512] hover:text-[#c95a20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c95a20] rounded"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f3e9d5] border-t border-[#d8cca8] mt-2 px-4 pt-3 pb-6 space-y-2">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#151512] hover:text-[#c95a20] hover:bg-[#ece2cd] rounded flex items-center justify-between transition-colors"
                >
                  <span>{link.label}</span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#missions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2.5 bg-[#c95a20] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full"
                >
                  EXPLORE MISSIONS
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
