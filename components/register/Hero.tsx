"use client";
import React from "react";
const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      
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
                 Register Now
                </p>
                <h1 className="text-white uppercase text-3xl md:text-5xl mb-5 ">
                Register for the Regional Coaches Conference Today
                </h1>
                <p className="text-base sm:text-base md:text-lg max-w-2xl">
                  Have questions about the Regional Coaches Conference?
                  We&apos;re here to help. Reach out to us and we&apos;ll get
                  back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
