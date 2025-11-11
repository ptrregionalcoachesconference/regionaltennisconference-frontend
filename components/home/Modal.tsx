"use client";
import React from "react";
import Link from "next/link"
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
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
          <p className="mt-3 mb-5 text-lg">
            You will be required to pay a registration fee of{" "}
            <span className="text-[#71E529]">$30</span>
          </p>
          <div>
            <Link href="/register">
            <Button className="bg-[#40A700] hover:bg-[#40A700]/80 transition-all cursor-pointer">Proceed to Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
