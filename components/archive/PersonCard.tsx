import Image from "next/image";
import type { Person } from "@/data/editions";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
      <div className="relative h-64 shrink-0">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold">{person.name}</h3>
        <p className="text-sm font-semibold text-[#40A700]">{person.role}</p>
        {person.bio && (
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">{person.bio}</p>
        )}
        {person.specialties && person.specialties.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {person.specialties.map((sp) => (
              <span
                key={sp}
                className="px-2 py-1 bg-[#71E529]/20 rounded-full text-xs font-semibold"
              >
                {sp}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}