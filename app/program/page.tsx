"use client";
import React from "react";
import Speakers from "@/components/programs/Speakers";
import Schedule from '@/components/programs/Schedule'
import Venue from "@/components/programs/Venue";
import Banner from "@/components/Banner"

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-[#71E529]/10 to-[#40A700]/5 -z-10" />
      <div className="pb-8 md:pb-12">
        <div className="relative">
          <div className="relative bg-gradient-to-br from-[#71E529] to-[#40A700] overflow-hidden">
            <div
              className="absolute -bottom-1 left-0 right-0 h-20 bg-white"
              style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div className="mx-auto max-w-7xl px-4 ">
              <div className="flex flex-col justify-center items-center text-center sm:px-6 lg:px-8 py-20">
                <p className="text-white tracking-wider mb-4 uppercase">
                  Conference Programs
                </p>
                <h1 className="text-white uppercase text-3xl md:text-5xl mb-5 italic ">
                  Your Complete Conference Experience
                </h1>
                <p className="text-base sm:text-base md:text-lg max-w-2xl italic">
                  Explore our expert speakers, detailed 3-day schedule, and
                  venue information for the Premier Tennis Conference
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* speakers */}
      <Speakers />
      <Schedule />
      <Venue />
      <Banner />
    </div>
  );
};

export default page;
