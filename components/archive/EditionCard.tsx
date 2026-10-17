import Link from "next/link";
import Image from "next/image";
import type { Edition } from "@/data/editions";

export default function EditionCard({ edition }: { edition: Edition }) {
  const cover = edition.gallery[0];
  return (
    <Link
      href={`/archive/${edition.year}`}
      className="group flex flex-col border border-gray-400 bg-gray-200 rounded-xl overflow-hidden hover:border-[#40A700] hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-[#40A700]"
    >
      {cover ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="h-48 bg-gradient-to-br from-[#71E529] to-[#40A700] flex items-center justify-center">
          <span className="text-6xl italic text-white font-bold">{edition.year}</span>
        </div>
      )}
      <div className="p-6">
        <p className="text-3xl font-bold text-[#40A700]">{edition.year}</p>
        <p className="font-semibold mt-1">{edition.theme}</p>
        <p className="text-sm text-gray-700 mt-1">
          {edition.dates}, {edition.venue}
        </p>
        <p className="text-sm font-semibold text-[#40A700] mt-4 group-hover:underline">
          View the recap
        </p>
      </div>
    </Link>
  );
}