"use client";
import React from "react";
import Link from "next/link"
import { Button } from "../ui/button";
const Cta = () => {
  return (
    <div className="py-20 bg-gray-200 border border-gray-400">
      <div className="mx-auto max-w-7xl text-center items-center ">
        <h3 className="text-2xl md:text-4xl mb-4 italic">Ready to Attend?</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Don&apos;t hesitate to contact us with any questions about the
          conference. Our team is excited to help you make the most of this
          incredible event.
        </p>
        <Link href="/register">
        <Button className="bg-[#40A700] hover:bg-[#40A700]/80 text-black  hover:text-white cursor-pointer">
          Register for Conference
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
