"use client";
import Link from "next/link"
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Expectation from "@/components/home/Expectation";
import Packages from "@/components/home/Packages";
import { Space_Grotesk } from "next/font/google";

import Image from "next/image";
import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";

import { Button } from "@/components/ui/button";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  //  weight:400,
  variable: "--font-space-grotesk",
});

export default function Page() {
  const details = [
    {
      icon: <FaCalendarDays />,
      detail: "APRIL 16TH-18TH",
      detail2: "2026",
    },
    {
      icon: <FaLocationDot />,
      detail: "ABUJA",
      detail2: "NIGERIA",
    },
    {
      icon: <MdGroups2 />,
      detail: "6+",
      detail2: "SPEAKERS",
    },
  ];

  const speakers = [
     {
      id: 1,
      name: "Coach Carl Maes",
      title: "PTR International Coaching Director",
      specialty: "Advanced Technique",
      image: "/Carl.jpg",
    },
    {
      id: 2,
      name: "Coach Pfungwa Mahefu",
      title: "Founder & President, CATE",
      image: "/pfungwa.jpg",
    },
      {
      id: 3,
      name: "Novak Dario",
      title: "Sports Performance Coach",
      specialty: "Athlete Performance",
      image: "/novak.jpeg",
    },
    // {
      
    //   id: 4,
    //   name: "Mr Shina Atilola",
    //   title: "Director, Premium Trust Bank",
    //   specialty: "Advanced Technique",
    //   image: "/Shina.jpg",
    //   undisclosed: true
    // },
   
    {
      id: 4,
      name: "Rotimi Akinloye",
      title: "Past Nigeria Tennis Director",
      specialty: "Advanced Technique",
      image: "/Rotimi.jpg",
      undisclosed: true
    },
  
  ];
  return (
    <div className="min-h-screen ">
      <Hero />
      <div
        className="
        absolute top-[520px] md:top-[520px] lg:top-[600px] w-full 
        bg-green-100
        left-1/2 -translate-x-1/2
        
        
        mx-auto
        min-h-[1200px]
      "
      >
        <div
          className="
        absolute top-20 md:top-30 w-full 
        bg-[#40A700]
        rounded-none md:rounded-[40px] 
        
        mx-auto
        min-h-[1200px]
      "
        >
          <div
            className="
        absolute top-5  w-full 
        bg-white
         rounded-none md:rounded-t-4xl
        
        mx-auto
        min-h-[1200px]
      "
          ></div>
        </div>
      </div>

      {/* <Background></Background> */}

      <section className=" relative py-12 bottom-0 md:bottom-8 lg:bottom-10  w-full ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl py-6 md:py-12  md:px-12 -mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center justify-center">
              {details.map((item, index) => (
                <div
                  key={index}
                  className={`${spaceGrotesk.className} lg:gap-4 gap-2 sm:gap-3 flex  justify-center text-center items-center font-bold text-sm sm:text-base md:text-lg`}
                >
                  <span className="text-xl md:text-2xl flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="">
                    <p
                      className={`${spaceGrotesk.className} text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight`}
                    >
                      {item.detail}
                    </p>
                    <p
                      className={`${spaceGrotesk.className} text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight`}
                    >
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
      <About />

      {/* what to expect */}
      <Expectation />

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {speakers.map((item) => (
              <div key={item.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden h-64 md:h-80">
                    <Image
                      src={`${item.undisclosed ? "/Sil.jpg" : item.image}`}
                      alt={item.name}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3  className={`${item.undisclosed ? "text-red-500" : ""}`}>{`${item.undisclosed ? "Undisclosed" : item.name}`}</h3>
                    <p className={`${item.undisclosed ? "text-red-500" : ""}`}>{`${item.undisclosed ? "Undisclosed" : item.title}`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/program#speakers">
            <Button className="bg-[#40A700] hover:bg-[#357A00] text-white px-8 py-3 font-bold">
              VIEW MORE SPEAKERS
            </Button>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* payment plans */}
      <Packages />

      {/* sponsors */}
      <div></div>
    </div>
  );
}
