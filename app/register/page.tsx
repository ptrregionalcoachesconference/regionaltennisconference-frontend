"use client";
import { useRouter } from "next/navigation";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldErrors,
} from "react-hook-form";
import { registerSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { baseURL } from "@/config";
import { toast, ToastContainer } from "react-toastify";

import PhoneInput from "react-phone-number-input/react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

import Hero from "@/components/register/Hero";
import RegFee from "@/components/register/RegFee";
interface RegisterFormData {
  first_name: string;
  last_name: string;
  middle_name?: string;
  gender: string;
  email: string;
  phone_number: string;
  country: string;
  contact_address: string;
}

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [showRegFeeModal, setShowRegFeeModal] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
    defaultValues: {
      first_name: "",
      last_name: "",
      middle_name: "",
      gender: "",
      email: "",
      phone_number: "",
      country: "",
      contact_address: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.log("Submitting registration data:", data);

    const toastId = toast.loading("Processing Registration");
    setLoading(true);

    setUserEmail(data.email);

    try {
      const res = await axios.post(`${baseURL}/api/auth/register`, data);
      console.log(res.data);
      const token = res.data.token;
      const userId = res.data.user?._id || res.data.userId;
      if (token) localStorage.setItem("authToken", res.data.token);
      if (userId)
        localStorage.setItem(
          "registerId",
          res.data.user?._id || res.data.userId
        );

      toast.update(toastId, {
        render: "Registration successful!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      reset();

      const hasPaid = localStorage.getItem("hasPaidRegFee");
      if (!hasPaid) {
        setShowRegFeeModal(true);
      } else {
        router.push("/selectpackage");
      }
    } catch (error: unknown) {
      console.log("Full error:", error);
      if (
        axios.isAxiosError(error) &&
        error.response?.data?.message?.includes("Email already Registered")
      ) {
        const token = error.response?.data.token;
        const userId = error.response?.data.userId;

        if (token) localStorage.setItem("authToken", token);
        if (userId) localStorage.setItem("registerId", userId);

        toast.update(toastId, {
          render: "Welcome back! Redirecting to packages...",
          type: "info",
          isLoading: false,
          autoClose: 2000,
        });

        router.push("/selectpackage")

       
        // const manualSubmitted = localStorage.getItem("manualPaymentSubmitted");
        // if (hasPaid === "true" || manualSubmitted === "true") {
        //   router.push("/selectpackage");
        // } else {
        //   // If they haven't paid, show the RegFee modal
        //   setShowRegFeeModal(true);
        // }

        // router.push("/selectpackage");
      } else {
        console.error(error);
        toast.update(toastId, {
          render: "Registration failed. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  };
  const onError = (errors: FieldErrors<RegisterFormData>) => {
    console.log("Validation Errors:", errors);
  };

  const registerInfo: Array<{
    id: keyof RegisterFormData;
    label: string;
    type: "text" | "select" | "phone" | "email";
    placeholder: string;
    selectItems?: string[];
  }> = [
    {
      id: "last_name",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
    },
    {
      id: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Enter your First name",
    },
    {
      id: "middle_name",
      label: "Middle Name",
      type: "text",
      placeholder: "Enter your Middle name",
    },
    {
      id: "gender",
      label: "Gender",
      type: "select",
      placeholder: "Gender",
      selectItems: ["Male", "Female"],
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "johndoe@gmail.com",
    },
    {
      id: "phone_number",
      label: "Phone Number",
      type: "phone",
      placeholder: "+234 801 234 5678",
    },
    {
      id: "country",
      label: "Country",
      type: "text",
      placeholder: "Enter your country",
    },

    {
      id: "contact_address",
      label: "Contact Address",
      type: "text",
      placeholder: "Enter your contact address",
    },
  ];
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#71E529]/10 to-[#40A700]/5 -z-10 " />
      <Hero />

      <ToastContainer position="top-right" autoClose={5000} />
      {/* two column */}
      <div className="w-full ">
        {showRegFeeModal && userEmail && (
          <RegFee
            isOpen={showRegFeeModal}
            userEmail={userEmail}
            onClose={() => setShowRegFeeModal(false)}
            registrationFee={30}
          />
        )}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start px-4 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-12 ">
          {/* image side */}

          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[800px] rounded-2xl overflow-hidden">
            <Image
              src="/reg1.jpg"
              alt="register"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className=" object-cover"
            />
          </div>
          {/* input */}
          <div className="order-2 ">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Secure Your Spot Today
                </CardTitle>
                <CardDescription className="text-base sm:text-sm md:text-md">
                  Fill in your Details!!!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit, onError)}
                  className="space-y-4"
                >
                  {registerInfo.map((info) => (
                    <div key={info.id}>
                      <Label htmlFor={String(info.id)} className="text-base ">
                        {info.label}
                      </Label>

                      {info.type === "phone" ? (
                        <div className="mt-2">
                          <PhoneInput
                            name={info.id}
                            control={control}
                            rules={{ required: `${info.label} is required` }}
                            defaultCountry="NG"
                            international
                          />
                          {errors[info.id] && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors[info.id]?.message}
                            </p>
                          )}
                        </div>
                      ) : info.type === "select" ? (
                        <>
                          <Controller
                            name={info.id}
                            control={control}
                            rules={{ required: `${info.label} is required` }}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                value={field.value || ""}
                                required
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder={info.placeholder} />
                                  <SelectContent>
                                    {info.selectItems?.map((item) => (
                                      <SelectItem key={item} value={item}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </SelectTrigger>
                              </Select>
                            )}
                          />
                          {errors[info.id] && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors[info.id]?.message}
                            </p>
                          )}
                        </>
                      ) : (
                        <Input
                          id={String(info.id)}
                          {...register(info.id, { required: true })}
                          type={info.type}
                          placeholder={info.placeholder}
                          className="mt-2"
                          required
                        />
                      )}
                    </div>
                  ))}
                  <Button
                    type="submit"
                    className="w-full cursor-pointer hover:bg-gray-300 hover:text-black"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <p>Proceeding to pacakges</p>
                        <AiOutlineLoading className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <p>Continue</p>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Page;

//  if (res.data.token) {
//         console.log("Received Token:", res.data.token);
//         localStorage.setItem("token", res.data.token);
//         toast.update(toastId, {
//           render: "Registration Successful",
//           type: "success",
//           isLoading: false,
//           autoClose: 2000,
//         });
//         setTimeout(() => {
//           router.push("/selectpackage");
//         }, 2000);
//       } else {
//         console.log("No token received in response.");
//         toast.update(toastId, {
//           render: "Registration failed",
//           type: "error",
//           isLoading: false,
//           autoClose: 5000,
//         });
//         setLoading(false);
//       }

//       if (res.status === 200 && typeof res.data === "string") {
//         console.log("Server Message:", res.data);
//         toast.success("Registration successful!");
//         router.push("/selectpackage");
//         reset();
//         return;
//       }

//       if (res.status === 201 && res.data.user?.id) {
//         localStorage.setItem("registerId", res.data.user.id);
//         console.log("Registration successful:", res.data);
//         toast.success("Registration successful!");
//         router.push("/selectpackage");
//         reset();
//       } else {
//         toast.error("Registration failed. Please try again.");
