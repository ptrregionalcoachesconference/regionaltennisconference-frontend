"use client";
import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { Button } from "./ui/button";

const PaymentDollar = () => {
  const bankDetails = [
    {
      id: 1,
      name: "Bank Name",
      detail: "GTB",
    },
    {
      id: 2,
      name: "Account Number",
      detail: "3003070813",
    },
    {
      id: 3,
      name: "Account Name",
      detail: "PTR African Tennis Coaches Conference Hub",
    },
  ];

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg ">
      <div className="p-5">
        <p className=" text-center mb-4">
          To make payment in Dollar, kindly make your transfer to the account
          below.
        </p>
        <div className="space-y-4">
          {bankDetails.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-2"
            >
              <div>
                <p className="text-sm text-gray-600">{item.name}</p>
                <p className="font-bold">{item.detail}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(item.detail, item.name)}
              >
                {copiedField === item.name ? (
                  <div>
                    <IoMdCheckmark className="w-4 h-4 text-green-600" />
                    <span>Copied!</span>
                  </div>
                ) : (
                  <MdOutlineContentCopy className="w-4 h-4" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentDollar;
