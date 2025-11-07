"use client";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Program = () => {
  const programs = [
    {
      id: 1,
      name: "10 & Under Certification",
      desc: "Specilized trainin for caching young players aged 10 & under:",
      items: [
        "Fundamental Skill development",
        "Age-appropriate teaching methods",
        "Game Introduction",
      ],
    },
    {
      id: 2,
      name: "11-17 years junior Development",
      desc: "Comprehensive certification for coaching competitive junior players",
      items: [
        "Advanced Technical training",
        "Competitive match preparation",
        "Tournament srategy",
      ],
      highlighted: true,
    },
  ];
  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h4 className="text-4xl md:text-5xl font-bold">
            Certification Programs
          </h4>
          <p className="font-semibold text-lg text-gray-500">
            Two specialized tracks for different age groups
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Card
              key={program.id}
              className={`flex flex-col h-full transition-all ${
                program.highlighted
                  ? "border border-[#40A700]/50 bg-gray-300 shadow-lg"
                  : "hover:shadow-md bg-gray-200"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {program.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="mb-5">{program.desc}</p>

                <div className="space-y-2">
                  {program.items.map((items, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <IoMdCheckmark className="flex-shrink-0 w-4 h-4" />
                      <span className="text-sm">{items}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
