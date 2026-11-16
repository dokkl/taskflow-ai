import { z } from "zod";

export function isValidTimezone(value: string): boolean {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: value });
    return true;
  } catch {
    return false;
  }
}

/** Error messages are translation keys from lib/i18n/messages. */
export const preferencesFormSchema = z.object({
  timezone: z
    .string()
    .trim()
    .min(1, "validation.timezoneRequired")
    .refine(isValidTimezone, "validation.timezoneInvalid"),
  dailyAvailableMinutes: z
    .number({ message: "validation.minutesNumber" })
    .int("validation.minutesInteger")
    .min(0, "validation.minutesMin")
    .max(1440, "validation.minutesMax"),
});

export type PreferencesFormValues = z.infer<typeof preferencesFormSchema>;
