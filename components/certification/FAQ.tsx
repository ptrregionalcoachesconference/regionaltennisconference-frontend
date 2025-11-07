"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const quest = [
    {
      title: "Who can Participate?",
      res: "Tennis teaching professionals, college coaches, middle and high school coaches, professionals making a career change, league tennis players, and parents interested in coaching education.",
    },
    {
      title: "Who is going to be teaching?",
      res: "All workshops are led by specially trained PTR Coach Developers with years of professional coaching experience and proven track records.",
    },
    {
      title: "Do i receive awards after participating?",
      res: "Yes, Upon successful completion of all exam components, you will receive official PTR certification ratings recognized worldwide.",
    },
    {
      title: "What are the activities that would be done?",
      res: "Intensive multi-day programs covering theory, practical application, and hands-on coaching techniques with real-time feedback.",
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h4 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h4>
          <p className="font-semibold text-lg text-gray-500">
           Got questions? We&apos;ve got answers.
          </p>
        </div>

        {/* faq */}
        <Accordion type="single" collapsible>
          {quest.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger><p>{faq.title}</p></AccordionTrigger>
              <AccordionContent>{faq.res}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
