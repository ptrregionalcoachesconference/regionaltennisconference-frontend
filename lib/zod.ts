
import {z} from "zod";

export const registerSchema = z.object({
    last_name: z.string().min(1, "Last name is required"),
    first_name: z.string().min(1, "First name is required"),
    middle_name: z.string().optional(),
    email: z.email("Invalid email address"),
    phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
    country: z.string().min(1, "Country is required"),
    contact_address: z.string().min(5, "Contact address is required"),
    gender: z.string().min(1, "Please Select a Gender",),
  
})