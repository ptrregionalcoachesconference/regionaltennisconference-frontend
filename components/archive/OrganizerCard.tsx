import Image from "next/image";
import type { Person } from "@/data/editions";

// Matches the layout of the "Meet the Organizers" section on the main site.
export default function OrganizerCard({ person }: { person: Person }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-6 h-96">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="space-y-3">
        <h3 className="italic">
          {person.name}: {person.role}
        </h3>
        {person.title && <p>{person.title}</p>}
        {person.bio && <p>{person.bio}</p>}
        {person.specialties && person.specialties.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {person.specialties.map((sp) => (
              <span
                key={sp}
                className="px-3 py-1 bg-[#71E529]/20 rounded-full text-sm font-medium"
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