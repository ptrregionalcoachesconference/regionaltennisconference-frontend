import type { Person } from "@/data/editions";
import OrganizerCard from "@/components/archive/OrganizerCard";

// Lays out organizers centered: 1-2 people sit two per row,
// 3 or more sit three per row on wide screens.
export default function OrganizerGrid({ organizers }: { organizers: Person[] }) {
  const width =
    organizers.length >= 3
      ? "md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
      : "md:w-[calc(50%-1.5rem)]";

  return (
    <div className="flex flex-wrap justify-center gap-12">
      {organizers.map((person) => (
        <div key={person.name} className={`w-full ${width} max-w-md`}>
          <OrganizerCard person={person} />
        </div>
      ))}
    </div>
  );
}