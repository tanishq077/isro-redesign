export interface VehicleStage {
  stageNumber: number;
  name: string;
  propellantType: "Solid" | "Liquid" | "Cryogenic" | "Bi-propellant";
  propellantName: string;
  engineMotor: string;
  thrustVacuum?: string;
  burnTime?: string;
  description: string;
}

export interface LaunchVehicle {
  id: string;
  name: string;
  codeName: string;
  role: string;
  status: "Operational" | "Human Rating in Progress";
  height: string;
  diameter: string;
  liftOffMass: string;
  payloadToLEO: string;
  payloadToGTO: string;
  numberOfStages: number;
  successRate: string;
  totalLaunches: string;
  overview: string;
  keyCapability: string;
  notableMissions: string[];
  stages: VehicleStage[];
  specs: { label: string; value: string }[];
  accentColor: string;
  imageUrl: string;
}

export const LAUNCH_VEHICLES_DATA: LaunchVehicle[] = [
  {
    id: "lvm3",
    name: "LVM3",
    codeName: "Launch Vehicle Mark-III (Heavy Lifter)",
    role: "Heavy-Lift Satellite & Human Spaceflight Launcher",
    status: "Operational",
    height: "43.5 m",
    diameter: "4.0 m (Core) / 5.0 m (Fairing)",
    liftOffMass: "640 Tonnes",
    payloadToLEO: "8,000 kg",
    payloadToGTO: "4,000 kg",
    numberOfStages: 3,
    successRate: "100% (Consecutive Successes)",
    totalLaunches: "7 Successful Flights",
    imageUrl: "https://images.unsplash.com/photo-1517976487504-59a1a0840b00?auto=format&fit=crop&w=1600&q=80",
    overview:
      "LVM3 is India's most powerful launch vehicle, engineered to loft heavy communication satellites, deep space planetary probes, and the Gaganyaan crewed orbital module. Powered by two massive solid strap-ons, a twin-engine liquid core, and an indigenous high-thrust C25 cryogenic upper stage, LVM3 provides sovereign heavy-lift access to space.",
    keyCapability: "Primary launch vehicle for Chandrayaan-3 lunar landing and human-rated for Gaganyaan (HLVM3).",
    notableMissions: [
      "Chandrayaan-3 (LVM3 M4 - Lunar South Pole Landing Mission)",
      "Chandrayaan-2 (LVM3 M1 - Lunar Orbiter & Exploration)",
      "OneWeb India-1 & India-2 (72 Commercial Broadband Satellites in 2 Dedicated Launches)",
      "TV-D1 (HLVM3 Flight Test Demonstration for Crew Escape System)",
      "CARE (Crew Module Atmospheric Re-entry Experiment)"
    ],
    stages: [
      {
        stageNumber: 1,
        name: "S200 Solid Rocket Boosters (2x)",
        propellantType: "Solid",
        propellantName: "HTPB (Hydroxyl-terminated polybutadiene)",
        engineMotor: "S200 Solid Motor (Segmented)",
        thrustVacuum: "2 x 5,150 kN (Peak)",
        burnTime: "~130 seconds",
        description: "Two large solid boosters (each containing 205 tonnes of solid propellant) mounted on the core to provide massive liftoff thrust from the pad."
      },
      {
        stageNumber: 2,
        name: "L110 Liquid Core Stage",
        propellantType: "Liquid",
        propellantName: "UH25 (UDMH + Hydrazine Hydrate) & N2O4",
        engineMotor: "Twin Vikas Liquid Engines",
        thrustVacuum: "1,598 kN (Combined)",
        burnTime: "~200 seconds",
        description: "Twin liquid engines ignited ~114 seconds after liftoff, operating in parallel with the solid boosters before stage separation."
      },
      {
        stageNumber: 3,
        name: "C25 Cryogenic Upper Stage",
        propellantType: "Cryogenic",
        propellantName: "Liquid Hydrogen (LH2) & Liquid Oxygen (LOX)",
        engineMotor: "CE-20 Cryogenic Engine",
        thrustVacuum: "200 kN (Vacuum)",
        burnTime: "~580 seconds",
        description: "High-energy indigenous cryogenic engine operating at extreme temperatures (-253°C LH2), human-rated for Gaganyaan."
      }
    ],
    specs: [
      { label: "Vehicle Height", value: "43.5 m" },
      { label: "Lift-off Mass", value: "640 Tonnes" },
      { label: "Payload to LEO", value: "8,000 kg" },
      { label: "Payload to GTO", value: "4,000 kg" },
      { label: "Core Diameter", value: "4.0 m" },
      { label: "Fairing Diameter", value: "5.0 m Composite" }
    ],
    accentColor: "#E65C00"
  },
  {
    id: "pslv",
    name: "PSLV",
    tagline: "The Workhorse of ISRO — Polar Satellite Launch Vehicle",
    codeName: "Polar Satellite Launch Vehicle (Workhorse)",
    role: "Sun-Synchronous & Multi-Orbit Launch System",
    status: "Operational",
    height: "44.4 m",
    diameter: "2.8 m",
    liftOffMass: "320 Tonnes (XL Configuration)",
    payloadToLEO: "3,800 kg",
    payloadToGTO: "1,750 kg (SSO: 1,750 kg to 600 km)",
    numberOfStages: 4,
    successRate: "> 95% (58 Successful Flights)",
    totalLaunches: "60 Flights (PSLV-C58 latest)",
    imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1600&q=80",
    overview:
      "PSLV is globally renowned for its exceptional reliability and versatile multi-satellite dispensing capabilities. With an alternating four-stage architecture (Solid-Liquid-Solid-Liquid), it has launched historic interplanetary missions including Chandrayaan-1, Mars Orbiter Mission (MOM), Aditya-L1, AstroSat, and set a world record by launching 104 satellites on a single flight (PSLV-C37).",
    keyCapability: "Launched Chandrayaan-1, Mars Orbiter Mission, Aditya-L1, and holds world record for 104 satellites on a single launch.",
    notableMissions: [
      "PSLV-C37 (Historic World Record: 104 Satellites Deployed in a Single Flight)",
      "PSLV-C57 (Aditya-L1 Solar Observatory Insertion)",
      "PSLV-C25 (Mars Orbiter Mission / Mangalyaan)",
      "PSLV-C11 (Chandrayaan-1 Lunar Discovery Mission)",
      "PSLV-C58 (XPoSat X-ray Polarimeter Satellite + POEM-3 Platform)"
    ],
    stages: [
      {
        stageNumber: 1,
        name: "PS1 Solid Core + Strap-ons",
        propellantType: "Solid",
        propellantName: "HTPB based Solid Propellant (138 Tonnes core)",
        engineMotor: "S139 Solid Motor + up to 6 Solid Strap-ons (XL/DL/QL)",
        thrustVacuum: "4,800 kN",
        burnTime: "~105 seconds",
        description: "One of the largest solid rocket boosters in the world, augmented by up to 6 ground-lit and air-lit strap-ons."
      },
      {
        stageNumber: 2,
        name: "PS2 Liquid Stage",
        propellantType: "Liquid",
        propellantName: "UH25 & N2O4 (41 Tonnes)",
        engineMotor: "Vikas Liquid Engine (Regeneratively Cooled)",
        thrustVacuum: "800 kN",
        burnTime: "~150 seconds",
        description: "Flight-proven liquid Vikas engine providing high-efficiency thrust during atmospheric ascent."
      },
      {
        stageNumber: 3,
        name: "PS3 Solid Stage",
        propellantType: "Solid",
        propellantName: "HTPB Solid Propellant (7.6 Tonnes)",
        engineMotor: "High-Performance Solid Motor (Composite Case)",
        thrustVacuum: "240 kN",
        burnTime: "~112 seconds",
        description: "Lightweight carbon-phenolic composite motor case providing upper-stage velocity boost."
      },
      {
        stageNumber: 4,
        name: "PS4 Liquid Upper Stage",
        propellantType: "Bi-propellant",
        propellantName: "MMH + MON3 (2.5 Tonnes)",
        engineMotor: "Twin Regeneratively Cooled Liquid Engines",
        thrustVacuum: "2 x 7.3 kN",
        burnTime: "~525 seconds (Restartable)",
        description: "Multiple restart capability for precision multi-orbit satellite injection and POEM orbital platform operations."
      }
    ],
    specs: [
      { label: "Vehicle Height", value: "44.4 m" },
      { label: "Lift-off Mass", value: "320 Tonnes (XL)" },
      { label: "Payload to SSO", value: "1,750 kg (600 km)" },
      { label: "Payload to Sub-GTO", value: "1,425 kg" },
      { label: "Total Flights", value: "60 Flights" },
      { label: "Variants", value: "PSLV-XL, DL, QL, Core Alone (CA)" }
    ],
    accentColor: "#E65C00"
  },
  {
    id: "gslv",
    name: "GSLV",
    codeName: "Geosynchronous Satellite Launch Vehicle (Mk II)",
    role: "Cryogenic Communications & Navigation Launcher",
    status: "Operational",
    height: "51.7 m",
    diameter: "2.8 m",
    liftOffMass: "420 Tonnes",
    payloadToLEO: "5,000 kg",
    payloadToGTO: "2,250 kg",
    numberOfStages: 3,
    successRate: "> 85% Operational Success",
    totalLaunches: "16 Flights",
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80",
    overview:
      "GSLV Mk II is India's three-stage launcher equipped with four liquid strap-on boosters (L40 Vikas engines), a solid core stage, a liquid second stage, and the indigenous Cryogenic Upper Stage (CUS / CE-7.5). It is the dedicated launch system for INSAT/GSAT communication satellites, meteorological spacecraft (INSAT-3DS), and NavIC navigation satellites.",
    keyCapability: "Primary launcher for NavIC navigation satellites, NISAR radar observatory, and INSAT-3DS meteorological satellite.",
    notableMissions: [
      "GSLV-F14 (INSAT-3DS Advanced Meteorological Satellite)",
      "GSLV-F12 (NVS-01 Next-Generation NavIC Satellite)",
      "GSLV-F10 (GISAT-1 / EOS-03 Earth Observation)",
      "GSLV-F08 (GSAT-6A High-Power S-Band Communication Satellite)"
    ],
    stages: [
      {
        stageNumber: 1,
        name: "GS1 Core + 4x L40 Liquid Strap-ons",
        propellantType: "Solid",
        propellantName: "HTPB core + UH25/N2O4 in strap-ons",
        engineMotor: "S139 Solid Core + 4 Vikas Liquid Engines",
        thrustVacuum: "4,700 kN Core + 4 x 760 kN",
        burnTime: "~106 seconds (core) / 150 seconds (strap-ons)",
        description: "Solid core augmented by four hypergolic liquid boosters providing massive initial thrust."
      },
      {
        stageNumber: 2,
        name: "GS2 Liquid Stage",
        propellantType: "Liquid",
        propellantName: "UH25 & N2O4 (39.5 Tonnes)",
        engineMotor: "High-thrust Vikas Liquid Engine",
        thrustVacuum: "800 kN",
        burnTime: "~140 seconds",
        description: "Liquid propulsion stage delivering the vehicle into the upper atmosphere."
      },
      {
        stageNumber: 3,
        name: "Cryogenic Upper Stage (CUS)",
        propellantType: "Cryogenic",
        propellantName: "Liquid Hydrogen (LH2) & Liquid Oxygen (LOX)",
        engineMotor: "CE-7.5 Indigenous Cryogenic Engine (Staged Combustion)",
        thrustVacuum: "75 kN (Vacuum)",
        burnTime: "~720 seconds",
        description: "Indigenous staged-combustion cryogenic engine developed by LPSC, providing high specific impulse for GTO insertion."
      }
    ],
    specs: [
      { label: "Vehicle Height", value: "51.7 m" },
      { label: "Lift-off Mass", value: "420 Tonnes" },
      { label: "Payload to GTO", value: "2,250 kg" },
      { label: "Payload to LEO", value: "5,000 kg" },
      { label: "Upper Stage", value: "Indigenous CE-7.5 Cryogenic" }
    ],
    accentColor: "#E65C00"
  },
  {
    id: "sslv",
    name: "SSLV",
    codeName: "Small Satellite Launch Vehicle",
    role: "On-Demand Launch-on-Demand Small Satellites",
    status: "Operational",
    height: "34.0 m",
    diameter: "2.0 m",
    liftOffMass: "120 Tonnes",
    payloadToLEO: "500 kg to 500 km Planar Orbit (300 kg to SSO)",
    payloadToGTO: "N/A (Dedicated Low Earth Orbit Launcher)",
    numberOfStages: 3,
    successRate: "Operational (SSLV-D2 & SSLV-D3 successful)",
    totalLaunches: "3 Developmental Flights",
    imageUrl: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&w=1600&q=80",
    overview:
      "SSLV is ISRO's rapid-turnaround, low-cost launcher designed for the booming commercial small satellite market. Configured with three all-solid stages and a liquid Velocity Trimming Module (VTM) as a terminal stage, SSLV can be integrated and launched within 72 hours by a small team, enabling responsive access to low Earth orbits.",
    keyCapability: "Turnaround time of under 72 hours for commercial constellations and Earth observation cube/micro-satellites.",
    notableMissions: [
      "SSLV-D3 (EOS-08 Earth Observation Satellite & SR-0 DEMOSAT)",
      "SSLV-D2 (EOS-07, Janus-1, and AzaadiSAT-2 Satellites Injected into 450 km Circular Orbit)",
      "SSLV-D1 (Maiden Test Flight)"
    ],
    stages: [
      {
        stageNumber: 1,
        name: "SS1 Solid Stage",
        propellantType: "Solid",
        propellantName: "HTPB based Solid Propellant (87 Tonnes)",
        engineMotor: "High-performance solid motor with flexible nozzle",
        thrustVacuum: "2,600 kN",
        burnTime: "~120 seconds",
        description: "Monolithic solid motor providing high acceleration off the launch pad."
      },
      {
        stageNumber: 2,
        name: "SS2 Solid Stage",
        propellantType: "Solid",
        propellantName: "HTPB Solid Propellant (7.7 Tonnes)",
        engineMotor: "Optimized solid booster with carbon-epoxy case",
        thrustVacuum: "250 kN",
        burnTime: "~110 seconds",
        description: "Upper solid stage operating in vacuum conditions."
      },
      {
        stageNumber: 3,
        name: "SS3 Solid Stage",
        propellantType: "Solid",
        propellantName: "HTPB Solid Propellant (4.5 Tonnes)",
        engineMotor: "Composite solid motor",
        thrustVacuum: "160 kN",
        burnTime: "~105 seconds",
        description: "Final solid burnout propelling the payload to orbital velocity."
      }
    ],
    specs: [
      { label: "Vehicle Height", value: "34.0 m" },
      { label: "Lift-off Mass", value: "120 Tonnes" },
      { label: "Payload to LEO", value: "500 kg (500 km)" },
      { label: "Turnaround Time", value: "< 72 Hours" },
      { label: "Terminal Stage", value: "Liquid Velocity Trimming Module (VTM)" }
    ],
    accentColor: "#E65C00"
  }
];
