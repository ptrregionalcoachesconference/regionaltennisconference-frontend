"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const Details = () => {
  const methods = [
    {
      icon: <MdOutlineMailOutline size={30} />,
      title: "Email",
      text: "Send us your inquiry anytime.",
      content: "ptrregionalcoachesconference",
      link: "mailto:ptrregionalcoachesconference@gmail.com",
      color: "from-blue-500/10 to-blue-500/5",
    },
    {
      icon: <FiPhone size={30} />,
      title: "Call Us",
      text: "Speak with our team directly",
      content: ["+234 806 343 0037", "+1(312)7937113"],
      link: ["tel:+2348063430037", "tel:+1(312)7937113"],
      color: "from-green-500/10 to-green-500/5",
    },
    {
      icon: <IoLogoWhatsapp size={30} />,
      title: "Whatsapp",
      text: "Chat with us",
      content: ["+1(312)7937113", "+2348063430037"],
      link: ["https://wa.me/13127937113", "https://wa.me/2348063430037"],
      color: "from-purple-500/10 to-purple-500/5",
    },
    {
      icon: <HiOutlineLocationMarker size={30} />,
      title: "Venue Location",
      text: "Where the magic happens",
      content: "Nicon Luxury Hotel, Abuja, Nigeria",
      color: "from-amber-500/10 to-amber-500/5",
    },
    {
      icon: <FaRegClock size={30} />,
      title: "Conference Runtime",
      text: "When we're available",
      content: "April 15th - April 19th",
      color: "from-red-500/10 to-red-500/5",
    },
    {
      icon: <FiUsers size={30} />,
      title: "Follow us",
      text: "Stay connected on social media",
      content: "@ptr_artcc",
      link: "https://www.instagram.com/ptr_artcc?igsh=cnRwdzd6bHBvZGNr ",
      color: "from-pink-500/10 to-pink-500/5",
    },
  ];
  //   const [isCardHovered, setCardHovered] = useState<number | null>(null);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h4 className="text-4xl md:text-5xl font-bold italic">Get in Touch</h4>
          <p className="text-gray-700 font-semibold text-lg">
            Reach out to us through any of these channels. We&apos;re here to
            help.
          </p>
        </div>

        {/* details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => {
           
            return (
              <div
                key={index}
                className="border border-gray-400 group relative bg-gray-200 p-8 rounded-lg overflow-hidden  transition-all duration-300 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-400/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 `}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 text-[#40A700] group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <p className="text-xl font-semibold mb-2 group-hover:text-[#40A700] transition-colors duration-300">
                    {method.title}
                  </p>
                  <p className="text-sm mb-4 group-hover:text-black/80">
                    {method.text}
                  </p>
                  {method.link ? (
                    Array.isArray(method.link) &&
                    Array.isArray(method.content) ? (
                      <div className="flex flex-col gap-2">
                        {method.link.map((link, i) => (
                          <Link
                            key={i}
                            href={link}
                            className="text-base font-medium text-[#40A700] hover:underline"
                          >
                            {method.content[i]}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={method.link as string}
                        className="text-base font-medium text-[#40A700] hover:underline"
                      >
                        {method.content as string}
                      </Link>
                    )
                  ) : (
                    <p className="text-base font-medium text-[#40A700]">
                      {method.content as string}
                    </p>
                  )}

                  <div className="absolute bottom-0 left-0 h-1 bg-[#71E529] w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Details;
