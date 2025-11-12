"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FiPhone } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";

const PaymentPlan = () => {
  const paymentPlans = [
    {
      name: "Plan A",
      payments: "Two Payments",
      amounts: ["$200 / ₦300,000", "$200 / ₦300,000"],
      dates: ["1st payment: by Jan 31", "2nd payment: by March 31"],
    },
    {
      name: "Plan B",
      payments: "Three Payments",
      amounts: ["$150 / ₦225,000", "$150 / ₦225,000", "$100 / ₦150,000"],
      dates: [
        "1st payment: by Jan 31",
        "2nd payment: by Feb 18",
        "3rd payment: by March 31",
      ],
    },
    {
      name: "Plan C",
      payments: "Four Payments",
      amounts: ["$100 / ₦150,000", "$100 / ₦150,000", "$100 / ₦150,000", "$100 / ₦150,000"],
      dates: [
        "1st payment: by Dec 31",
        "2nd payment: by Jan 31",
        "3rd payment: by Feb 28",
        "4th payment: by March 31",
      ],
    },
  ];
  const approval = [
    {
      icon: <FiPhone />,
      name: "C.Spencer",
      number: "+234 806 343 0037",
      link: "https://wa.me/2348063430037",
    },
    {
      icon: <FiMessageCircle />,
      name: "Aces Tennis (Whatsapp)",
      number: "+1 (312) 793 4113",
      link: "https://wa.me/+13127934113",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h4 className="text-4xl md:text-5xl font-bold italic">Payment Plans</h4>
          <p className="font-semibold text-lg text-gray-500">
            Flexible payment options to make certification more accessible
          </p>
        </div>

        {/* plan */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paymentPlans.map((plan, idx) => (
            <Card
              key={idx}
              className="border border-gray-400 bg-gray-300 hover:border-[#40A700]/50 transition-all duration-300"
            >
              <CardHeader className="border-b ">
                <p className="text-[#40A700] text-2xl mb-2">{plan.name}</p>
                <p className="font-semibold text-sm uppercase ">
                  {plan.payments}
                </p>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="space-y-4">
                  {plan.amounts.map((amount, i) => (
                    <div
                      key={i}
                      className="pb-4 border-b last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold ">{amount}</span>
                        <span className="text-[#40A700] font-semibold uppercase">
                          Payment {i + 1}
                        </span>
                      </div>
                      <p className="text-sm  ">{plan.dates[i]}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-gray-200 border border-gray-400 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Payment Plan Approval
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {approval.map((app, i) => (
              <div key={i} className="space-y-4 ">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 flex-shrink-0 mt-1 text-[#40A700]">
                    {app.icon}
                  </span>

                  <div>
                    <p className="font-semibold mb-1">{app.name}</p>
                    <Link
                      href={app.link}
                      className="text-[#40A700] hover:text-[#40A700]/80 transition-colors font-mono"
                    >
                      {app.number}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <p className="text-sm text-center mt-6 italic">
              Contact the above for your payment plan approval
            </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
