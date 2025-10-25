"use client";
// import React, {useState} from "react";
import { useForm, Controller, SubmitHandler, FieldErrors } from "react-hook-form";
import { registerSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

import PhoneInput from "react-phone-number-input/react-hook-form";

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

interface RegisterFormData {
  // id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: string;
  email: string;
  phoneNumber: string;
  country: string;
  contactAddress: string;
  // ticketType: string;
}

const Page = () => {
  const { register, handleSubmit, control, reset } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      // id: "",
      firstName: "",
      lastName: "",
      middleName: "",
      gender: "",
      email: "",
      phoneNumber: "",
      country: "",
      contactAddress: "",
      // ticketType: "",
    },
  });
  

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log("Form Data:",data);


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
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      // required: true,
    },
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your First name",
      // required: true,
    },
    {
      id: "middleName",
      label: "Middle Name",
      type: "text",
      placeholder: "Enter your Middle name",
      // required: true,
    },
    {
      id: "gender",
      label: "Gender",
      type: "select",
      placeholder: "gender",
      selectItems: ["Male", "Female"],
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "johndoe@gmail.com",
      // required: true,
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "phone",
      placeholder: "+234 801 234 5678",
      // required: true,
    },
    {
      id: "country",
      label: "Country",
      type: "text",
      placeholder: "Enter your country",
      // required: true,
    },

    {
      id: "contactAddress",
      label: "Contact Address",
      type: "text",
      placeholder: "Enter your contact address",
      // required: true,
    },
    // {
    //   id: "ticketType",
    //   label: "Select Ticket Type",
    //   type: "select",
    //   placeholder: "Select Ticket Type",
    //   selectItems: ["Standard - $50", "Vip - $100", "VVIP - $200"],
    // },
  ];
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="py-20 ">
        <div className=" mx-auto text-center space-y-4 mb-12 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-5xl font-bold">
            REGISTER FOR THE CONFERENCE TODAY!!!
          </h3>
          <p className="text-lg text-gray-600">Secure your seat today!!</p>
        </div>

        {/* two column */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* image side */}
            {/* relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[900px] overflow-hidden rounded-2xl */}
            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[900px] rounded-2xl overflow-hidden">
              <Image
                src="/register.jpg"
                alt="register"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className=" object-cover"
              />
            </div>
            {/* input */}
            <div className="w-full ">
              <Card className="border-0">
                <CardHeader >
                  <CardTitle className="text-lg">
                    Secure your spot today
                  </CardTitle>
                  <CardDescription>Fill in your Details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
                    {registerInfo.map((info) => (
                      <div key={info.id}>
                        <Label htmlFor={String(info.id)} className="text-base">
                          {info.label}
                        </Label>
                        {/* phone number */}
                        {info.type === "phone" ? (
                          <div className="mt-2">
                            <PhoneInput
                              name={info.id}
                              control={control}
                              rules={{ required: `${info.label} is required` }}
                              defaultCountry="NG"
                              international
                              className="phone-input-wrapper w-full"
                            />
                          </div>
                        ) : // select dropdown
                        info.type === "select" ? (
                          <Controller
                            name={info.id}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <Select
                                onValueChange={field.onChange}
                                value={field.value || ""}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder={info.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                  {info.selectItems?.map((item) => (
                                    <SelectItem key={item} value={item}>
                                      {item}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                        ) : (
                          <Input
                            id={String(info.id)}
                            {...register(info.id, { required: true })}
                            type={info.type}
                            placeholder={info.placeholder}
                            className="mt-2"
                          />
                        )}
                      </div>
                    ))}
                    <Button type="submit" className="w-full">
                      CONTINUE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
