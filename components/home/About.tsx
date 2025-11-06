"use client"
import Image from "next/image"
import Link from "next/link"
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const About = () => {
  return (
    <div>
        <div className="w-full bg-gray-100 relative py-20   ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 gap-12 md:gap-16 md:grid-cols-2 items-center">
            {/* image side */}
            <div className="relative w-full h-[500px]">
              {/* back img */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 z-0">
                <Image
                  src="/about.jpg"
                  alt="aboutimg"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* frontimg */}
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 z-10">
                <Image
                  src="/coaches.jpg"
                  alt="coaches"
                  fill
                  className="object-cover shadow-2xl rounded-2xl border-4 border-white "
                />
              </div>
            </div>
            {/* text-side */}
            <div className="space-y-6">
              <h1 className="text-center md:text-left text-3xl md:text-4xl w-full  font-bold  md:mx-0   mb-5">
                ABOUT THE CONFERENCE
              </h1>
              <p
                className={`w-full max-w-5xl text-base md:text-lg text-center md:text-left mb-12 ${spaceGrotesk.className}  `}
              >
                The Professional Tennis Registry (PTR) is a global tennis
                coaches organization with over 134,000 members worldwide.
                Founded in 1975 by Van der Meer, PTR has grown to become the
                most widely recognized and respected tennis teaching
                organization in the world.
                <Link href="/about#about" className="text-[#407900] font-bold ">
                  Read more...
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
