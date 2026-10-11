"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const AnticipateModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Close on Escape and lock page scroll while the modal is open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="anticipate-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white px-6 py-10 text-center shadow-xl sm:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        <p className="text-6xl font-bold text-[#40A700] sm:text-7xl">2027</p>

        <h2
          id="anticipate-title"
          className="mt-4 text-2xl font-semibold text-gray-900"
        >
          Anticipate 2027
        </h2>

        <p className="mt-3 text-base text-gray-600">
          Something new is on the way. Registration opens soon, so keep an eye
          on this page.
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mt-8 w-full rounded-md bg-[#40A700] px-4 py-2.5 font-medium text-white hover:bg-[#71E529] hover:text-black"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default AnticipateModal;