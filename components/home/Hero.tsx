"use client";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import Sponsors from "@/components/Sponsors"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  //  weight:400,
  variable: "--font-space-grotesk",
});

const Hero = () => {
  const btnTexts = [
    {
      name: "REGISTER",
      link: "/register",
    },
    {
      name: "LEARN MORE",
      link: "/about",
    },
  ];

  return (
    <section className=" relative  min-h-[500px] md:min-h-[600px]  bg-cover bg-center tranition-all duration-500 ease-in-out overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/edit2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#40A700]/60"></div>
      {/* hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-5">
        <div className="mx-auto md:max-w-6xl max-w-4xl text-white">
          <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-[1.75rem] leading-[1] sm:leading-tight md:leading-tight mb-4 sm:mb-5 md:mb-6 font-bold">
            AFRICAN REGIONAL TENNIS COACHES CONFERENCE{" "}
            <span className="text-[#53D900] ">2026</span>
          </h1>
          <p className={`md:text-lg text-md mb-5 ${spaceGrotesk.className}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            velit provident voluptatem, debitis delectus, architecto quae veniam
            eum nesciunt beatae saepe modi expedita nemo reiciendis temporibus
            sequi? Repudiandae, voluptates cupiditate.
          </p>
          <div className="space-x-3 mt-4">
            {btnTexts.map((item, index) => (
              <Button
                key={index}
                className={`font-bold text-sm  md:text-md px-6 py-4 ${
                  item.link === "/register"
                    ? "bg-white text-[#40A700]"
                    : "bg-transparent text-white border-white border"
                }`}
              >
                <Link href={item.link}>{item.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
