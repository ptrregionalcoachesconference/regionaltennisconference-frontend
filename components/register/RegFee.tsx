"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "@/config";
import { FaStripe } from "react-icons/fa6";
import { AiOutlineLoading } from "react-icons/ai";

interface RegFeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
  registrationFee: number;
}

const RegFee = ({ isOpen, onClose, userEmail, registrationFee }: RegFeeModalProps) => {
  const [stripeLoading, setStripeLoading] = React.useState<boolean>(false);
  const [paystackLoading, setPaystackLoading] = React.useState<boolean>(false);

  if (!isOpen) return null;

  const handlePayment = async (gateway: "stripe" | "paystack") => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("Authentication token missing. Please register again.");
      return;
    }

    if (gateway === "stripe") setStripeLoading(true);
    if (gateway === "paystack") setPaystackLoading(true);

    try {
      const res = await axios.post(
        `${baseURL}/api/payments/register-${gateway}`,
        {
          email: userEmail,
          amount: registrationFee,
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
      const message =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : "An unexpected error occurred. Please try again.";
      toast.error(`Payment Failed: ${message}`);
      setStripeLoading(false);
      setPaystackLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 w-[90%] max-w-md shadow-2xl rounded-lg">
        <IoMdClose
          className="absolute top-5 right-4 cursor-pointer text-gray-500 hover:text-black"
          size={24}
          onClick={onClose}
        />
        <div className="px-3 py-5">
          <h2 className="text-lg font-bold">Complete Your Registration</h2>
          <p className="mt-3 mb-5">
            To secure your spot, please pay the registration fee of{" "}
            <span className="font-bold text-[#71E529]">
              ${registrationFee.toLocaleString()}
            </span>
            . You can pay via Stripe or Paystack.
          </p>
          <div className="flex flex-col gap-4">
            <Button
              disabled={stripeLoading || paystackLoading}
              onClick={() => handlePayment("stripe")}
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
            >
              {paystackLoading ? (
                <>
                  <p>Please wait</p>
                  <AiOutlineLoading className="animate-spin" />
                </>
              ) : (
                <p>Pay with Paystack</p>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegFee;
