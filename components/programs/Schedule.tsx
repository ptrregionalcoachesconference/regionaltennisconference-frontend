"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Schedule = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "April 16, 2026",
      sessions: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Accreditation",
          speaker: "",
          type: "break",
        },
        {
          time: "9:00 AM - 9:30 AM",
          title: "About the conference",
          speaker: "",
          type: "keynote",
        },
        {
          time: "9:30 AM - 10:30 PM",
          title: "Mastering the incoming ball for red stage players",
          speaker: "Mark Tennant",
          type: "break",
        },
        {
          time: "10:30 AM - 12:00 PM",
          title: "Rotational Doubles",
          speaker: "Abdul Idi",
          type: "workshop",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch Break",
          speaker: "",
          type: "break",
        },
        {
          time: "1:00 PM - 2:30 PM",
          title: "Talent Identification",
          speaker: "Rotimi Akinloye",
          type: "panel",
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "Old School Tennis Tournament",
          speaker: "",
          type: "break",
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Kids High Performance Drill",
          speaker: "",
          type: "networking",
        },
         {
          time: "5:30 PM - 7:00 PM",
          title: "",
          speaker: "",
          type: "networking",
        },
      ],
    },
    {
      day: "Day 2",
      date: "April 17, 2026",
      sessions: [
        {
          time: "8:00 AM - 9:00 AM",
          title: "Accreditation",
          speaker: "",
          type: "break",
        },
        {
          time: "9:30 AM - 10:30 AM",
          title: "Developing World Class Players",
          speaker: "Brian De Villiers",
          type: "workshop",
        },
        {
          time: "10:30 AM - 12:00 PM",
          title: "Making Magic Through Movement",
          speaker: "Benson Ishicheli",
          type: "break",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch Break",
          speaker: "",
          type: "workshop",
        },
        {
          time: "1:00 PM - 2:30 PM",
          title: "",
          speaker: "Brian De Villiers",
          type: "break",
        },
        {
          time: "2:30 PM - 4:00 PM",
          title: "Connecting the Serve - 2 Orange or Greeb ball players",
          speaker: "Mark Tennant",
          type: "seminar",
        },
        {
          time: "4:00 PM - 5:30 PM",
          title: "Old School Tennis Tournament",
          speaker: "",
          type: "break",
        },
        {
          time: "5:30 PM - 7:00 PM",
          title: "Kids High Performance Drill",
          speaker: "Brian De Villiers",
          type: "workshop",
        },
      ],
    },
    {
      day: "Day 3",
      date: "April 18, 2026",
      sessions: [
        {
          time: "9:00 AM - 10:30 AM",
          title: "",
          speaker: "Brian De Villiers",
          type: "break",
        },
        {
          time: "10:30 AM - 12:00 PM",
          title: "Business in Tennis",
          speaker: "Shina Atilola",
          type: "keynote",
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch Break",
          speaker: "",
          type: "break",
        },
        {
          time: "1:00 PM - 2:00 PM",
          title: "Patterns of Play",
          speaker: "Benson Ishicheli",
          type: "workshop",
        },
        {
          time: "2:00 PM - 3:00 PM",
          title: "Beat the Bounce - 2 Green Ball players",
          speaker: "Mark Tennant",
          type: "break",
        },
        {
          time: "3:00 PM - 4:30 PM",
          title: "Teaching Methodology Drills",
          speaker: "Rotimi Akinloye",
          type: "panel",
        },
        {
          time: "5:30 PM - 7:00 PM",
          title: "Closing Ceremony, Presentation of Certificates and Awards",
          speaker: "",
          type: "break",
        },
        // {
        //   time: "3:30 PM - 5:00 PM",
        //   title: "Networking Session",
        //   speaker: "",
        //   type: "networking",
        // },
      ],
    },
    // {
    //   day: "Day 4",
    //   date: "June 15, 2025",
    //   sessions: [
    //     {
    //       time: "8:00 AM - 9:00 AM",
    //       title: "Registration & Breakfast",
    //       speaker: "",
    //       type: "break",
    //     },
    //     {
    //       time: "9:00 AM - 10:30 AM",
    //       title: "Opening Keynote: The Future of Tennis Coaching",
    //       speaker: "Dr. James Mitchell",
    //       type: "keynote",
    //     },
    //     {
    //       time: "10:30 AM - 11:00 AM",
    //       title: "Coffee Break",
    //       speaker: "",
    //       type: "break",
    //     },
    //     {
    //       time: "11:00 AM - 12:30 PM",
    //       title: "Advanced Coaching Techniques Workshop",
    //       speaker: "Dr. James Mitchell",
    //       type: "workshop",
    //     },
    //     {
    //       time: "12:30 PM - 1:30 PM",
    //       title: "Lunch",
    //       speaker: "",
    //       type: "break",
    //     },
    //     {
    //       time: "1:30 PM - 3:00 PM",
    //       title: "Youth Development Panel Discussion",
    //       speaker: "Maria Rodriguez, Coach Alex Thompson",
    //       type: "panel",
    //     },
    //     {
    //       time: "3:00 PM - 3:30 PM",
    //       title: "Afternoon Break",
    //       speaker: "",
    //       type: "break",
    //     },
    //     {
    //       time: "3:30 PM - 5:00 PM",
    //       title: "Networking Session",
    //       speaker: "",
    //       type: "networking",
    //     },
    //   ],
    // },
  ];
  const getSessionColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-[#40A700]/20 border-gray-600";
      case "workshop":
        return "bg-[#71E529]/20";
      case "break":
        return "bg-muted/20 border-muted";
      case "panel":
        return "bg-primary/10 border-primary/50";
      case "networking":
        return "bg-foreground/5 border-foreground/20";
      case "seminar":
        return "bg-accent/10 border-accent/50";
      default:
        return "";
    }
  };
  const [selectedDate, setSelectedDate] = useState(0);
  return (
    <section className="py-20 px-6 bg-gray-300" id="schedule">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-3xl md:text-5xl text-black italic">
            3-Day Conference Schedule
          </h1>
          <p className="text-base sm:text-sm md:text-lg">
            Select a day to view the detailed timetable
          </p>
        </div>
        {/* select day */}
        <div className="flex gap-4 mb-12 justify-center flex-wrap">
          {schedule.map((item, index) => (
            <Button
              key={index}
              onClick={() => setSelectedDate(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedDate === index
                  ? "bg-green-600 text-black"
                  : "bg-black/40 border border-gray-400 text-white hover:border-[#71E529]"
              }`}
            >
              <p>{item.day}</p>
              <p>{item.date}</p>
            </Button>
          ))}
        </div>

        {/* timetable */}
        <Table>
          <TableHeader>
            <TableRow className={`border-b border-gray-400`}>
              <TableHead className="px-6 py-4 text-left text-sm font-semibold">
                Time
              </TableHead>
              <TableHead className="px-6 py-4 text-left text-sm font-semibold">
                Sessions
              </TableHead>
              <TableHead className="px-6 py-4 text-left text-sm font-semibold">
                Speaker(s)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule[selectedDate].sessions.map((session, index) => (
              <TableRow
                key={index}
                className={`border-b border-gray-400 last:border-b-0 ${getSessionColor(
                  session.type
                )}`}
              >
                <TableCell className="text-bold">{session.time}</TableCell>
                <TableCell className="px-6 py-4 text-sm text-foreground font-medium">
                  {session.title}
                </TableCell>
                <TableCell className="">{session.speaker || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Schedule;
