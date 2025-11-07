"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "@/config";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { BiLoaderCircle } from "react-icons/bi";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Workshop {
  id: number;
  name: string;
  price: number;
  tag: string;

  items: string[];
}

const Pricing = () => {
  const [packages, setPackages] = useState<Workshop[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Workshop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/workshop/get-workshops`);

        console.log("WORKSHOPS:", res.data);
        setPackages(res.data);
      } catch (err: unknown) {
        console.log(err);
        setError("failed to load");
        toast.error("failed to load");
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleSelect = (pkg: Workshop) => {
    setSelectedPackage(pkg);
    toast.success(`Selected: ${pkg.name}`);
    console.log("Selected package:", pkg);
  };
  if (loading) {
    return (
      <section className="py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BiLoaderCircle
            className="animate-spin text-[#71E529] mx-auto"
            size={64}
          />
          <p className="mt-4 text-lg text-gray-600">Loading workshops...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h4 className="text-4xl md:text-5xl font-bold">
            Registration pricing
          </h4>
          <p className="font-semibold text-lg text-gray-500">
            Lock in your early bird rate and save on certification courses
          </p>
        </div>

        {/* prices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative group transition-all duration-300 flex flex-col hover:border-[#40A700]/50 hover:shadow-lg`}
            >
              <CardHeader>
                <p className="text-sm text-gray-700 font-semibold uppercase tracking-widest mb-3">
                  {pkg.name}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex gap-2 items-center">
                    <span className="text-5xl font-bold text-[#40A700]">
                      {pkg.price}
                    </span>
                    <span className="text-sm">/person</span>
                  </div>
                  <p className="text-sm font-semibold">{pkg.tag}</p>
                </div>
                <div className="h-1 w-0  bg-gradient-to-r from-gray-100 to-[#40A700] group-hover:w-full transition-all duration-500" />
              </CardHeader>

              <CardContent>
                {pkg.items?.map((item, i) => (
                  <div key={i} className="flex gap-2 items-center mb-6">
                    <IoMdCheckmarkCircleOutline className="w-5 h-5 flex-shrink-0 text-[#40A700]" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
                <Button
                  className={`w-full h-10 font-semibold transition-all duration-300 shadow-lg shadow-gray-500/20 bg-[#40A700] text-white hover:bg-[#40A700]/30 hover:text-black`}
                >
                  Register & Pay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* notice */}
        <div className="border-gray-200 border bg-gray-200 mt-12 p-8 rounded-xl text-center">
          <p className="text-2xl font-bold mb-3">Important Notice</p>
          <p className="text-lg leading-relaxed">
            For the Certification Workshop, please review your study materials
            thoroughly before the event. Success in the certification exam
            requires dedicated preparation and understanding of all course
            materials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
