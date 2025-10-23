"use client";

import Hero from "@/components/Hero";
// import Background from "@/components/Background";
// import Sponsors from "@/components/Sponsors";
// import balls from "@/public/balls.png";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BsTrophy } from "react-icons/bs";
import { GiTennisBall } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { BiNetworkChart } from "react-icons/bi";
import { PiSuitcaseSimpleLight, PiRadioBold } from "react-icons/pi";
import { FaAward } from "react-icons/fa";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  //  weight:400,
  variable: "--font-space-grotesk",
});

export default function Page() {
  const details = [
    {
      icon: <FaCalendarDays />,
      detail: "APRIL",
      detail2: "2026",
    },
    {
      icon: <FaLocationDot />,
      detail: "ABUJA",
      detail2: "NIGERIA",
    },
    {
      icon: <MdGroups2 />,
      detail: "20+",
      detail2: "SPEAKERS",
    },
  ];
  // const about = [
  //   {
  //     icon: <FaBullseye className="w-6 h-6 " />,
  //     title: "MiSSION",
  //     text: "To make tennis coaching a profitable and respected profession through world-class tennis programs.",
  //   },
  //   {
  //     icon: <GoTelescope className="w-6 h-6 " />,
  //     title: "VISION",
  //     text: "To empower tennis coaches with the knowledge and skills to become better teachers.",
  //   },
  // ];
  const expectation = [
    {
      icon: <BsTrophy className="w-6 h-6 text-white" />,
      name: "World-Class Presentations",
      description: "Engaging talks by renowned tennis coaches and industry experts.",
    },
    {
      icon: <GiTennisBall className="w-6 h-6 text-white" />,
      name: "On-Court Practical Sessions",
      description: "Hands-on coaching clinics and demonstrations.",
    },
    {
      icon: <PiCertificate className="w-6 h-6 text-white" />,
      name: "PTR Certification And Coaching Development Programs",
      description: "Opportunities to earn certifications and enhance coaching skills.",
    },
    {
      icon: <BiNetworkChart className="w-6 h-6 text-white" />,
      name: "Networking Opportunities With Coaches And Industry Experts",
      description: "Connect with peers and leaders in the tennis coaching community.",
    },
    {
      icon: <PiSuitcaseSimpleLight className="w-6 h-6 text-white" />,
      name: "Business And Branding Sessions For Tennis Professionals",
      description: "Learn strategies to grow your coaching business and personal brand.",
    },
    {
      icon: <PiRadioBold className="w-6 h-6 text-white" />,
      name: "Exhibitions And Product Demonstrations",
      description: "Explore the latest tennis equipment and technology from top brands.",
    },
    {
      icon: <FaAward className="w-6 h-6 text-white" />,
      name: "Recognition And Awards For Outstanding Contributions",
      description: "Celebrate excellence in tennis coaching with special awards.",
    },
    {
      icon: <FaAward className="w-6 h-6 text-white" />,
      name: "Recognition And Awards For Outstanding Contributions",
      description: "Celebrate excellence in tennis coaching with special awards.",
    },
  ];

  const pricing = [
    {
      name: "Standard Package",
      price: "500",
      items: [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
      ],
    },
    {
      name: "Standard Package",
      price: "500",
      items: [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
      ],
      recommended: true,
    },
    {
      name: "Standard Package",
      price: "500",
      items: [
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
        "Lorem ipsum",
      ],
    },
  ];
  const speakers = [
    {
      id: 1,
      name: "Dr. James Okonkwo",
      title: "Elite Tennis Coach",
      specialty: "Advanced Technique",
      image: "/black male.jpg",
    },
    {
      id: 2,
      name: "Dr. James Okonkwo",
      title: "Elite Tennis Coach",
      specialty: "Advanced Technique",
      image: "/female black.jpg",
    },
    {
      id: 3,
      name: "Dr. James Okonkwo",
      title: "Elite Tennis Coach",
      specialty: "Advanced Technique",
      image: "/female white.jpg",
    },
    {
      id: 4,
      name: "Dr. James Okonkwo",
      title: "Elite Tennis Coach",
      specialty: "Advanced Technique",
      image: "/black male.jpg",
    },
  ];
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="
        absolute top-[520px] md:top-[520px] lg:top-[60px] w-full 
        bg-green-100
        left-1/2 -translate-x-1/2
        
        shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        mx-auto
        min-h-[1200px]
      ">
          <div className="
        absolute top-20 md:top-30 lg:top-40 w-full 
        bg-[#40A700]
        rounded-[40px]
        shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        mx-auto
        min-h-[1200px]
      ">
          <div className="
        absolute top-5  w-full 
        bg-white
        rounded-[40px]
        shadow-[0_18px_40px_rgba(0,0,0,0.22)]
        mx-auto
        min-h-[1200px]
      "></div>
      </div>
      </div>


      {/* <Background></Background> */}

      <section className=" relative py-12 bottom-10 md:bottom-8 lg:bottom-15  w-full ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl py-6 md:py-12  md:px-12 -mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center justify-center">
              {details.map((item, index) => (
                <div
                  key={index}
                  className={`${spaceGrotesk.className} flex  lg:space-x-4  space-x-2  justify-center text-center items-center font-bold md:text-xl`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className={`${spaceGrotesk.className}`}>{item.detail}</p>
                    <p className={`${spaceGrotesk.className}`}>
                      {item.detail2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* about section */}

      <div className="w-full bg-gray-100 relative py-20   ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-12 md:gap-16 md:grid-cols-2 items-center">
            {/* image side */}
            <div className="relative w-full h-[500px]">
              {/* back img */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 z-0">
                <Image
                  src="/about.jpg"
                  alt="aboutimg"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* frontimg */}
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 z-10">
                <Image
                  src="/coaches.jpg"
                  alt="coaches"
                  fill
                  className="object-cover shadow-2xl rounded-2xl border-4 border-white "
                />
              </div>
            </div>
            {/* text-side */}
            <div className="space-y-6">
              <h1 className="text-center md:text-left text-3xl md:text-4xl w-full  font-bold  md:mx-0   mb-5">
                ABOUT THE CONFERENCE
              </h1>
              <p
                className={`w-full max-w-5xl text-base md:text-lg text-center md:text-left mb-12 ${spaceGrotesk.className}  `}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                obcaecati aperiam fugit ipsum impedit voluptas at omnis, magnam
                quasi commodi modi officiis illum autem blanditiis voluptatem et
                maiores nobis provident praesentium deserunt iste id molestias!
                Tenetur saepe excepturi in veniam?{" "}
                <Link href="/about" className="text-[#407900] font-bold ">
                  Read more...
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mission and vision */}
      {/* <div className="relative  grid grid-cols-1 lg:grid-cols-2 gap-6 container   ">
            {about.map((item, index) => (
              <div className="bg-[#71E529]  p-8 rounded-2xl" key={index}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 italic">
                  {item.title}
                </h3>
                <p className="text-green-50">{item.text}</p>
              </div>
            ))}
          </div> */}

      {/* what to expect */}
   <section className="w-full py-20 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#71E529] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
  
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">100+</div>
        <div className="text-gray-600">Coaches</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">30+</div>
        <div className="text-gray-600">Sessions</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">3</div>
        <div className="text-gray-600">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">10+</div>
        <div className="text-gray-600">Countries</div>
      </div>
    </div>

    {/* Title */}
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
      WHAT TO EXPECT
    </h1>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {expectation.map((item, index) => (
        <Card 
          key={index}
          className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
        >
          {/* Number badge */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-[#71E529] text-white rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#71E529] to-[#40A700] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-white text-3xl">{item.icon}</span>
            </div>
            <p className="font-bold text-lg mb-2">{item.name}</p>
            <p className="text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

  </div>
</section>

      {/* speakers */}
      <section className="bg-gray-100 w-full px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-balance italic text-center md:text-left">
            MEET OUR SPEAKERS
          </h1>
          <p className="text-base md:text-lg mb-12 max-w-2xl text-center md:text-left">
            {" "}
            Learn from world-renowned tennis coaches and industry experts who
            will share their insights and experiences.
          </p>

          {/* <div className="relative"> */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {speakers.map((item) => (
              <div key={item.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden h-64 md:h-80">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3>{item.name}</h3>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-[#40A700] hover:bg-[#357A00] text-white px-8 py-3 font-bold">
              VIEW MORE SPEAKERS
            </Button>
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* payment plans */}
      <div className="py-16 md:py-20 px-4 md:px-8 ">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-3xl md:text-5xl italic font-bold">
            PAYMENT PLANS
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-12 ax-w-2xl">
            Choose the perfect package for your conference experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all ${
                  plan.recommended
                    ? "bg-[#71E529] text-white shadow-2xl scale-105 md:scale-110"
                    : "bg-gray-50 border border-border hover:shadow-lg"
                }`}
              >
                {plan.recommended && (
                  <div className="bg-green-700 text-white text-center py-2 font-bold text-sm">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.recommended ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-8">
                    <span
                      className={`text-5xl font-black ${
                        plan.recommended ? "text-white" : "text-[#71E529]"
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={
                        plan.recommended
                          ? "text-green-100"
                          : "text-muted-foreground"
                      }
                    >
                      /person
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.items.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.recommended ? "bg-green-400" : "bg-green-100"
                          }`}
                        >
                          <span
                            className={`text-xs font-bold ${
                              plan.recommended
                                ? "text-green-700"
                                : "text-green-600"
                            }`}
                          >
                            ✓
                          </span>
                        </div>
                        <span
                          className={
                            plan.recommended
                              ? "text-green-50"
                              : "text-foreground"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-bold transition ${
                      plan.recommended
                        ? "bg-white text-green-600 hover:bg-green-50"
                        : "bg-[#71E529] text-white hover:bg-green-700"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sponsors */}
      <div></div>
    </div>
  );
}
