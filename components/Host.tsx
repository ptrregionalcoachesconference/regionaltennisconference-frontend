import React from "react";
import { upcomingEdition } from "@/data/editions";
import OrganizerGrid from "@/components/archive/OrganizerGrid";

// "Meet the Organizers" on the About page.
// The people now come from data/editions.ts (the upcoming edition),
// so you never edit this file to change organizers.
const Host = () => {
  const organizers = upcomingEdition?.organizers ?? [];
  if (organizers.length === 0) return null;

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl italic">Meet the Organizers</h1>
          <p className="text-lg">
            Leading experts shaping the future of tennis coaching
          </p>
        </div>
        <OrganizerGrid organizers={organizers} />
      </div>
    </section>
  );
};

export default Host;