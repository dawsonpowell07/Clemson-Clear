import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gpa: z.string().optional(), // Adjust validation as needed
  major: z.string().optional(),
  year: z.string().optional(),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export const addExperienceSchema = z.object({
  company: z.string().min(1, "Company name is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  rating: z.number().min(1).max(5, "Rating must be between 1 and 5"),
  compensation: z.number().min(0, "Compensation is required"),
  description: z.string().optional(),
});

export type AddExperienceValues = z.infer<typeof addExperienceSchema>;
