"use client";
import { Card, CardContent } from "@/components/ui/card";
import { BsTrophy } from "react-icons/bs";
import { GiTennisBall } from "react-icons/gi";
import { PiCertificate } from "react-icons/pi";
import { BiNetworkChart } from "react-icons/bi";
import { PiSuitcaseSimpleLight, PiRadioBold } from "react-icons/pi";
import { FaAward } from "react-icons/fa";

const Expectation = () => {
  const expectation = [
    {
      icon: <BsTrophy className="w-6 h-6 text-white" />,
      name: "World-Class Presentations",
      description:
        "Engaging talks by renowned tennis coaches and industry experts.",
    },
    {
      icon: <GiTennisBall className="w-6 h-6 text-white" />,
      name: "On-Court Practical Sessions",
      description: "Hands-on coaching clinics and demonstrations.",
    },
    {
      icon: <PiCertificate className="w-6 h-6 text-white" />,
      name: "PTR Certification And Coaching Development Programs",
      description:
        "Opportunities to earn certifications with global recognition.",
    },
    {
      icon: <BiNetworkChart className="w-6 h-6 text-white" />,
      name: "Networking Opportunities With Coaches And Industry Experts",
      description:
        "Connect with peers and leaders in the tennis coaching community.",
    },
    {
      icon: <PiSuitcaseSimpleLight className="w-6 h-6 text-white" />,
      name: "Business And Branding Sessions For Tennis Professionals",
      description:
        "Learn strategies to grow your coaching business and personal brand.",
    },
    {
      icon: <PiRadioBold className="w-6 h-6 text-white" />,
      name: "Exhibitions And Product Demonstrations",
      description:
        "Explore the latest tennis equipment and technology from top brands.",
    },
    {
      icon: <FaAward className="w-6 h-6 text-white" />,
      name: "Recognition And Awards",
      description:
        "Celebrate excellence in tennis coaching with special awards.",
    },
    {
      icon: <FaAward className="w-6 h-6 text-white" />,
      name: "Recognition And Awards ",
      description:
        "Celebrate excellence in tennis coaching with special awards.",
    },
  ];
  return (
    <div>
      <section className="w-full py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#71E529] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">
                60+
              </div>
              <div className="text-gray-600">Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">
                12+
              </div>
              <div className="text-gray-600">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">
                3
              </div>
              <div className="text-gray-600">Days</div>
            </div>
            {/* <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#40A700] mb-2">
                10+
              </div>
              <div className="text-gray-600">Countries</div>
            </div> */}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            WHAT TO EXPECT
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expectation.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Number badge */}
                {/* <div className="absolute top-4 right-4 w-8 h-8 bg-[#71E529] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div> */}

                <CardContent className="p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#71E529] to-[#40A700] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white text-3xl">{item.icon}</span>
                  </div>
                  <p className="font-bold text-lg mb-2">{item.name}</p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expectation;
