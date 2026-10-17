import Link from "next/link";
import { pastEditions } from "@/data/editions";
import EditionCard from "@/components/archive/EditionCard";

// Drop <PastEditions /> into app/page.tsx, e.g. right after the speakers section.
export default function PastEditions() {
  if (pastEditions.length === 0) return null;
  return (
    <section className="w-full px-4 md:px-8 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-10 italic text-center md:text-left">
          PAST CONFERENCES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {pastEditions.slice(0, 3).map((e) => (
            <EditionCard key={e.year} edition={e} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/archive"
            className="font-bold text-[#40A700] hover:underline"
          >
            Browse the full archive
          </Link>
        </div>
      </div>
    </section>
  );
}