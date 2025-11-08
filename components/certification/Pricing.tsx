"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { workshopRegisterSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { baseURL } from "@/config";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { BiLoaderCircle } from "react-icons/bi";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface Workshop {
  id: number;
  _id?: string;
  name: string;
  price: number;
  tag: string;
  items: string[];
}

interface WorkshopFormData {
  name: string;
  dateOfBirth: string;
  email: string;
  telephoneNumber: string;
  contactAddress: string;
}

const Pricing = () => {
  const info = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: "dateOfBirth",
      label: "Date of birth",
      type: "date",
      placeholder: "Enter your Date of Birth",
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      placeholder: "johndoe@gmail.com",
    },
    {
      id: "telephoneNumber",
      label: "Phone Number",
      type: "phone",
      placeholder: "+234 567 8900",
    },
    {
      id: "contactAddress",
      label: "Contact Address",
      type: "text",
      placeholder: "Enter your contact address",
    },
  ];
  const [packages, setPackages] = useState<Workshop[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Workshop | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [stripeLoading, setStripeLoading] = React.useState<boolean>(false);
  const [paystackLoading, setPaystackLoading] = React.useState<boolean>(false);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<WorkshopFormData | null>(null);
  // const [registrationId, setRegistrationId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<WorkshopFormData>({
    resolver: zodResolver(workshopRegisterSchema),
    defaultValues: {
      name: "",
      dateOfBirth: "",
      email: "",
      telephoneNumber: "",
      contactAddress: "",
    },
  });

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
  //open register Dialog
  const onOpenRegister = (pkg: Workshop) => {
    setSelectedPackage(pkg);
    setIsRegisterDialogOpen(true);
    reset();
  };

  // form submit handler
  const onSubmit: SubmitHandler<WorkshopFormData> = async (
    data: WorkshopFormData
  ) => {
    if (!selectedPackage) {
      toast.error("No package Selected");
      return;
    }
    try {
      const payload = {
        ...data,
        packageId: selectedPackage.id || selectedPackage._id,
        packageName: selectedPackage.name,
        amount: selectedPackage.price,
      };

      console.log("Registering user:", payload);
      const res = await axios.post(
        `${baseURL}/api/workshop/account/register-workshop`,
        payload
      );
      console.log("Reg Res", res.data);

      if (!res.data?.success) {
        toast.error("Registration failed. Try again.");
        return;
      }

      setUserInfo(data);
      // setRegistrationId(regId)
      setIsRegisterDialogOpen(false);
      setPaymentDialogOpen(true);
      toast.success("Registration successful! Please proceed to payment");
    } catch (error) {
      console.error("Registration error:", error);
      setError("Registration failed. Please try again");
      // toast.error(errorMessage)
    }
  };

  const handlePayment = async (gateway: "stripe" | "paystack") => {
    if (!userInfo || !selectedPackage) {
      toast.error("Missing reg Information");
      return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("You must be logged in to make payment");
      return;
    }
    if (gateway === "stripe") setStripeLoading(true);
    if (gateway === "paystack") setPaystackLoading(true);

    try {
      const payload = {
        // registrationId,
        email: userInfo.email,
        amount: selectedPackage.price,
        packageName: selectedPackage.name,
        packageId: selectedPackage.id,
      };
      console.log(`Initializing ${gateway} payment:`, payload);
      const res = await axios.post(
        `${baseURL}/api/payments/register-${gateway}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
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
      console.error(error);
    }
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
                  onClick={() => onOpenRegister(pkg)}
                >
                  Register & Pay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Dialog
          open={isRegisterDialogOpen}
          onOpenChange={setIsRegisterDialogOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Register for {selectedPackage?.name}</DialogTitle>
              <p>Fill in your information to Continue</p>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {info.map((field) => (
                <div key={field.id} className="mb-4">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    {...register(field.id as keyof WorkshopFormData)}
                    className={
                      errors[field.id as keyof WorkshopFormData]
                        ? "border-red-500"
                        : ""
                    }
                  />
                </div>
              ))}
              <Button
                type="submit"
                className="mt-4 w-full bg-[#40A700] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <BiLoaderCircle className="animate-spin mr-2" />
                  </>
                ) : (
                  "Continue to Payment"
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        {/* payment dialog */}
        <Dialog open={paymentDialogOpen} onOpenChange={setPaymentDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Choose Payment Method</DialogTitle>
              <DialogDescription>
                Select your preferred payment gateway to complete registration
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p>Registration Summary</p>
                <p>Package: {selectedPackage?.name}</p>
                <p>Amount: {selectedPackage?.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="space-y-3">
              <Button
                onClick={() => handlePayment("stripe")}
                disabled={stripeLoading || paystackLoading}
                className="w-full bg-[#635BFF] hover:bg-[#635BFF]/90 text-white"
              >
                {stripeLoading ? (
                  <>
                    <BiLoaderCircle className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  "Pay with Stripe"
                )}
              </Button>

              <Button
                onClick={() => handlePayment("paystack")}
                disabled={stripeLoading || paystackLoading}
                className="w-full bg-[#40A700] hover:bg-[#40A700]/90 text-white"
              >
                {paystackLoading ? (
                  <>
                    <BiLoaderCircle className="animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  "Pay with Paystack"
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

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
