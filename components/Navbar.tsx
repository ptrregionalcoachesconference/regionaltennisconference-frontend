"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
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
          path: "/program#speakers",
        },
        {
          name: "Schedule",
          path: "/program#schedule",
        },
        {
          name: "Certification",
          path: "/program/certification"
        }
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
  const [showMobileDropdown, setShowMobileDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // dropdown close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isHome = pathname === "/";

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMobileDropdownClick = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex justify-between items-center max-w-7xl">
        {/* logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        {/* desktop navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {links.map((link, index) => {
            const isActive: boolean = pathname === link.path;
            const textColor =
              isScrolled || !isHome ? "text-black" : "text-white";

            if (link.dropdown) {
              return (
                <li key={index} className="relative" ref={dropdownRef}>
                  <div
                    className={`flex items-center space-x-1 cursor-pointer ${textColor} hover:text-[#40A700] transition-colors`}
                    onClick={handleDropdownClick}
                  >
                    <span
                      className={`${
                        isActive
                          ? "underline underline-offset-8 decoration-[#40A700]"
                          : ""
                      }`}
                    >
                      {link.name}
                    </span>
                    <RiArrowDropDownLine
                      className={`text-xl transition-transform duration-300 ${
                        showDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* dropdown with animation */}
                  <ul
                    className={`absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out origin-top ${
                      showDropdown
                        ? "opacity-100 scale-y-100 visible"
                        : "opacity-0 scale-y-0 invisible"
                    }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.path ?? "#"}
                          className="block px-4 py-2 hover:bg-gray-200 transition-colors"
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
                className={`${textColor} hover:text-[#40A700] transition-colors ${
                  isActive &&
                  `underline underline-offset-8 decoration-[#40A700]`
                }`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link href="/register">
            <Button
              className={` ${
                isScrolled
                  ? "bg-[#40A700] text-white"
                  : "bg-white text-[#40A700]"
              }`}
            >
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
        <div className="md:hidden bg-white block mt-3 absolute w-full left-0 shadow-lg">
          <div className="pb-4">
            {links.map((item, index) => {
              if (item.dropdown) {
                return (
                  <div key={index}>
                    <div
                      className="flex items-center justify-between px-6 py-3 text-black cursor-pointer hover:bg-gray-100"
                      onClick={handleMobileDropdownClick}
                    >
                      <span>{item.name}</span>
                      <RiArrowDropDownLine
                        className={`text-2xl transition-transform duration-300 ${
                          showMobileDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {/* Mobile dropdown items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        showMobileDropdown ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path ?? "#"}
                          className="block pl-12 pr-6 py-2 text-black hover:bg-gray-100"
                          onClick={() => {
                            setIsOpen(false);
                            setShowMobileDropdown(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={index}
                  href={item.path}
                  className="block px-6 py-3 text-black hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link href="/register" className="block px-6 mt-3">
              <Button
                className={`w-full bg-[#40A700] text-white hover:bg-[#359600] `}
              >
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
