import React from "react";

// Same green hero used on your Contact, Program and Certification pages.
export default function ArchiveHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="pb-8 md:pb-12">
      <div className="relative bg-gradient-to-br from-[#71E529] to-[#40A700] overflow-hidden">
        <div
          className="absolute -bottom-1 left-0 right-0 h-20 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col justify-center items-center text-center sm:px-6 lg:px-8 py-20">
            <p className="text-white tracking-wider mb-4 uppercase">{eyebrow}</p>
            <h1 className="text-white uppercase text-3xl md:text-5xl mb-5 italic">
              {title}
            </h1>
            {children && (
              <div className="text-white text-base md:text-lg max-w-2xl">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}