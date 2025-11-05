import React from "react";
import Image from "next/image";

const Venue = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center container gap-6 mx-auto max-w-6xl py-20 px-6">
        <div className="h-96 relative rounded-xl overflow-hidden">
          <Image
            src="/ptr.jpg"
            alt="ptr"
            fill
            className="object-cover w-full h-full mx-auto"
          />
        </div>
        <div className="space-y-6">
          <p className="text-[#40A700] text-sm font-semibold uppercase">
            Venue Information
          </p>
          <p className="text-4xl font-bold ">Conference Location</p>

          <div>
            <div className="space-y-6">
              <div className="border border-gray-500 bg-gray-300 p-6 rounded-xl">
                <h3 className="mb-3">Nicon Luxury Hotel, Abuja, Nigeria</h3>
                <p className="font-bold mb-2">
                  Phone: <span className="font-light text-sm">+1 (312) 493 7113</span>
                </p>
                <p className="font-bold">
                  Email:{" "}
                  <span className="font-light text-sm max-w-2xl">
                    ptrregionalcoachesconference@gmail.com
                  </span>
                </p>
              </div>
              {/* facilities */}
              <div className="space-y-4">
                <h3>Venue Facilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "🎤 Multiple Conference Halls",
                    "🅿️ Ample Parking Space",
                    "📶 High Speed Wifi",
                    "☕Premium Catering",
                    "🚺 Accessible Facilities",
                    "🏨 Hotel Patnerships"
                  ].map((facility, i)=> (
                    <div key={i} className="flex items-center  gap-2">
                      <div className="w-2 h-2 bg-[#40A700] rounded-full" />
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div>
                    <div className="space-y-4">
                      {PTR.map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="w-1 h-12 bg-[#71E529] rounded-full"></div>
                          <div>
                            <p className="font-bold text-lg text-[#40A700]">{item.title}</p>
                            <p>{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
        </div>
      </div>
    </div>
  );
};

export default Venue;
