import { z } from "zod";
import { TASK_PRIORITIES, TASK_STATUSES } from "@/types/task";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Mirrors the Jakarta Bean Validation rules on the backend DTOs.
 * Error messages are translation keys from lib/i18n/messages, translated where they are shown.
 */
export const taskFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "validation.titleRequired")
    .max(150, "validation.titleMax"),
  description: z.string().trim().max(2000, "validation.descriptionMax"),
  priority: z.enum(TASK_PRIORITIES, { message: "validation.priorityRequired" }),
  status: z.enum(TASK_STATUSES, { message: "validation.statusRequired" }),
  dueDate: z
    .string()
    .refine((value) => value === "" || ISO_DATE.test(value), "validation.dateInvalid"),
});

export type TaskFormValues = z.infer<typeof taskFormSchema>;

export const defaultTaskFormValues: TaskFormValues = {
  title: "",
  description: "",
  priority: "MEDIUM",
  status: "TODO",
  dueDate: "",
};
