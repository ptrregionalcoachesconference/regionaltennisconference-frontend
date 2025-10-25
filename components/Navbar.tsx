"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
// import Navitems from "@/components/Navitems";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

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
      name: "Program",
      path: "/program",
      dropdown: [
        {
          name: "Speakers",
          path: "/program/speakers",
        },
        {
          name: "Schedule",
          path: "/program/schedule",
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  return (
    <nav
      className={`w-full fixed  top-0 left-0 right-0 z-50 px-6 py-4  transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center max-w-7xl">
        {/* logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        {/* desktop navigation */}
        <ul className="hidden md:flex  space-x-8 items-center ">
          {links.map((link, index) => {
            const isActive: boolean = pathname === link.path;
            const textColor =
              isScrolled || !isHome ? "text-black" : "text-white";
            if (link.dropdown) {
              return (
                <li
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div
                    className={`flex items-center space-x-1 ${
                      isScrolled ? "text-black" : "text-white"
                    } hover:text-[#40A700]`}
                  >
                    <Link
                      href={link.path}
                      className={`${textColor} hover:text-[#40A700] transition-colors ${
                        isActive
                          ? "underline underline-offset-8 decoration-[#40A700]"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>

                    <RiArrowDropDownLine
                      className="text-xl"
                      onClick={() => setShowDropdown(!showDropdown)}
                    />
                  </div>

                  {/* dropdown items */}
                  <ul className="absolute left-0 mt-2 hidden w-40 bg-white text-black rounded-lg shadow-lg group-hover:block">
                    {link.dropdown.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.path ?? "#"}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={() => setShowDropdown(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li
                key={index}
                className={`group ${textColor}  ${
                  isActive && `underline underline-offset-8  decoration-white`
                } ${
                  link.name === "Register" ? " text-[#40A700]  rounded-lg" : ""
                }`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/register">
            <Button className="bg-white text-[#40A700] hover:bg-accent">
              Register
            </Button>
          </Link>
        </div>

        {/* mobile menu button */}
        <div className="md:hidden block cursor-pointer">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
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
        <div className="md:hidden bg-white block mt-3 absolute w-full">
          <div className="">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block px-6 py-3 text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/register">
              <Button className="w-[90%] mx-auto mt-3 bg-white text-[#40A700] ">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
