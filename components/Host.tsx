"use client";
import React from "react";
import Image from "next/image";

const hosts = () => {
  const hosts = [
    {
      name: "Coach Abel Ubiebi: Convener",
      title: "Professional Tennis Coach & Head Coach",
      bio: "Founder of Aces Tennis Academy with over 26 years in the Teaching World of Tennis. Recognized all over the world for his innovative teching method. Has produced multiple champions dispersed across globes",
      img: "/Abel.jpg",
      specialties: [
        "Player Development",
        "Tactical Analysis",
        "Sports Psychology",
        "Fitness & Conditioning",
        "Cardio Tennis"
      ],
    },
    {
      name: "Coach C Spencer: Host",
      title: "Certified PTR & ITF Tennis Coach & Founder, C.Spencer Tennis Pro Concepts",
      bio: "Certified PTR & ITF tennis coach with over 5 years of coaching experience. Passionate about inspiring the next generation to build confidence, purpose, and excellence through tennis.",
      img: "/Spencer.jpg",
      specialties: [
        "Youth Player Development",
        "Confidence-Building Coaching",
        "Tennis Fundamentals",
        "Competitive player development"
      ],
    },
  ];
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl">Meet the Organizers</h1>
          <p className="text-lg">
            Leading experts shaping the future of tennis coaching
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {hosts.map((host, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-6 h-96">
                <Image
                  src={host.img}
                  alt={host.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="space-y-3">
                <h3>{host.name}</h3>
                <p>{host.title}</p>
                <p>{host.bio}</p>
                <div>
                  {host.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#71E529]/20 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default hosts;
