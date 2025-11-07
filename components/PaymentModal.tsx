"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "@/config";
import { FaStripe } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";

interface PaymentModalProps {
  pkg: {
    id: number;
    title: string;
    price: number;
  };
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal = ({ pkg, onClose }: PaymentModalProps) => {
  const [stripeLoading, setStripeLoading] = React.useState<boolean>(false);
  const [paystackLoading, setPaystackLoading] = React.useState<boolean>(false);

  const closeModal = () => {
    onClose();
  };

  const handlePayment = async (gateway: "stripe" | "paystack") => {
    if (typeof window === "undefined") {
      toast.error("Payment can only be initiated in the browser.");
      return;
    }

    const registerId = localStorage.getItem("registerId");
    const token = localStorage.getItem("authToken");

    if (!registerId) {
      toast.error("Please register before proceeding with payment.");
      return;
    }
    if (!token) {
      toast.error("Authentication token missing. Please register again.");
      return;
    }

    if (gateway === "stripe") setStripeLoading(true);
    if (gateway === "paystack") setPaystackLoading(true);
    try {
      const res = await axios.post(
        `${baseURL}/api/payments/packages-${gateway}`,
        {
          // registerId,
          packageId: pkg.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const redirectUrl =
        res.data.url || res.data.authorization_url || res.data.checkoutUrl;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        toast.error("Failed to initiate payment. Please try again.");
        setStripeLoading(false);
        setPaystackLoading(false);
      }
    } catch (error) {
      console.error("Payment initiation error:", error);

      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(`Payment Failed: ${errorMessage}}`);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      setStripeLoading(false);
      setPaystackLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative justify-center items-center backdrop-blur-6xl">
        <div className="relative bg-white p-8 w-[90%] max-w-md shadow-2xl rounded-lg  box-content">
          <IoMdClose
            className="absolute top-5 right-4 cursor-pointer text-gray-500 hover:text-black"
            size={24}
            onClick={closeModal}
          />
          <div className="px-3 py-5">
            <p className="text-sm md:text-base lg:text-lg w-full max-w-64 font-bold ">
              Proceed with {pkg.title} Package
            </p>
            <p className="text-[#71E529] font-bold mt-3 mb-5 text-lg">
              Price: {pkg.price}
            </p>
            {/* payment options */}
            <div className="flex flex-col gap-4">
              <Button
                disabled={stripeLoading || stripeLoading}
                onClick={() => handlePayment("stripe")}
                className="cursor-pointer"
              >
                {stripeLoading ? (
                  <>
                    <p>Please wait</p>
                    <AiOutlineLoading className="animate-spin" />
                  </>
                ) : (
                  <>
                    <p>Pay with Stripe</p>
                    <FaStripe />
                  </>
                )}
              </Button>
              <Button
                disabled={stripeLoading || paystackLoading}
                onClick={() => handlePayment("paystack")}
                className="cursor-pointer"
              >
                {paystackLoading ? (
                  <>
                    <p>Please wait</p>
                    <AiOutlineLoading className="animate-spin" />
                  </>
                ) : (
                  <>
                    <p>Pay with Paystack</p>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
