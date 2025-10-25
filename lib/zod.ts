
import {z} from "zod";

export const registerSchema = z.object({
    // id: z.string().min(1, "ID is required"),
    lastName: z.string().min(1, "Last name is required"),
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    email: z.email("Invalid email address"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    country: z.string().min(1, "Country is required"),
    contactAddress: z.string().min(5, "Contact address is required"),
    // gender: z.enum(["Male" , "Female"] as const, {
    //     error: () => ({ message: "Please Select a Gender" })
    // }),
    gender: z.string().min(1, "Please Select a Gender",),
    // ticketType: z.string().min(1, "Please Select a Ticket Type"),
    // ticketType: z.enum(["standard", "vip", "vvip"] as const, {
    //     error: () => ({ message: "Please Select a Ticket Type" })
    // })
})