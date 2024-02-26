import { z } from "zod";

export const ContactSchema = z.object({
    senderName:z.string().max(30).refine((value) => value.trim().length > 0, {
        message: "Name is required",
      }),
      email: z.string().email("Please enter a valid email.").refine((value) => value.trim().length > 0, {
        message: "Email is required",
      }),
      message: z.string().refine((value) => value.trim().length > 0, {
        message: "Message is required",
      }),
})
type ContactSchemaValidator=z.infer<typeof ContactSchema>
  export default ContactSchemaValidator