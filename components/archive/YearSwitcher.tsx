import Link from "next/link";
import { pastEditions } from "@/data/editions";

export default function YearSwitcher({ current }: { current?: number }) {
  return (
    <nav aria-label="Conference years" className="flex flex-wrap justify-center gap-2">
      {pastEditions.map((e) => {
        const active = e.year === current;
        return (
          <Link
            key={e.year}
            href={`/archive/${e.year}`}
            aria-current={active ? "page" : undefined}
            className={`px-5 py-2 rounded-full border font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#40A700] ${
              active
                ? "bg-[#40A700] border-[#40A700] text-white"
                : "bg-gray-200 border-gray-400 hover:border-[#40A700] hover:text-[#40A700]"
            }`}
          >
            {e.year}
          </Link>
        );
      })}
    </nav>
  );
}