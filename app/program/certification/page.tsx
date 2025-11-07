"use client";
import React from "react";
import Reason from "@/components/certification/Reason"
import Program from "@/components/certification/Program";
import Pricing from '@/components/certification/Pricing'
import FAQ from "@/components/certification/FAQ"

const page = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
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
                <p className="uppercase text-white tracking-wider mb-4">
                  Professional Development
                </p>
                <h1 className="text-white uppercase text-3xl md:text-5xl mb-5">
                  PTR Workshops & Certifications
                </h1>
                <p className="text-base sm:text-base md:text-lg max-w-2xl">
                  Elevate your coaching expertise with specially trained PTR
                  Coach Developers. PTR Certification and Education Workshops
                  are the most successful training courses available for tennis
                  teachers and coaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reason />
      <Program />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default page;
