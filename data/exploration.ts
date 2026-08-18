export interface ExplorationDomain {
  id: string;
  title: string;
  shortTitle: string;
  categoryNumber: string;
  tagline: string;
  description: string;
  impactMetrics: { label: string; value: string }[];
  keyMissions: string[];
  capabilities: string[];
  officialPortal?: string;
  iconName: string;
  accentColor: string;
}

export const EXPLORATION_DOMAINS: ExplorationDomain[] = [
  {
    id: "earth-observation",
    title: "Earth Observation & Climate Science",
    shortTitle: "Earth Observation",
    categoryNumber: "01",
    tagline: "High-resolution optical, hyperspectral, and radar monitoring of planet Earth.",
    description:
      "ISRO operates one of the largest constellations of Earth observation satellites in the world (Cartosat, Resourcesat, Oceansat, RISAT, INSAT-3DR/3DS). These space assets provide continuous multispectral data for agriculture yield estimation, water resource management, coastal zone regulation, ocean state forecasting, and forestry canopy analysis.",
    impactMetrics: [
      { label: "Active EO Satellites", value: "15+ In-Orbit" },
      { label: "Ground Resolution", value: "Sub-meter Optical & Radar" },
      { label: "Open Data Access", value: "Bhuvan & MOSDAC Portals" }
    ],
    keyMissions: ["Cartosat-3", "EOS-04 (RISAT-1A)", "EOS-06 (Oceansat-3)", "INSAT-3DS", "NISAR (Upcoming)"],
    capabilities: [
      "Sub-meter stereo optical imaging for urban planning & cadastral mapping",
      "All-weather day/night Synthetic Aperture Radar (SAR) remote sensing",
      "Ocean colour monitoring, phytoplankton blooms, and potential fishing zones (PFZ)",
      "Real-time meteorological imaging from geostationary orbit every 15 minutes"
    ],
    officialPortal: "https://bhuvan.nrsc.gov.in",
    iconName: "Globe2",
    accentColor: "#0284C7"
  },
  {
    id: "satellite-navigation",
    title: "Satellite Navigation & Augmentation",
    shortTitle: "Navigation (NavIC)",
    categoryNumber: "02",
    tagline: "India's sovereign regional navigation satellite constellation and civil aviation augmentation.",
    description:
      "NavIC (Navigation with Indian Constellation) is India's independent regional satellite navigation system designed to provide accurate position, velocity, and timing (PVT) service over India and extending 1,500 km around its borders with L5, S-band, and L1 civilian interoperable signals. GAGAN augments GPS over Indian airspace for precision civil aviation approaches.",
    impactMetrics: [
      { label: "Service Area", value: "India + 1,500 km Extended" },
      { label: "Positioning Accuracy", value: "< 10 meters (Standard)" },
      { label: "Atomic Clocks", value: "Space-qualified Rubidium & Optically Pumped" }
    ],
    keyMissions: ["NavIC Constellation (IRNSS-1 series)", "NVS-01 (Next-Gen NavIC)", "GAGAN (Aviation SBAS)"],
    capabilities: [
      "Standard Positioning Service (SPS) for civilian vehicular tracking and smartphones",
      "Restricted Service (RS) for strategic and emergency responders",
      "Emergency warning alerts broadcast directly to marine fishermen beyond cellular range",
      "APV-1 precision approach certification by DGCA for civil airliners across Indian airports"
    ],
    officialPortal: "https://www.isro.gov.in/NavIC.html",
    iconName: "Navigation",
    accentColor: "#F59E0B"
  },
  {
    id: "deep-space-science",
    title: "Planetary Science & Space Astronomy",
    shortTitle: "Space Science",
    categoryNumber: "03",
    tagline: "Probing cosmic origins, planetary evolution, and extreme high-energy astrophysics.",
    description:
      "From uncovering water molecules on the Moon (Chandrayaan-1) to placing an orbiter around Mars on the first attempt (MOM), operating India's first multi-wavelength space observatory (AstroSat), and stationing Aditya-L1 at the Sun-Earth L1 Lagrangian point, ISRO's space science missions expand fundamental scientific frontiers.",
    impactMetrics: [
      { label: "Interplanetary Targets", value: "Moon, Mars, Sun-Earth L1" },
      { label: "Deep Space Network", value: "IDSN 32-meter & 18-meter Antennas" },
      { label: "Science Archive", value: "ISSDC Open Science Data" }
    ],
    keyMissions: ["Chandrayaan-3", "Aditya-L1", "AstroSat", "XPoSat", "Mangalyaan"],
    capabilities: [
      "In-situ lunar surface seismology, thermophysics, and mineral spectroscopy",
      "Coronal mass ejection tracking and solar flare dynamics from L1 halo orbit",
      "Simultaneous UV, optical, and hard/soft X-ray multi-wavelength astronomical observations",
      "Deep space tracking and telemetry via Indian Deep Space Network (IDSN) at Byalalu"
    ],
    officialPortal: "https://www.issdc.gov.in",
    iconName: "Sparkles",
    accentColor: "#FF7722"
  },
  {
    id: "disaster-management",
    title: "Disaster Management Support (DMSP)",
    shortTitle: "Disaster Support",
    categoryNumber: "04",
    tagline: "Rapid space-based disaster mapping and emergency decision support system.",
    description:
      "ISRO's Disaster Management Support Programme (DMSP) harnesses near-real-time satellite datasets, aerial survey sensors, and communication nodes to support national and state disaster authorities during floods, cyclones, landslides, forest fires, earthquakes, and droughts.",
    impactMetrics: [
      { label: "Disaster Response Time", value: "Near Real-Time (< 4 hrs)" },
      { label: "Cyclone Tracking", value: "Continuous 15-min Geostationary Loops" },
      { label: "Global Charter Member", value: "International Charter Space & Major Disasters" }
    ],
    keyMissions: ["Disaster Management Support (NDEM)", "MOSDAC Cyclone Tracking", "Bhuvan Geoportal"],
    capabilities: [
      "Automated near-real-time flood inundation maps generated from SAR radar imagery",
      "High-precision cyclone landfall trajectory, storm surge, and intensity prediction",
      "Daily national forest fire hotspot detection using thermal infrared satellite channels",
      "Satellite-enabled emergency communications network deployed to remote crisis areas"
    ],
    officialPortal: "https://ndem.nrsc.gov.in",
    iconName: "ShieldAlert",
    accentColor: "#EF4444"
  },
  {
    id: "human-spaceflight",
    title: "Human Spaceflight & Microgravity",
    shortTitle: "Human Spaceflight",
    categoryNumber: "05",
    tagline: "Sovereign capability to sustain human life and scientific experiments in Low Earth Orbit.",
    description:
      "Anchored by the Human Space Flight Centre (HSFC) in Bengaluru, India is developing sovereign environmental control and life support systems, astronaut training facilities, human-rated launch vehicles (HLVM3), space suits, and orbital crew modules to establish sustained human presence in space and the future Bharatiya Antariksh Station.",
    impactMetrics: [
      { label: "Crew Capacity", value: "3 Astronauts" },
      { label: "Nominal Mission Altitude", value: "400 km LEO" },
      { label: "Future Space Station", value: "Bharatiya Antariksh Station (BAS)" }
    ],
    keyMissions: ["Gaganyaan TV-D1", "HLVM3 In-Orbit Demonstrations", "Bharatiya Antariksh Station"],
    capabilities: [
      "Indigenous regenerative Environmental Control & Life Support Systems (ECLSS)",
      "High-reliability multi-redundant Crew Escape System with millisecond reaction times",
      "Astronaut Training Facility (ATF) with centrifuge, flight simulators, and survival training",
      "Microgravity biological experiments and materials science research in space"
    ],
    officialPortal: "https://www.isro.gov.in/HumanSpaceflight.html",
    iconName: "UserCheck",
    accentColor: "#10B981"
  },
  {
    id: "satellite-communication",
    title: "Satellite Communication & Societal Applications",
    shortTitle: "SatCom & Society",
    categoryNumber: "06",
    tagline: "Connecting remote regions, enabling telemedicine, tele-education, and digital infrastructure.",
    description:
      "ISRO's extensive fleet of GSAT and INSAT communication satellites operating across C, Ext-C, Ku, and Ka bands powers national telecommunications, broadband connectivity to island and mountainous regions, DTH television broadcasting, rural banking networks, and disaster emergency links.",
    impactMetrics: [
      { label: "Transponder Capacity", value: "Hundreds of C/Ku/Ka-band Transponders" },
      { label: "High-Throughput Fleet", value: "GSAT-11, GSAT-29, GSAT-24" },
      { label: "Community Reach", value: "Gram Panchayat & Island Connectivity" }
    ],
    keyMissions: ["GSAT-24", "GSAT-11 (Heavy HTS)", "GSAT-30", "GSAT-7A"],
    capabilities: [
      "High Throughput Satellites (HTS) delivering multi-gigabit broadband to remote areas",
      "Telemedicine nodes linking rural medical centers with premier apex super-specialty hospitals",
      "Tele-education networks bridging classroom divide in remote state schools",
      "Strategic defense communication networks with high-encryption secure links"
    ],
    officialPortal: "https://www.isro.gov.in/CommunicationSatellites.html",
    iconName: "Radio",
    accentColor: "#8B5CF6"
  }
];
