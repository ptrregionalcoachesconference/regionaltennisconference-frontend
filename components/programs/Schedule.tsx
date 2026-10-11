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
      date: "Nil",
      sessions: [
        {
          time: "Nil",
          title: "Nil",
          speaker: "Nil",
          type: "break",
        },
      ],
    },
    {
      day: "Day 2",
      date: "Nil",
      sessions: [
        {
          time: "Nil",
          title: "Nil",
          speaker: "Nil",
          type: "break",
        },
      ],
    },
    {
      day: "Day 3",
      date: "Nil",
      sessions: [
        {
          time: "Nil",
          title: "Nil",
          speaker: "Nil",
          type: "break",
        },
      ],
    },
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
            3-Day Conference Schedule 2027
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
            <TableRow className="border-b border-gray-400">
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
                <TableCell className="font-bold">{session.time}</TableCell>
                <TableCell className="px-6 py-4 text-sm text-foreground font-medium">
                  {session.title}
                </TableCell>
                <TableCell>{session.speaker || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Schedule;