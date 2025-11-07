"use client";
import React from "react";

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h4 className="text-4xl md:text-5xl font-bold">
            Registration pricing
          </h4>
          <p className="font-semibold text-lg text-gray-500">
            Lock in your early bird rate and save on certification courses
          </p>
        </div>

        {/* prices */}
        <div className="grid grid-cols-1 md:grid-cols-3"></div>
        {/* notice */}
        <div className="border-gray-200 border bg-gray-200 mt-12 p-8 rounded-xl text-center">
          <p className="text-2xl font-bold mb-3">Important Notice</p>
          <p className="text-lg leading-relaxed">
            For the Certification Workshop, please review your study materials
            thoroughly before the event. Success in the certification exam
            requires dedicated preparation and understanding of all course
            materials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
