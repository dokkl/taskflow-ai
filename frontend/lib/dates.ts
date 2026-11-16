import type { TaskStatus } from "@/types/task";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Returns today's date (yyyy-MM-dd) in the given IANA timezone. */
export function todayInTimezone(timeZone: string, now: Date = new Date()): string {
  try {
    // en-CA formats dates as yyyy-MM-dd, which is exactly the backend's LocalDate format.
    return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
  } catch {
    return now.toISOString().slice(0, 10);
  }
}

/** Adds days to a yyyy-MM-dd date without timezone drift. */
export function addDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return date.toISOString().slice(0, 10);
}

export function isIsoDate(value: string | null | undefined): value is string {
  return typeof value === "string" && ISO_DATE.test(value);
}

/** "Nov 15, 2026" (en-US) or "2026. 11. 15." (ko-KR). */
export function formatDate(isoDate: string, locale = "en-US"): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, day)),
  );
}

/** "Monday, November 2, 2026" (en-US) or "2026년 11월 2일 월요일" (ko-KR) in the user's timezone. */
export function formatLongDate(now: Date, timeZone: string, locale = "en-US"): string {
  try {
    return new Intl.DateTimeFormat(locale, { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone }).format(now);
  } catch {
    return new Intl.DateTimeFormat(locale, { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(now);
  }
}

export type DueState = "none" | "overdue" | "today" | "tomorrow" | "upcoming" | "past";

/** Classifies a due date relative to today. Completed tasks are never overdue. */
export function getDueState(dueDate: string | null | undefined, status: TaskStatus, today: string): DueState {
  if (!isIsoDate(dueDate)) return "none";
  if (dueDate < today) return status === "COMPLETED" ? "past" : "overdue";
  if (dueDate === today) return "today";
  if (dueDate === addDays(today, 1)) return "tomorrow";
  return "upcoming";
}

/** Translation key of the short relative label shown next to the due date. */
export function dueStateLabelKey(state: DueState): "due.overdue" | "due.today" | "due.tomorrow" | null {
  switch (state) {
    case "overdue":
      return "due.overdue";
    case "today":
      return "due.today";
    case "tomorrow":
      return "due.tomorrow";
    default:
      return null;
  }
}
