"use client";
import React from "react";
import { CiGlobe } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FiAward } from "react-icons/fi";

const Reason = () => {
  const whys = [
    {
      icon: <CiGlobe size={25} />,
      title: "3+ Workshops",
      desc: "Conducted annually",
    },
    {
      icon: <BsPeople size={25} />,
      title: "Diverse Backgrounds",
      desc: "Tennis professionals, coaches, and educators",
    },
    {
      icon: <IoMdCheckmarkCircleOutline size={25} />,
      title: "Expert Leaders",
      desc: "Led by specially trained PTR Coach Developers",
    },
    {
      icon: <FiAward size={25} />,
      title: "Recognized Certification",
      desc: "Awarded upon successful exam completion",
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h4 className="text-4xl md:text-5xl font-bold">
            Why Choose PTR Workshops?
          </h4>
          <p className="font-semibold text-lg text-gray-500">
            World-class training from industry leaders
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whys.map((why, index) => (
            <div
              key={index}
              className="border-gray-400 border p-6 bg-gray-200 group rounded-xl hover:border-[#40A700] hover:shadow-xl hover:shadow-[#40A700]/10 transition-all duration-300"
            >
              <div className="mb-4 inline-block p-3 bg-[#40A700]/10 rounded-lg group-hover:b-[#40A700]/20 transition-colors">
                <span className="w-6 h-6 text-[#40A700]">{why.icon}</span>
              </div>
              <p className="text-lg font-bold  mb-2 ">{why.title}</p>
              <p className="text-sm leading-relaxed">{why.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reason;
