import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gpa: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(parseFloat(val)), {
      message: "GPA must be a number",
    }),
  major: z.string().optional(),
  year: z.string().optional(),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export const addExperienceSchema = z.object({
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z
    .string()
    .min(1, "Start date is required")
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid start date",
    }),
  endDate: z
    .string()
    .min(1, "End date is required")
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid end date",
    }),
  rating: z
    .string()
    .optional()
    .refine(
      (val) => !val || (Number(val) >= 1 && Number(val) <= 5 && Number.isInteger(Number(val))),
      {
        message: "Rating must be an integer between 1 and 5",
      }
    ),
  compensation: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), {
      message: "Compensation must be a number",
    }),
  description: z.string().optional(),
});

export type AddExperienceValues = z.infer<typeof addExperienceSchema>;
