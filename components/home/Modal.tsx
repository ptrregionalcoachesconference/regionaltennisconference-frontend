"use client";
import React, { useRef } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, onOpen }: ModalProps) => {
  // const pathname = usePathname()
  const payPlans = [
    {
      name: "Early Bird:",
      price: "30",
      date: "Nov 20th 2025 - Jan 31st 2025",
    },
    {
      name: "Late Reg:",
      price: "50",
      date: "Feb 16th 2026 - Mar 30th 2026",
    },
  ];
  
  const hasRun = useRef(false);

  if (!hasRun.current) {
    hasRun.current = true;
    setTimeout(() => {
      onOpen();
    }, 6000);
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 w-[90%] max-w-md shadow-2xl shadow-[#40A700]/50 hover:shadow-[#71E529]/50 rounded-lg">
        <IoMdClose
          className="absolute tp-5 right-4 cursor-pointer text-gray-500 hover:text-black"
          size={24}
          onClick={onClose}
        />
        <div className="px-3 py-5 flex flex-col justify-center items-center ">
          <p className="text-red-500 text-2xl font-bold ">Notice!!!</p>
          <h3 className="text-lg">REGISTRATION FEE</h3>
          <p className="mt-3 mb-5 text-lg justify-center items-center flex flex-col">
            This fee is exclusive of the conference package which has to be paid
            before proceeding to the conference payment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-3 md:mt-5 mb-4 bg-gray-100 rounded-lg">
            {payPlans.map((item, idx) => (
              <div key={idx} className="px-4 py-5">
                <div className="flex gap-3">
                  <p className="text-md font-bold">{item.name}</p>
                  <span className="text-[#71E529] text-md font-semibold">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm">Duration: {item.date}</p>
              </div>
            ))}
          </div>
          <div>
            <Link href="/register">
              <Button className="bg-[#40A700] hover:bg-[#40A700]/80 transition-all cursor-pointer ">
                Proceed to Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
