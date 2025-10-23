import React from "react";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";

const Expect = () => {
  return (
    <div className="py-20 w-full bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
            {/* text-place */}
            <h1>WHAT TO EXPECT</h1>
            {/* scroll area */}
          <div>

          </div>
          {/* image side */}
          <div className="relative w-full h-[500px]">
            {/* back img */}
            <div className="absolute top-0 left-0 w-3/4 h-3/4 z-0">
              <Image
                src="/about.jpg"
                alt="aboutimg"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* frontimg */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 z-10">
              <Image
                src="/coaches.jpg"
                alt="coaches"
                fill
                className="object-cover shadow-2xl rounded-2xl border-4 border-white "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expect;
