"use client";
import React from "react";
import Image from "next/image";

// import green from "./../public/green rectangle.png"

const Sponsors = () => {
  const logos = [
    {
      name: "ptr",
      img: "/ptr.png",
    },
    {
      name: "ptr",
      img: "/ptr.png",
    },
    {
      name: "ptr",
      img: "/ptr.png",
    },
    {
      name: "ptr",
      img: "/ptr.png",
    },
    {
      name: "ptr",
      img: "/ptr.png",
    },
    {
      name: "ptr",
      img: "/ptr.png",
    },
  ];

  return (
    <section>
      <div className="">
        {/* <h2>Trusted by over 20+ Organizations</h2>
        <p>In more than 20 countries</p> */}
        <div className=" ">
          <div className="flex gap-2 md:gap-5 lg:gap-20 justify-center flex-wrap items-center   ">
            {logos.map((item, index) => (
              <div key={index}>
                <Image
                  alt="logo"
                  src={item.img}
                  height={150}
                  width={150}
                  className="w-full  md:max-w-[130px] md:max-h-[70px] max-w-[80px] h-full  max-h-[30px]"
                />
              </div>
            ))}
          </div>

          {/* green border */}
          {/* <div>
                <Image src={green} alt="green" width={200} height={200} className="w-full h-[50px] md:w-[50px]" />
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
