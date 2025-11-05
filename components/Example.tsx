import React from "react";
import Image from "next/image";
import { FaBullseye } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";
import Banner from "@/components/Banner"

import Host from "@/components/Host";

const Example = () => {
  const about = [
    {
      icon: <FaBullseye className="w-6 h-6 " />,
      title: "OUR MiSSION",
      text: "To make tennis coaching a profitable and respected profession through world-class tennis programs.",
    },
    {
      icon: <GoTelescope className="w-6 h-6 " />,
      title: "OUR VISION",
      text: "To empower tennis coaches with the knowledge and skills to become better teachers.",
    },
  ];
  const PTR = [
    {
      title: "Global Presence",
      sub: " PTR has 134,000+ members across 125 countries, creating a strong worldwide network of tennis professionals.",
    },
    {
      title: "Education & Certification",
      sub: "Through world-class training and certification, PTR equips coaches with modern skills to guide players at every level.",
    },
    {
      title: "Empowering Coaches",
      sub: "PTR supports continuous learning and career development, helping coaches thrive and elevate the sport globally.",
    },
  ];
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#71E529]/10 to-[#40A700]/5 -z-10" />

      <div className="pb-8 md:pb-12">
        {/* Main hero container */}
        <div className="relative">
          {/* Background gradient section with diagonal cut */}
          <div className="relative bg-gradient-to-br from-[#71E529] to-[#40A700] overflow-hidden">
            {/* Diagonal cut effect */}
            <div
              className="absolute -bottom-1 left-0 right-0 h-20 bg-white"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 md:py-12 items-center">
                {/* Image Grid Section */}
                <div className="relative">
                  {/* Main large image */}
                  <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/abt.jpg"
                      alt="African tennis coaching"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Smaller decorative images */}
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
                    <Image
                      src="/register.jpg"
                      alt="Tennis coaches"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white hidden lg:block">
                    <Image
                      src="/abt.jpg"
                      alt="Tennis training"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Decorative circle */}
                  <div className="absolute top-1/2 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl" />
                </div>

                {/* Text Section */}
                <div className="text-white space-y-4 lg:pl-8 py-10">
                  <div className="space-y-2">
                    <div className="">

                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium ">
                      Our Story
                    </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                      Building Africa&apos;s Tennis Future Together
                    </h1>
                  </div>

                  <div className="space-y-3 text-white/95 text-sm lg:text-base">
                    <p className="leading-relaxed">
                      The African Coaches Conference was born out of a shared
                      passion to strengthen the foundation of tennis across the
                      continent. For years, African coaches have worked
                      tirelessly to develop talents and elevate the game, yet
                      opportunities for collaboration, exposure, and advanced
                      training have remained limited.
                    </p>

                    <p className="leading-relaxed">
                      This inaugural edition serves as a landmark moment —
                      bringing together coaches, experts, and tennis enthusiasts
                      from across Africa to learn, share, and connect under one
                      roof. More than just a gathering, it&apos;s a movement
                      aimed at building a strong community of tennis
                      professionals who will shape the future of the sport in
                      Africa.
                    </p>

                    <p className="leading-relaxed">
                      With engaging sessions, practical workshops, and
                      insightful discussions, the conference is designed to
                      inspire new coaching techniques, deepen understanding of
                      player development, and open doors to global
                      opportunities. This is where ideas meet passion — and the
                      future of African tennis begins.
                    </p>
                  </div>

                  {/* Stats or CTA */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-xs text-white/80">
                        Expected Participants
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                      <div className="text-2xl font-bold">20+</div>
                      <div className="text-xs text-white/80">
                        African Countries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Host />

      {/* about PTR */}

      <div className="grid grid-cols-1 md:grid-cols-2 items-center container gap-6 mx-auto max-w-6xl py-20 px-6">
        <div className="h-96 relative rounded-xl overflow-hidden">
          <Image
            src="/ptr.jpg"
            alt="ptr"
            fill
            className="object-cover w-full h-full mx-auto"
          />
        </div>
        <div className="space-y-6">
          <p className="text-[#40A700] text-sm font-semibold">ABOUT PTR</p>
          <p className="text-4xl font-bold ">
            Professional Tennis Registry
          </p>
          <p className="text-lg leading-relaxed">
            The Professional Tennis Registry (PTR) is a leading global
            organization committed to advancing the art and science of tennis
            coaching. It is dedicated to training and certifying tennis coaches.
            Since 1976, it has helped coaches teach effectively, grow the game,
            and build lasting careers.
          </p>
          <div>
            <div className="space-y-4">
              {PTR.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-1 h-12 bg-[#71E529] rounded-full"></div>
                  <div>
                    <p className="font-bold text-lg text-[#40A700]">{item.title}</p>
                    <p>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mission and vision */}
      <div className="relative  grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto max-w-6xl py-20 ">
        {about.map((item, index) => (
          <div className=" p-8 rounded-2xl" key={index}>
            <div className="w-12 h-12 bg-[#40A700] rounded-lg flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <div className="flex items-center gap-5 mb-5">
              <div className="w-1 h-12 bg-[#71E529] rounded-full"></div>
              <h3 className="text-2xl font-black mb-4 italic">{item.title}</h3>
            </div>
            <p className="text-black">{item.text}</p>
          </div>
        ))}
      </div>

    <Banner />
    </section>
  );
};

export default Example;
