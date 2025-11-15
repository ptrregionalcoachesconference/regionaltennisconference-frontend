"use client";
import React, { useState } from "react";
// import {useRouter} from "next/navigation"
// import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "@/config";
import { AiOutlineLoading } from "react-icons/ai";
import { useRouter } from "next/navigation";
import RegFee from "@/components/register/RegFee";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface VerifyEmailProps {
  isOpen: boolean;
  onClose: () => void;
}

// handle email verification

const VerifyModal = ({ isOpen, onClose }: VerifyEmailProps) => {
  const router = useRouter();

  const [verifyEmail, setVerifyEmail] = useState("");
  //   const [showVerify, setShowVerify] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [showRegFeeModal, setShowRegFeeModal] = useState(false);

  const handleVerifyEmail = async () => {
    if (!verifyEmail) {
      toast.error("Please enter your email");
      return;
    }

    const toastId = toast.loading("verifying email...");
    setVerifyLoading(true);

    try {
      const res = await axios.post(`${baseURL}/api/auth/login`, {
        email: verifyEmail,
      });
      console.log("verify response:", res.data);
      if (res.data?.token) {
        localStorage.setItem("authToken", res.data.token);
      }
      //   const { token, hasPaidRegFee } = res.data;

    //   if (token) {
    //     localStorage.setItem("authToken", token);
    //   }

      toast.update(toastId, {
        render: "Email Verified Successfully",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      onClose();

   router.push("/selectpackage")

    //   if (hasPaidRegFee) {
    //     router.push("/selectpackage");
    //   } else {
    //     setShowRegFeeModal(true);
    //   }
    } catch (error) {
      console.error("verification error", error);
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Email not found";
        toast.update(toastId, {
          render: errorMessage.includes("not found")
            ? "Email not registered, Please Register first"
            : `Verification Failed ${errorMessage}`,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        toast.update(toastId, {
          render: "Verification failed. Please try again",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } finally {
      setVerifyLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome Back</DialogTitle>
            <DialogDescription>
              Enter your registered email to continue whre you left off.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="verify-email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="verify-email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
                disabled={verifyLoading}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleVerifyEmail();
                  }
                }}
              />

              <Button
                onClick={handleVerifyEmail}
                disabled={verifyLoading || !verifyEmail}
                className="w-full bg-[#71E529] hover:bg-[#40A700]"
              >
                {verifyLoading ? (
                  <>
                    <AiOutlineLoading className="animate-spin ml-2" />
                    <p>Verifying...</p>
                  </>
                ) : (
                  <>
                    <p>Continue</p>
                  </>
                )}
              </Button>
              <p className="text-xs text-gray-500 text-center">
                We&apos;ll check your registration and payment status
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showRegFeeModal && verifyEmail && (
        <RegFee
          isOpen={showRegFeeModal}
          userEmail={verifyEmail}
          onClose={() => setShowRegFeeModal(false)}
          registrationFee={30}
        />
      )}
    </div>
  );
};

export default VerifyModal;
