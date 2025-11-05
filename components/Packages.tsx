"use client"
import  Link from "next/link";
import { Button } from "@/components/ui/button";

const Packages = () => {
      const pricing = [
        {
          name: "Standard Package",
          price: "500",
          items: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
        {
          name: "Standard Package",
          price: "500",
          items: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
          recommended: true,
        },
        {
          name: "Standard Package",
          price: "500",
          items: [
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
          ],
        },
      ];
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all ${
                  plan.recommended
                    ? "bg-[#71E529] text-black shadow-2xl scale-105 lg:scale-110"
                    : "bg-gray-50 border border-border hover:shadow-lg"
                }`}
              >
                {plan.recommended && (
                  <div className="bg-green-700 text-white text-center py-2 font-bold text-sm">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.recommended ? "text-black" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-8">
                    <span
                      className={`text-5xl font-black ${
                        plan.recommended ? "text-black" : "text-[#71E529]"
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={
                        plan.recommended
                          ? "text-black"
                          : "text-muted-foreground"
                      }
                    >
                      /person
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.items.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.recommended ? "bg-green-400" : "bg-green-100"
                          }`}
                        >
                          <span
                            className={`text-xs font-bold ${
                              plan.recommended
                                ? "text-green-700"
                                : "text-green-600"
                            }`}
                          >
                            ✓
                          </span>
                        </div>
                        <span
                          className={
                            plan.recommended ? "text-black" : "text-foreground"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/register">
                    <Button
                      className={`w-full py-3 rounded-lg font-bold transition ${
                        plan.recommended
                          ? "bg-white text-green-600 hover:bg-green-50"
                          : "bg-[#71E529] text-white hover:bg-green-700"
                      }`}
                    >
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
