"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/home/Modal";

const Packages = () => {
  const pricing = [
    {
      name: "Conference Only",
      price: "350",
      items: [
        "Full Conference Access",
        "Lunch & refreshments",
        "Conference materials",
        "Networking Opportunities",
        "certificate of Attendance",
      ],
    },
    {
      name: "Nicon Luxury Hotel (5-Star) — Shared Room",
      price: "495",
      items: [
        "Shared accommodation",
        "Conference venue hotel",
        "Swimming Pool",
        "Free Parking Space",
        "Free Wifi",
        "Free Breakfast",
        "Gym access",
      ],
    },
    {
      name: "Nicon Luxury Hotel (5-Star) — Single Room",
      price: "560",
      items: [
        "Private accommodation",
        "Conference venue hotel",
        "Breakfast included",
        "Swimming Pool",
        "Free Parking Space",
        "Free Wifi",
        "Gym access",
      ],
    },
    {
      name: "Cijel Residence — Single Room",
      price: "475",
      items: [
        "Private accommodation",
        "Air Conditioned Rooms",
        "Breakfast included",
        "Free Wifi",
        "Free Parking Space",
      ],
    },
  ];

  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <div className="py-16 md:py-20 px-4 md:px-8 ">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-3xl md:text-5xl italic font-bold">
            PAYMENT PLANS
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-12 ax-w-2xl">
            Choose the perfect package for your conference experience.
          </p>

          {showModal && (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all 
                    "bg-gray-50 border border-border hover:shadow-lg"
                }`}
              >
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-2 italic
                      "text-foreground"
                    `}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-8 flex gap-2 items-center">
                    <div className="flex flex-col">
                      <span
                        className={`text-5xl font-black  "text-[#71E529]"
                        `}
                      >
                        ${plan.price}
                      </span>
                      {/* <span className="text-sm  font-bold text-[#40A700]">
                        ₦{(Number(plan.price) * 1500).toLocaleString()}
                      </span> */}
                    </div>
                    <span className={"text-muted-foreground text-center "}>/person</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.items.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5  "bg-green-100"
                          `}
                        >
                          <span
                            className={`text-xs font-bold  "text-green-600"
                            `}
                          >
                            ✓
                          </span>
                        </div>
                        <span className={"text-foreground"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Link href="/register"> */}
                  <Button
                    className={`w-full py-3 rounded-lg font-bold transition ${"bg-[#71E529] text-white hover:bg-green-700"}`}
                    onClick={() => setShowModal(true)}
                  >
                    Register & Pay
                  </Button>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
