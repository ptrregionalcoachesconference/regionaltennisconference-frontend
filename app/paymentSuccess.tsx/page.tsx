"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { baseURL } from "@/config";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Verifying your payment...");

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");
      const type = searchParams.get("type"); // "registration" or "package"

      if (!reference || !type) {
        setMessage("Invalid payment reference.");
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("authToken");

        const res = await axios.post(
          `${baseURL}/api/payments/verify`,
          { reference, type },
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );

        if (res.data.success) {
          setMessage("Payment successful! Redirecting...");

          // Mark Reg Fee Paid in LocalStorage
          if (type === "registration") {
            localStorage.setItem("hasPaidRegFee", "true");
            router.push("/selectpackage");
          }

          // After paying for package enrollment
          if (type === "package") {
            router.push("/dashboard");
          }
        } else {
          setMessage("Payment verification failed.");
        }
      } catch (err) {
        console.error(err);
        setMessage("Error verifying payment. Please contact support.");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {loading && (
          <div className="mb-4 animate-spin h-10 w-10 border-4 border-gray-400 border-t-green-600 rounded-full mx-auto"></div>
        )}
        <p className="text-lg font-medium text-gray-700">{message}</p>
      </div>
    </div>
  );
}
