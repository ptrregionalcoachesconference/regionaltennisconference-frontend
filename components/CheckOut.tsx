"use client";
import React from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { IoMdMail } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckOut = ({ isOpen, onClose }: CheckoutProps) => {
  const router = useRouter();
  //   const [status, setStatus] = useState<"payment" | "confirmation">("payment");

  //   const handleConfirm = () => {
  //     setStatus("confirmation");
  //   };

  const handleShareReceipt = () => {
    const subject = encodeURIComponent(
      "Payment Receipt - PTR Regional Coaches Conference"
    );
    const body = encodeURIComponent(
      `Hello PTR Regional Coaches Conference,

I have completed my payment for the workshop registration.

Please find my details below:

Name: [Enter your full name]
Date of Birth: [Enter your DOB]
Email: [Enter your email]
Phone Number: [Enter your phone number]
Amount Paid: $[Enter amount]
Package: [Enter package name]

Please, Find Receipt attached.

Thank you!`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=ptrregionalcoachesconference@gmail.com&subject=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  const handleProceedToPackages = () => {
    localStorage.setItem("hasPaidRegFee", "true");
    // onClose();
    router.push("/selectpackage");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[90%]">
        {/* {status === "confirmation" && ( */}
        <DialogHeader>
          <DialogTitle className="text-base md:text-lg">Payment Confirmation</DialogTitle>
        </DialogHeader>
        <div className="text-center py-2">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex  items-center mx-auto justify-center mb-3">
            <IoMdCheckmark className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Received
          </h3>
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base px-2">
            Thank you for your payment. To confirm your booking, please share
            your payment receipt with us via email, then proceed to view
            packages.
          </p>
          <div className="space-y-3">
            <Button
              onClick={handleShareReceipt}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
              size="lg"
            >
              <IoMdMail className="mr-2 h-4 w-4" />
              Share Receipt via Email
            </Button>

            <p className="text-[10px] md:text-xs  text-gray-500 px-2">
              This will open your email app with a pre-filled message to
              ptrregionalcoachesconference@gmail.com
            </p>
          </div>
          <Button
            onClick={handleProceedToPackages}
            variant="outline"
            className="w-full" size="lg"
          >
           Proceed to View Pacakges &gt;
          </Button>
        </div>
        {/* )} */}
      </DialogContent>
    </Dialog>
  );
};

export default CheckOut;
