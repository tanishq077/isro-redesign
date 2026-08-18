export interface UpdateItem {
  id: string;
  title: string;
  category: "Mission Milestone" | "Press Release" | "Scientific Publication" | "Announcement";
  date: string;
  summary: string;
  readTime: string;
  sourceUrl?: string;
  isImportant?: boolean;
}

export const UPDATES_DATA: UpdateItem[] = [
  {
    id: "update-1",
    title: "Aditya-L1 Completes Halo Orbit Insertion Phase and Captures Coronal Dynamic Data",
    category: "Mission Milestone",
    date: "January 2024",
    summary:
      "ISRO's maiden solar observatory Aditya-L1 successfully executed its final station-keeping burn to enter the targeted Halo Orbit around the Sun-Earth Lagrange Point 1, initiating continuous observations of coronal mass ejections.",
    readTime: "3 min read",
    sourceUrl: "https://www.isro.gov.in/Aditya_L1.html",
    isImportant: true
  },
  {
    id: "update-2",
    title: "XPoSat Successfully Injected into Orbit; POLIX and XSPECT Begin Scientific Calibration",
    category: "Mission Milestone",
    date: "January 2024",
    summary:
      "PSLV-C58 accurately placed the X-ray Polarimeter Satellite into a 650 km low-Earth orbit. Scientific instruments POLIX and XSPECT have commenced background calibration for cosmic X-ray polarimetry studies.",
    readTime: "2 min read",
    sourceUrl: "https://www.isro.gov.in/XPoSat.html",
    isImportant: false
  },
  {
    id: "update-3",
    title: "Gaganyaan CE-20 Cryogenic Engine Passes Final Human-Rating Vacuum Hot-Fire Tests",
    category: "Press Release",
    date: "February 2024",
    summary:
      "The indigenous CE-20 cryogenic engine powering the C25 upper stage of HLVM3 has successfully completed rigorous qualification tests across multiple operating conditions, qualifying it for human spaceflight missions.",
    readTime: "4 min read",
    sourceUrl: "https://www.isro.gov.in/HumanSpaceflight.html",
    isImportant: true
  },
  {
    id: "update-4",
    title: "Chandrayaan-3 Data Releases Confirm In-Situ Presence of Sulphur and Thermal Gradient Profile",
    category: "Scientific Publication",
    date: "August 2024",
    summary:
      "Peer-reviewed scientific findings from the LIBS and ChaSTE payloads on the Vikram lander and Pragyan rover detail the lunar topsoil temperature gradient and elemental abundances near the lunar south pole.",
    readTime: "5 min read",
    sourceUrl: "https://www.issdc.gov.in",
    isImportant: false
  },
  {
    id: "update-5",
    title: "SSLV-D3 Successfully Deploys EOS-08 Earth Observation Satellite from Sriharikota",
    category: "Mission Milestone",
    date: "August 2024",
    summary:
      "The Small Satellite Launch Vehicle (SSLV) completed its developmental flight phase with the successful orbital injection of EOS-08, demonstrating rapid turnaround capabilities for small satellite missions.",
    readTime: "3 min read",
    sourceUrl: "https://www.isro.gov.in/SSLV_D3.html",
    isImportant: false
  },
  {
    id: "update-6",
    title: "IN-SPACe Announces Technical Infrastructure Access for Indian Space Startups & Industry",
    category: "Announcement",
    date: "2024",
    summary:
      "Under the revised space sector guidelines, Non-Government Entities (NGEs) can now leverage ISRO testing facilities, clean rooms, and launch pads at SDSC SHAR through single-window digital authorization.",
    readTime: "3 min read",
    sourceUrl: "https://www.inspace.gov.in",
    isImportant: false
  }
];
