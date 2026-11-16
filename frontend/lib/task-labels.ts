import type { TaskPriority, TaskSortField, TaskStatus } from "@/types/task";

/** Translation keys for the enum labels; resolve them with `t()` from `useI18n`. */
export const statusLabelKey = (status: TaskStatus) => `status.${status}` as const;
export const priorityLabelKey = (priority: TaskPriority) => `priority.${priority}` as const;
export const sortFieldLabelKey = (field: TaskSortField) => `sort.${field}` as const;

/** Tailwind classes for the coloured badges. Kept together so the palette stays consistent. */
export const STATUS_BADGE_CLASSES: Record<TaskStatus, string> = {
  TODO: "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200",
  IN_PROGRESS: "border-sky-200 bg-sky-100 text-sky-700 dark:border-sky-800 dark:bg-sky-500/20 dark:text-sky-300",
  COMPLETED: "border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300",
};

export const PRIORITY_BADGE_CLASSES: Record<TaskPriority, string> = {
  LOW: "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-500/20 dark:text-green-300",
  MEDIUM: "border-amber-200 bg-amber-100 text-amber-800 dark:border-amber-800 dark:bg-amber-500/20 dark:text-amber-300",
  HIGH: "border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800 dark:bg-rose-500/20 dark:text-rose-300",
};
