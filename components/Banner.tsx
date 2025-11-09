"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <div className="py-20 px-6 bg-[#40A700]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center justify-center text-white">
          <h1 className="text-3xl md:text-4xl mb-5 italic">Ready to be a part of the historic first edition?</h1>
          <p className="text-sm md:text-lg mb-5">Join coaches and tennis professionals from across Africa</p>
          <Link href="/register">
            <Button className="bg-transparent hover:bg-white border w-full  text-white hover:text-black cursor-pointer">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
