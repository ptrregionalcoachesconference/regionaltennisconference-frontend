export type Person = {
  name: string;
  role: string; // e.g. "Host", "Convener", "Guest of honour"
  image: string;
  title?: string; // professional title, e.g. "Certified PTR & ITF Tennis Coach"
  bio?: string; // optional short paragraph shown under the name
  specialties?: string[]; // optional chips shown under the bio
};

export type Speaker = Person;

export type Edition = {
  year: number;
  status: "upcoming" | "past";
  theme: string;
  dates: string;
  venue: string;
  summary: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  organizers: Person[];
  speakers: Speaker[];
  gallery: { src: string; alt: string }[];
  testimonials: { quote: string; author: string }[];
  /** YouTube embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID */
  videoUrl?: string;
};

// People who appear in more than one year are defined once here,
// then listed under each year's organizers.
const convener: Person = {
  name: "Abel Ubiebi",
  role: "Convener",
  title: "Professional Tennis Coach & Consultant",
  bio: "Founder of Aces Tennis Academy with over 26 years in the tennis teaching profession. Recognized all over the world for his innovative teaching method. Has produced multiple champions dispersed across globes.",
  image: "/abel.jpg",
  specialties: [
    "Player Development",
    "Tactical Analysis",
    "Sports Psychology",
    "Fitness & Conditioning",
    "Cardio Tennis",
  ],
};

const henry: Person = {
  name: "Henry Shedrack",
  role: "Host",
  image: "/Coach Henry.jpg",
  // title: "...",
  // bio: "...",
};

const linda: Person = {
  name: "Akosile Afolarin Linda",
  role: "Host",
  image: "/Linda.jpg",
  title: "ITF Level 1 & PTR-Certified Tennis Coach",
  bio: "Head Coach of Unbeatable Tennis Swing Model and a competitive tennis player with ten years of coaching experience, dedicated to player development and tennis excellence.",
  specialties: [
    "Player Development",
    "Competitive Tennis",
    "Professional Tennis Coaching",
  ],
};

const spencer: Person = {
  name: "C.Spencer",
  role: "Host",
  image: "/Spencer.jpg",
  title: "Certified PTR & ITF Tennis Coach",
  bio: "Founder & Head Pro of C.Spencer Tennis Pro Concepts with over 5 years of teaching experience. Passionate about inspiring the next generation to build confidence, purpose, and excellence through tennis.",
  specialties: [
    "Youth Player Development",
    "Confidence-Building Coaching",
    "Tennis Fundamentals",
    "Competitive player development",
  ],
};

// Newest first. To roll over a year: flip its status to "past", fill in
// stats / gallery / speakers, then add the next year as "upcoming".
export const editions: Edition[] = [
  {
    year: 2027,
    status: "upcoming",
    theme: "To be announced",
    dates: "April 2027",
    venue: "Lagos, Nigeria",
    summary: "",
    stats: [],
    highlights: [],
    organizers: [convener, henry, linda],
    speakers: [],
    gallery: [],
    testimonials: [],
  },
  {
    // TODO: every field below except the speakers is placeholder text.
    year: 2026,
    status: "past",
    theme: "Shaping Tennis Teaching Methodology",
    dates: "April 2026",
    venue: "Abuja, Nigeria",
    summary:
      "Coaches from across the region came together for workshops, certification and a lot of time on court.",
    stats: [
      { label: "Attendees", value: "50+" },
      { label: "Coaches certified", value: "50" },
      { label: "Workshops", value: "6" },
      { label: "Speakers", value: "8" },
    ],
    highlights: [
      "Record attendance for a regional PTR event",
      "First 10 & Under certification track",
    ],
    organizers: [convener, spencer], // add the 2026 host(s) here
    speakers: [
      {
        name: "Pfungwa Mahefu",
        role: "Founder & President, CATE",
        image: "/pfungwa.jpg",
        bio: "Former Zimbabwe Davis Cup player and coach, founder of The Children's Academy of Tennis Excellence (CATE).",
        specialties: [
          "Youth Development",
          "Player Mentorship",
          "Tennis Coaching",
        ],
      },
      {
        name: "Brian de Villiers",
        role: "Co-Director, Van Der Meer Tennis Academy",
        image: "/brian.jpeg",
        bio: "Renowned high-performance tennis coach and Academy Co-Director at the Van Der Meer Tennis Academy with over 30 years of coaching experience.",
        specialties: [
          "High Performance Coaching",
          "Junior Player Development",
          "Technical Instruction",
        ],
      },
      {
        name: "Mark Tennant",
        role: "Director and Owner, Coach Central",
        image: "/mark.jpeg",
        bio: "UK-based LTA Level 5 coach, educator, and mentor with extensive experience in global tennis coach development.",
        specialties: [
          "Coach Education & Tutoring",
          "Transformational Coaching",
          "ITF Play and Stay Methodology",
        ],
      },
      {
        name: "Abdul Idi",
        role: "USPTA Elite Professional Tennis Coach",
        image: "/abdul.jpeg",
        bio: "Former Nigerian junior tennis champion and US-based tennis coach dedicated to player development and mentorship.",
        specialties: [
          "Player Development Pathways",
          "Scholarship Mentorship",
          "High Performance Training",
        ],
      },
      {
        name: "Benson Ishicheli",
        role: "Non-Playing Captain, Nigeria Davis Cup Team",
        image: "/Benson.jpg",
        bio: "Nigerian tennis coach and national team leader focused on developing grassroots and elite junior talent.",
        specialties: [
          "Talent Identification",
          "Player Development",
          "High Performance Coaching",
        ],
      },
      {
        name: "Coach Rotimi Akinloye",
        role: "Former Nigerian Tennis Director",
        image: "/Rotimi.jpg",
        bio: "Ex-national and Davis Cup player with over 40 years of coaching experience and leadership in Nigerian tennis development.",
        specialties: [
          "Coaching Education",
          "Player Development",
          "National Team Leadership",
        ],
      },
      {
        name: "Shina Atilola",
        role: "Director, Premium Trust Bank",
        image: "/Shina.jpg",
        bio: "Senior banking executive with 24+ years' experience in business development and strategy across leading financial institutions.",
        specialties: ["Business Strategy", "Marketing", "Leadership"],
      },
      {
        name: "Frank Termena",
        role: "Head Coach, Nigeria Wheelchair Tennis Team",
        image: "/frank.jpeg",
        bio: "ITF-certified tennis coach and Head Coach of the Nigeria Wheelchair Tennis Team with extensive international experience.",
        specialties: [
          "Wheelchair Tennis Coaching",
          "High Performance Team Leadership",
          "Coach Education & Development",
        ],
      },
    ],
    gallery: [
      // Put photos in public/archive/2026/ and list them here.
      // { src: "/archive/2026/1.jpg", alt: "Opening session" },
    ],
    testimonials: [],
  },
];

export const upcomingEdition = editions.find((e) => e.status === "upcoming");

export const pastEditions = editions
  .filter((e) => e.status === "past")
  .sort((a, b) => b.year - a.year);

export const getEdition = (year: number) =>
  editions.find((e) => e.year === year);

export function getAdjacent(year: number) {
  const i = pastEditions.findIndex((e) => e.year === year);
  return {
    newer: i > 0 ? pastEditions[i - 1] : undefined,
    older: i >= 0 ? pastEditions[i + 1] : undefined,
  };
}
