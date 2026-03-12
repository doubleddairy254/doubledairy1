"use server";

import { z } from "zod";
import { technologyExplainer } from "@/ai/flows/technology-explainer";

export async function explainTechnology(technology: string) {
  try {
    const result = await technologyExplainer({ technology });
    return result;
  } catch (error) {
    console.error("Error explaining technology:", error);
    return { shortExplanation: "Sorry, I couldn't fetch an explanation at this time. Please try again later." };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it and return a success message.
  console.log("Contact Form Submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    success: true,
  };
}
