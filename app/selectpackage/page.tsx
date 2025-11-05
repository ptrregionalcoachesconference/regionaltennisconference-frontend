"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/config";
import { BiLoaderCircle } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import PaymentModal from "@/components/PaymentModal";


interface Package {
  id: number;
  title: string;
  price: number;
  description: string | string[];
}

const Page = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      const token = localStorage.getItem("authToken");
      console.log("Auth Token:", token);
      try {
        const res = await axios.get(`${baseURL}/api/packages/get-packages`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPackages(res.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
    setShowModal(true);
    console.log("Selected Package:", pkg);

    const registerId = localStorage.getItem("registerId");
    if (!registerId) {
      toast.error("Please register before selecting a package.");
      return;
    }
  };

  return (
    <section className="min-h-screen bg-[#71E529]">
      <div className="flex flex-col text-center justify-center items-center py-20">
        <h1 className="text-3xl md:text-5xl font-semibold mt-5 ">
          Select a conference Package
        </h1>
        {loading ? (
          <BiLoaderCircle className="animate-spin text-gray-400 text-center justify-center" size={32} />
        ) : (
          <div className="grid lg:grid-cols-3 gap-10 mx-auto max-w-5xl py-12 lg:py-20 ">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-8 bg-white text-black shadow-2xl scale-105 md:scale-110 rounded-2xl"
              >
                <p className="text-sm md:text-base lg:text-md">{pkg.title}</p>
                <hr className="border-black" />
                <div className="mb-8 mt-5">
                  <span
                    className={`text-4xl font-black 
                         "text-[#71E529]"
                      `}
                  >
                    ${pkg.price}
                  </span>
                  <span className={"text-muted-foreground"}>/person</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {Array.isArray(pkg.description) ? (
                    pkg.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <span className="text-xs font-bold text-green-600 ">
                            ✓
                          </span>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li>{pkg.description}</li>
                  )}
                </ul>

                <Button
                  className="w-full bg-[#71E529] hover:bg-green-600 text-white font-bold py-3 rounded-lg"
                  onClick={() => handleSelect(pkg)}
                >
                  Purchase Ticket
                </Button>
              </div>
            ))}
          </div>
        )}
        {showModal && selectedPackage && (
          <PaymentModal
            pkg={selectedPackage}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Page;
