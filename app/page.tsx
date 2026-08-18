"use client";

import React, { useState } from "react";
import { ISROOfficialHeader } from "@/components/ISROOfficialHeader";
import SearchModal from "@/components/SearchModal";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { SpaceTechSection } from "@/components/SpaceTechSection";
import { FeaturedMissions } from "@/components/FeaturedMissions";
import { EarthObservationSection } from "@/components/EarthObservationSection";
import { SpaceExplorationSection } from "@/components/SpaceExplorationSection";
import { GaganyaanSection } from "@/components/GaganyaanSection";
import { LatestUpdates } from "@/components/LatestUpdates";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f3e9d5] text-[#151512] overflow-x-hidden selection:bg-[#c95a20] selection:text-white">
      {/* Global Command Palette / Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* 1. Official ISRO Header with Utility Bar, Masthead, Emblem, Nav & Flash News */}
      <ISROOfficialHeader onOpenSearch={() => setSearchOpen(true)} />

      {/* 2. Premium Editorial Layout Flow with Strict Alternating Light/Dark Contrast */}
      <main id="main-content" className="flex-1">
        {/* 2.1 Hero: CREAM [Dominant Real ISRO Rocket Launch Photograph + "INDIA BEYOND EARTH."] */}
        <Hero />

        {/* 2.2 About ISRO: DARK CHARCOAL [Planetary Photograph + "ENGINEERING INDIA'S ACCESS TO SPACE" + Stats] */}
        <AboutSection />

        {/* 2.3 What ISRO Does: CREAM [Horizontal Editorial Capability Strip with Thin Vertical Dividers] */}
        <CapabilitiesSection />

        {/* 2.4 Space Technology: DARK CHARCOAL [Technology Pillars + Real Cleanroom Rocket Engine Photograph] */}
        <SpaceTechSection />

        {/* 2.5 Featured Missions: CREAM [Horizontal Photographic Gallery + Framer Motion Spotlight] */}
        <FeaturedMissions />

        {/* 2.6 Earth Observation: DARK CHARCOAL [Real Remote Sensing Imagery + "SEEING INDIA FROM SPACE"] */}
        <EarthObservationSection />

        {/* 2.7 Space Exploration: CREAM [Real Lunar & Solar Imagery + "FROM THE MOON TO THE SUN"] */}
        <SpaceExplorationSection />

        {/* 2.8 Gaganyaan: DARK CHARCOAL [Real Orbital Spacecraft Imagery + "THE NEXT GIANT LEAP"] */}
        <GaganyaanSection />

        {/* 2.9 Latest Updates: DARK CHARCOAL [Gazette Communiqué Grid] */}
        <LatestUpdates />

        {/* 2.10 Final CTA: BURNT ORANGE [Single Strong Banner "WHERE DOES INDIA GO NEXT?"] */}
        <FinalCTASection />
      </main>

      {/* 3. Footer: DARK CHARCOAL [Directory & National Concept Disclaimer] */}
      <Footer />
    </div>
  );
}
