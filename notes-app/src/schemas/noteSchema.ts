import { z } from "zod";


export const noteSchema = z.object({
  title: z
    .string()
    .min(3, "عنوان حداقل ۳ کاراکتر باشد"),

  content: z
    .string()
    .min(5, "متن کوتاه است"),
});


export type NoteFormData =
  z.infer<typeof noteSchema>;