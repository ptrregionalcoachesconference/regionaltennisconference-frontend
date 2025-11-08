"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Speakers = () => {
  const [expandedSpeaker, setExpandedSpeaker] = useState<number | null>(null);
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null);
  const isCardHovered = (speakerId: number, hoveredId: number | null) =>
    hoveredId === speakerId;
  const speakers = [
    {
      id: 1,
      name: "Carl Maes",
      title: "PTR International Coaching Director",
      image: "/Carl.jpg",
      bio: "Carl Maes is a globally respected Belgian tennis coach and performance director, known for coaching multiple top-100 players including former World No.1 Kim Clijsters.",
      details:
        "Carl Maes is a globally recognized coach and performance director. He coached former World No.1 Kim Clijsters for over ten years and has worked with top players including Johanna Konta, Bianca Andreescu, Elise Mertens, Laura Robson, and Casper Ruud. With a master's in Sports Science, he is known as 'Mr. Stats' for his analytical, data-driven coaching approach.",

      expertise: [
        "High-Performance Coaching",
        "Player Development",
        "Sports Science & Kinesiology",
      ],
      sessions: ["Opening Keynote", "Advanced Coaching Techniques Workshop"],
    },
    {
      id: 2,
      name: "Shina Atilola",
      title: "Director, Premium Trust Bank",
      image: "/Shina.jpg",
      bio: "Senior banking executive with 24+ years' experience in business development and strategy across leading financial institutions.",
      details:
        "Shina Atilola is a seasoned business development and strategy expert with over 24 years of experience in top financial institutions. His background spans marketing, branding, and auditing, and he has been invited to speak at multiple industry events, sharing insights on growth, leadership, and corporate strategy.",
      expertise: ["Business Strategy", "Marketing", "Leadership"],
      sessions: ["Opening Keynote", "Advanced Coaching Techniques Workshop"],
      undisclosed: true,
    },
    {
      id: 3,
      name: "Benson Ishicheli",
      title: "Non-Playing Captain, Nigeria Davis Cup Team",
      image: "/Benson.jpg",
      bio: "Nigerian tennis coach and national team leader focused on developing grassroots and elite junior talent.",
      details:
        "Benson Ishicheli is a respected Nigerian tennis coach and the non-playing captain of the Nigeria Davis Cup team. He plays a key role in identifying, nurturing, and preparing young athletes for national and international competition, with a strong focus on grassroots development and future talent pathways.",
      expertise: [
        "Talent Identification",
        "Player Development",
        "High Performance Coaching",
      ],
      sessions: ["Opening Keynote", "Advanced Coaching Techniques Workshop"],
      undisclosed: true,
    },
    {
      id: 4,
      name: "Coach Rotimi Akinloye",
      title: "Former Nigerian Tennis Director",
      image: "/Rotimi.jpg",
      bio: "Ex-national and Davis Cup player with over 40 years of coaching experience and leadership in Nigerian tennis development.",
      details:
        "Rotimi Akinloye is a highly respected Nigerian tennis coach who has served as Technical Director for the Nigeria Tennis Federation and Aurum Tennis Academy. A former national team and Davis Cup player, he has dedicated over 40 years to coaching, player development, and tennis education, actively contributing to national team preparations and grassroots talent development.",
      expertise: [
        "Coaching Education",
        "Player Development",
        "National Team Leadership",
      ],
      sessions: ["Opening Keynote", "Advanced Coaching Techniques Workshop"],
      undisclosed: true,
    },
    {
      id: 5,
      name: "Pfungwa Mahefu",
      title: "Founder & President, CATE",
      image: "/pfungwa.jpg",
      bio: "Former Zimbabwe Davis Cup player and coach, founder of The Children's Academy of Tennis Excellence (CATE).",
      details:
        "Pfungwa Mahefu is a former Zimbabwe Davis Cup player and has coached ATP player Tankayi. He is the founder and president of The Children's Academy of Tennis Excellence (CATE), where he focuses on developing young tennis talent and promoting excellence in youth tennis education.",
      expertise: ["Youth Development", "Player Mentorship", "Tennis Coaching"],
      sessions: ["Opening Keynote", "Advanced Coaching Techniques Workshop"],
     
    },
    {
      id: 6,
      name: "Dr James Mitchell",
      title: "Co Director & Player Development Expert",
      image: "/Abel.jpg",
      bio: "With over 25 years of experience in professional tennis coaching, Dr. Mitchell has trained multiple Grand Slam champions.",
      details:
        "Dr Mitchell specializes in tactical analysis and player development. He has worked with national teams across Europe and Asia, implementing innovative training protocols that have resulted in a 40% improvement in player performance metrics. His research on biomechanics has been published in leading sports science journals.",
      expertise: [
        "Tactical Analysis",
        "Player Development",
        "Biomechanics",
        "Sports Psychology",
      ],
      sessions: ["Opening Keynote", "Advanced Coaching Techniques Workshop"],
      undisclosed: true,
    },
  ];
  return (
    <div className="py-20" id="speakers">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-5xl text-black">Featured Speakers</h1>
          <p className="text-base sm:text-sm md:text-lg">
            Discover our world-class speakers and their expertise
          </p>
        </div>

        {/* speakers section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 ">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="h-fit ">
              <div
                className={`relative border rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 ease-out curosr-pointer ${
                  isCardHovered(speaker.id, hoveredSpeaker)
                    ? "border-[#40A700] shadow-2xl shadow-[#40A700]/20 -translate-y-2"
                    : "border-border"
                }`}
                onClick={() =>
                  setExpandedSpeaker(
                    expandedSpeaker === speaker.id ? null : speaker.id
                  )
                }
                onMouseEnter={() => setHoveredSpeaker(speaker.id)}
                onMouseLeave={() => setHoveredSpeaker(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`${speaker.undisclosed ? "/Sil.jpg" : speaker.image}`}
                    alt={speaker.name}
                    width={400}
                    height={400}
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                      isCardHovered(speaker.id, hoveredSpeaker)
                        ? "scale-110"
                        : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isCardHovered(speaker.id, hoveredSpeaker)
                        ? "bg-gradient-to-b from-black/20 via-black/40 to-black/70"
                        : "bg-gradient-to-b from-transparent via-transparent to-black/60"
                    }`}
                  />
                </div>

                {/* container */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3
                    className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                      speaker.undisclosed ? "text-red-500" : ""
                    } ${
                      isCardHovered(speaker.id, hoveredSpeaker)
                        ? "text-[#40A700]"
                        : "text-black"
                    }`}
                  >
                    {`${speaker.undisclosed ? "Undisclosed" : speaker.name}`}
                  </h3>
                  <p
                    className={`font-semibold mb-3 ${
                      speaker.undisclosed ? "text-gray-700" : "text-[#40A700]"
                    } `}
                  >
                    {`${
                      speaker.undisclosed
                        ? "To be revealed Soon"
                        : speaker.title
                    }`}
                  </p>
                  <p
                    className={`text-sm leading-relaxed flex-1 mb-4 transition-colors duration-300 ${
                      isCardHovered(speaker.id, hoveredSpeaker)
                        ? "text-black/70"
                        : "text-gray-700"
                    }`}
                  >
                    {`${speaker.undisclosed ? "Check back soon" : speaker.bio}`}
                  </p>
                  <div
                    className={`rounded-full h-1 bg-[#40A700] transition-all duration-500 ${
                      isCardHovered(speaker.id, hoveredSpeaker) ? "w-12" : "w-0"
                    }`}
                  />
                  <div className="flex justify-between mt-4 pt-2 border-t border-border/30 items-center">
                    <Button
                      className="bg-transparent border-gray-300 inline-flex items-center gap-2 text-black font-semibold text-sm hover:text-[#40A700] hover:bg-transparent transition-colors duration-300 cursor-pointer"
                      onClick={() =>
                        setExpandedSpeaker(
                          expandedSpeaker === speaker.id ? null : speaker.id
                        )
                      }
                    >
                      {expandedSpeaker === speaker.id ? "Hide" : "View"}
                      Details{" "}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedSpeaker === speaker.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </Button>
                    <span className="text-xs text-gray-600">
                      Click for more
                    </span>
                  </div>
                </div>
                {/* dropdown content */}
                <div
                  className={`border-t border-border overflow-hidden transition-all duration-500 ease-out ${
                    expandedSpeaker === speaker.id
                      ? "max-h-[500px] opacity-100 p-6"
                      : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold">More Details</p>
                      <p className="text-sm leading-relaxed text-gray-700">
                        {`${
                          speaker.undisclosed ? "Coming Soon" : speaker.details
                        }`}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {speaker.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#71E529]/20 rounded-full text-sm font-semibold"
                          >
                            {`${speaker.undisclosed ? "Coming Soon" : exp}`}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Sessions</p>
                      <ul className="space-y-1">
                        {speaker.sessions.map((session, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm gap-2"
                          >
                            <p
                              className={`${
                                speaker.undisclosed
                                  ? ""
                                  : "rounded-full bg-[#40A700] w-2 h-2"
                              }`}
                            />
                            <p className="text-sm">{`${
                              speaker.undisclosed ? "Check back" : session
                            }`}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
