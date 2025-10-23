"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
// import Navitems from "@/components/Navitems";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Schedule",
      path: "/schedule",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Register",
      path: "/register",
    },
  ];
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (

    <nav
      className={`w-full fixed  top-0 left-0 right-0 z-50 px-3 py-5 md:px-5 md:py-7 lg:px-7 lg:py-9 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white " : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between ">
        {/* logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        {/* desktop navigation */}
        <ul className="hidden md:flex  space-x-4 ">
          {links.map((link, index) => {
            const isActive: boolean = pathname === link.path;
            return (
              <li
                key={index}
                className={`group  ${
                  isScrolled ? "text-black " : "text-white"
                } ${
                  isActive && `underline underline-offset-10  decoration-white`
                } ${
                  link.name === "Register" ? " text-[#40A700]  rounded-lg" : ""
                }`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* mobile menu button */}
        <div className="md:hidden block cursor-pointer">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <IoMenu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>
      {/* mobile navigation */}
      {isOpen && (
        <div className="md:hidden block absolute w-full">
          <div className="bg-white">
            {links.map((item, index) => (
              <Link key={index} href={item.path} className="block text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
