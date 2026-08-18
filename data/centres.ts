export interface ISROCentre {
  id: string;
  name: string;
  shortCode: string;
  city: string;
  state: string;
  category: "launch-propulsion" | "satellite-systems" | "applications-tracking" | "human-research" | "commercial-ecosystem";
  categoryLabel: string;
  role: string;
  description: string;
  keySpecialization: string[];
  officialUrl: string;
  imageUrl: string;
}

export const ISRO_CENTRES_DATA: ISROCentre[] = [
  {
    id: "vssc",
    name: "Vikram Sarabhai Space Centre",
    shortCode: "VSSC",
    city: "Thiruvananthapuram",
    state: "Kerala",
    category: "launch-propulsion",
    categoryLabel: "Launch Vehicles & Aerodynamics",
    role: "Lead centre for launch vehicle technology development",
    description:
      "VSSC is the pioneer facility responsible for the design and development of all ISRO launch vehicle families including PSLV, GSLV, LVM3, SSLV, and future reusable launch vehicle (RLV) demonstrators.",
    keySpecialization: ["Solid Propulsion Systems", "Aerodynamics & Structures", "Avionics & Flight Control", "Composite Materials"],
    officialUrl: "https://www.vssc.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1517976487504-59a1a0840b00?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ursc",
    name: "U R Rao Satellite Centre",
    shortCode: "URSC",
    city: "Bengaluru",
    state: "Karnataka",
    category: "satellite-systems",
    categoryLabel: "Satellite Architecture & Integration",
    role: "Lead centre for satellite design, fabrication, and integration",
    description:
      "URSC is responsible for the end-to-end design, development, assembly, and testing of all scientific, communication, navigation, and Earth observation satellites including Chandrayaan and Aditya-L1.",
    keySpecialization: ["Spacecraft Bus Architecture", "Power & Thermal Systems", "Mechanical Integration", "Spacecraft Testing & AIT"],
    officialUrl: "https://www.ursc.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "sdsc-shar",
    name: "Satish Dhawan Space Centre",
    shortCode: "SDSC SHAR",
    city: "Sriharikota",
    state: "Andhra Pradesh",
    category: "launch-propulsion",
    categoryLabel: "Spaceport & Launch Operations",
    role: "India's primary spaceport and orbital launch base",
    description:
      "Located on the barrier island of Sriharikota, SDSC SHAR houses the First and Second Launch Pads, solid motor production plants, vehicle assembly buildings, and state-of-the-art launch range tracking infrastructure.",
    keySpecialization: ["First & Second Launch Pads", "Solid Propellant Processing Plant (SPPROPS)", "Mission Control & Launch Safety", "Range Tracking & Telemetry"],
    officialUrl: "https://www.shar.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "lpsc",
    name: "Liquid Propulsion Systems Centre",
    shortCode: "LPSC",
    city: "Valiamala & Bengaluru",
    state: "Kerala / Karnataka",
    category: "launch-propulsion",
    categoryLabel: "Liquid & Cryogenic Engines",
    role: "Lead centre for liquid, cryogenic, and electric propulsion",
    description:
      "LPSC designs, develops, and qualifies liquid Vikas engines, cryogenic upper-stage engines (CE-20, CE-7.5), and precision bipropellant thrusters for spacecraft attitude and orbit control.",
    keySpecialization: ["Cryogenic Engines (CE-20 & CE-7.5)", "Vikas Liquid Engine Development", "Spacecraft Liquid Apogee Motors (LAM)", "Electric & Hall Thruster Propulsion"],
    officialUrl: "https://www.lpsc.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "sac",
    name: "Space Applications Centre",
    shortCode: "SAC",
    city: "Ahmedabad",
    state: "Gujarat",
    category: "applications-tracking",
    categoryLabel: "Electro-Optical & Radar Sensors",
    role: "Lead centre for space-borne instruments and societal applications",
    description:
      "SAC conceptualizes and builds state-of-the-art optical payloads, microwave synthetic aperture radars (including NISAR S-band), communication transponders, and meteorological sensors.",
    keySpecialization: ["Synthetic Aperture Radar (SAR)", "Optical & Infrared Payloads", "Satellite Communication Transponders", "Geospatial Applied Analytics"],
    officialUrl: "https://www.sac.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "nrsc",
    name: "National Remote Sensing Centre",
    shortCode: "NRSC",
    city: "Hyderabad",
    state: "Telangana",
    category: "applications-tracking",
    categoryLabel: "Earth Observation & Geoportal",
    role: "Lead centre for satellite data reception and geospatial dissemination",
    description:
      "NRSC operates the Earth Station at Shadnagar for direct satellite telemetry downlink and powers the Bhuvan Geoportal for real-time disaster management, agriculture, and forestry applications.",
    keySpecialization: ["Shadnagar Ground Station", "Bhuvan Indian Geoportal", "Disaster Management Support (DMSP)", "Natural Resource Satellite Census"],
    officialUrl: "https://www.nrsc.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "hsfc",
    name: "Human Space Flight Centre",
    shortCode: "HSFC",
    city: "Bengaluru",
    state: "Karnataka",
    category: "human-research",
    categoryLabel: "Human Spaceflight & Habitats",
    role: "Lead centre for the Gaganyaan Human Spaceflight Programme",
    description:
      "HSFC orchestrates the end-to-end human spaceflight ecosystem, including astronaut training, environmental control and life support systems (ECLSS), crew module habitability, and recovery logistics.",
    keySpecialization: ["Astronaut Training Facility", "ECLSS & Human Engineering", "Orbital Module Life Support", "Crew Recovery Operations"],
    officialUrl: "https://www.isro.gov.in/HSFC.html",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "iprc",
    name: "ISRO Propulsion Complex",
    shortCode: "IPRC",
    city: "Mahendragiri",
    state: "Tamil Nadu",
    category: "launch-propulsion",
    categoryLabel: "Propulsion Testing & Hot Fires",
    role: "State-of-the-art static testing and assembly complex",
    description:
      "Set against the Mahendragiri hills, IPRC houses high-altitude test facilities for static hot-firing of cryogenic CE-20 engines, semicryogenic stages, and Vikas liquid rocket stages.",
    keySpecialization: ["Cryogenic Engine Testing Facility", "High Altitude Test Facility (HAT)", "Semicryogenic Test Complex", "Liquid Stage Integration"],
    officialUrl: "https://www.iprc.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "istrac",
    name: "ISRO Telemetry, Tracking and Command Network",
    shortCode: "ISTRAC",
    city: "Bengaluru",
    state: "Karnataka",
    category: "applications-tracking",
    categoryLabel: "Ground Station & Deep Space Tracking",
    role: "Telemetry, tracking, command, and deep space network operations",
    description:
      "ISTRAC provides mission operations support for all satellite missions, alongside managing the Indian Deep Space Network (IDSN) at Byalalu with 32-metre and 18-metre parabolic dish antennas.",
    keySpecialization: ["Mission Operations Complex (MOX)", "Indian Deep Space Network (IDSN Byalalu)", "Global TTC Ground Stations", "Space Situational Awareness (NETRA)"],
    officialUrl: "https://www.istrac.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "prl",
    name: "Physical Research Laboratory",
    shortCode: "PRL",
    city: "Ahmedabad & Mount Abu",
    state: "Gujarat / Rajasthan",
    category: "human-research",
    categoryLabel: "Planetary Science & Astronomy",
    role: "Cradle of Indian space sciences, founded by Dr. Vikram Sarabhai",
    description:
      "PRL conducts fundamental research in astronomy, astrophysics, solar physics, planetary sciences, and develops planetary payloads including APXS and ASPEX.",
    keySpecialization: ["Mount Abu Infrared Observatory", "Udaipur Solar Observatory (USO)", "Planetary Sciences & Cosmochemistry", "Theoretical Physics"],
    officialUrl: "https://www.prl.res.in",
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "in-space",
    name: "Indian National Space Promotion and Authorization Center",
    shortCode: "IN-SPACe",
    city: "Ahmedabad",
    state: "Gujarat",
    category: "commercial-ecosystem",
    categoryLabel: "Private Sector Authorization",
    role: "Single-window autonomous agency enabling private space enterprise",
    description:
      "IN-SPACe facilitates, authorizes, and regulates non-government entities (NGEs) to build launch vehicles, satellites, ground stations, and utilize ISRO infrastructure.",
    keySpecialization: ["Non-Government Entity (NGE) Authorization", "ISRO Infrastructure Sharing", "Technical Incubation & Funding", "Space Economy Policy"],
    officialUrl: "https://www.inspace.gov.in",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "nsil",
    name: "NewSpace India Limited",
    shortCode: "NSIL",
    city: "Bengaluru",
    state: "Karnataka",
    category: "commercial-ecosystem",
    categoryLabel: "Commercial Arm & Production",
    role: "Commercial arm of Department of Space (Govt. of India CPSE)",
    description:
      "NSIL commercializes Indian space capabilities, manufactures PSLV and SSLV via Indian industry consortia, and markets satellite transponder capacity and launch services globally.",
    keySpecialization: ["Commercial Satellite Launches", "Industry-led PSLV/SSLV Production", "GSAT Satellite Capacity Leasing", "Technology Transfer & Licensing"],
    officialUrl: "https://www.nsilindia.co.in",
    imageUrl: "https://images.unsplash.com/photo-1517976487504-59a1a0840b00?auto=format&fit=crop&w=1000&q=80"
  }
];
