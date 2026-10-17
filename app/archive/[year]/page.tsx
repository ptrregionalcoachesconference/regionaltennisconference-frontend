import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getEdition, getAdjacent, pastEditions } from "@/data/editions";
import ArchiveHero from "@/components/archive/ArchiveHero";
import YearSwitcher from "@/components/archive/YearSwitcher";
import PersonCard from "@/components/archive/PersonCard";
import OrganizerGrid from "@/components/archive/OrganizerGrid";
import { Button } from "@/components/ui/button";

type Params = { params: Promise<{ year: string }> };

export function generateStaticParams() {
  return pastEditions.map((e) => ({ year: String(e.year) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { year } = await params;
  const edition = getEdition(Number(year));
  if (!edition) return {};
  return {
    title: `${edition.year}: ${edition.theme} | PTR Regional Coaches Conference`,
    description: edition.summary,
  };
}

export default async function EditionPage({ params }: Params) {
  const { year } = await params;
  const edition = getEdition(Number(year));
  if (!edition || edition.status !== "past") notFound();

  const { newer, older } = getAdjacent(edition.year);
  const sectionTitle = "text-3xl md:text-4xl font-bold italic text-center mb-10";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#71E529]/10 to-[#40A700]/5 -z-10" />

      <ArchiveHero eyebrow={`${edition.dates}, ${edition.venue}`} title={`${edition.year}: ${edition.theme}`}>
        {edition.summary && <p>{edition.summary}</p>}
      </ArchiveHero>

      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-20">
        <YearSwitcher current={edition.year} />

        {edition.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {edition.stats.map((s) => (
              <div key={s.label} className="text-center bg-gray-200 border border-gray-400 rounded-xl p-6">
                <p className="text-4xl font-bold text-[#40A700]">{s.value}</p>
                <p className="text-sm font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {edition.highlights.length > 0 && (
          <section>
            <h2 className={sectionTitle}>Highlights</h2>
            <ul className="max-w-2xl mx-auto space-y-3">
              {edition.highlights.map((h) => (
                <li key={h} className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#40A700] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {edition.organizers.length > 0 && (
          <section>
            <h2 className={sectionTitle}>Meet the Organizers</h2>
            <OrganizerGrid organizers={edition.organizers} />
          </section>
        )}

        {edition.speakers.length > 0 && (
          <section>
            <h2 className={sectionTitle}>Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {edition.speakers.map((s) => (
                <PersonCard key={s.name} person={s} />
              ))}
            </div>
          </section>
        )}

        {edition.videoUrl && (
          <section>
            <h2 className={sectionTitle}>Watch the recap</h2>
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-400">
              <iframe
                src={edition.videoUrl}
                title={`${edition.year} conference recap`}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        )}

        {edition.gallery.length > 0 && (
          <section>
            <h2 className={sectionTitle}>Photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {edition.gallery.map((img) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-64"
                />
              ))}
            </div>
          </section>
        )}

        {edition.testimonials.length > 0 && (
          <section>
            <h2 className={sectionTitle}>What attendees said</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {edition.testimonials.map((t) => (
                <figure key={t.author} className="bg-gray-200 border border-gray-400 rounded-xl p-8">
                  <blockquote className="text-lg">{t.quote}</blockquote>
                  <figcaption className="mt-4 font-semibold text-[#40A700]">{t.author}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <nav aria-label="Previous and next year" className="flex justify-between gap-4 border-t border-gray-400 pt-8">
          {older ? (
            <Link href={`/archive/${older.year}`} className="hover:text-[#40A700] font-semibold">
              Back to {older.year}
            </Link>
          ) : <span />}
          {newer ? (
            <Link href={`/archive/${newer.year}`} className="hover:text-[#40A700] font-semibold">
              Forward to {newer.year}
            </Link>
          ) : <span />}
        </nav>

        <div className="text-center">
          <Link href="/register">
            <Button className="bg-[#40A700] hover:bg-[#357A00] text-white font-bold px-8">
              Register for the next conference
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}