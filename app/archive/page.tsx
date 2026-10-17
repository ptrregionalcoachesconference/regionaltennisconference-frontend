import type { Metadata } from "next";
import { pastEditions } from "@/data/editions";
import ArchiveHero from "@/components/archive/ArchiveHero";
import EditionCard from "@/components/archive/EditionCard";

export const metadata: Metadata = {
  title: "Conference Archive | PTR Regional Coaches Conference",
  description: "Recaps, speakers and photos from every past conference.",
};

export default function ArchivePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#71E529]/10 to-[#40A700]/5 -z-10" />
      <ArchiveHero eyebrow="Past conferences" title="Conference Archive">
        <p>Look back at what happened at every edition of the conference.</p>
      </ArchiveHero>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        {pastEditions.length === 0 ? (
          <p className="text-center text-gray-700">
            The first recap will appear here after the conference.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEditions.map((e) => (
              <EditionCard key={e.year} edition={e} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}