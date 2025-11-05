import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Program",
      path: "/program",
    },
  ];

  const contactInfo = [
    {
      name: "Email:coachesconference@gmail.com",
      path: "mailto:ptrregionaltenniscoachesconference@gmail.com",
    },
    {
      name: "Phone:+1(312) 493-7113",
      path: "https://wa.me/13124937113",
    },
    {
      name: "Location: Abuja, Nigeria",
    },
  ];
  const socialMedia = [
    {
      name: "Facebook",
      path: "https://www.facebook.com/profile.php?id=100089732201137",
    },
    {
      name: "Twitter",
      path: "https://twitter.com/PtrTennis",
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/ptrtennis/",
    },
  ];
  return (
    <footer className="py-12 border-t border-border bg-foreground ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          <div>
            <div className=" justify-center ">
              <Image src="/Green+.png" alt="logo" width={100} height={100} className="object-cover w-auto" />
            </div>
          </div>
          <div>
            <h4 className="text-white">Quick Links</h4>
            <ul className="space-y-2 flex flex-col text-sm opacity-70">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="cursor-pointer text-white hover:opacity-100"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* contact info */}
          <div>
            <h4 className="text-white">Contact</h4>
            <ul className="space-y-2 flex flex-col text-sm opacity-70">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.path ? item.path : "#"}
                  className="cursor-pointer text-white hover:opacity-100"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>

          {/* social media */}
          <div>
            <h4 className="text-white">Social Links</h4>
            <ul className="space-y-2 flex flex-col text-sm opacity-70">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="cursor-pointer text-white hover:opacity-100"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
          <p className="text-white">
            &copy; {new Date().getFullYear()} African Regional Tennis Coaches
            Conference. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
