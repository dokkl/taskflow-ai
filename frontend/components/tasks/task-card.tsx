"use client";

import { CalendarDays, Check, Pencil, Play, RotateCcw, Trash2 } from "lucide-react";
import { PriorityBadge, StatusBadge } from "@/components/tasks/task-badges";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { dueStateLabelKey, formatDate, getDueState } from "@/lib/dates";
import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";
import type { Task, TaskStatus } from "@/types/task";

export interface TaskCardProps {
  task: Task;
  /** Today's date (yyyy-MM-dd) in the user's timezone, used to flag overdue tasks. */
  today: string;
  onEdit: (task: Task) => void;
  onDelete: (task: Task) => void;
  onStatusChange: (task: Task, status: TaskStatus) => void;
  disabled?: boolean;
}

function ActionButton({ label, onClick, disabled, children }: { label: string; onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon-sm" aria-label={label} onClick={onClick} disabled={disabled}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export function TaskCard({ task, today, onEdit, onDelete, onStatusChange, disabled }: TaskCardProps) {
  const { t, intlLocale } = useI18n();
  const completed = task.status === "COMPLETED";
  const dueState = getDueState(task.dueDate, task.status, today);
  const overdue = dueState === "overdue";
  const dueLabelKey = dueStateLabelKey(dueState);
  const dueLabel = dueLabelKey ? t(dueLabelKey) : null;

  return (
    <Card
      data-testid="task-card"
      data-overdue={overdue ? "true" : undefined}
      className={cn(
        "rounded-xl border-border/70 p-4 shadow-sm shadow-violet-900/5 transition-shadow hover:shadow-md",
        overdue && "border-rose-300 bg-rose-50/40",
        completed && "bg-muted/30",
      )}
    >
      <div className="flex items-start gap-3">
        <Button
          variant="outline"
          size="icon-sm"
          aria-label={completed ? t("task.markNotCompleted") : t("task.markCompleted")}
          aria-pressed={completed}
          disabled={disabled}
          onClick={() => onStatusChange(task, completed ? "TODO" : "COMPLETED")}
          className={cn("mt-0.5 shrink-0 rounded-full", completed && "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground")}
        >
          {completed ? <Check /> : <span className="sr-only">{t("task.complete")}</span>}
        </Button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3 className={cn("text-base font-medium leading-snug", completed && "text-muted-foreground line-through")}>{task.title}</h3>
            <div className="flex shrink-0 items-center gap-1">
              {task.status === "TODO" ? (
                <ActionButton label={t("task.start")} onClick={() => onStatusChange(task, "IN_PROGRESS")} disabled={disabled}>
                  <Play />
                </ActionButton>
              ) : null}
              {completed ? (
                <ActionButton label={t("task.reopen")} onClick={() => onStatusChange(task, "TODO")} disabled={disabled}>
                  <RotateCcw />
                </ActionButton>
              ) : (
                <ActionButton label={t("task.completeTask")} onClick={() => onStatusChange(task, "COMPLETED")} disabled={disabled}>
                  <Check />
                </ActionButton>
              )}
              <ActionButton label={t("task.edit")} onClick={() => onEdit(task)} disabled={disabled}>
                <Pencil />
              </ActionButton>
              <ActionButton label={t("task.delete")} onClick={() => onDelete(task)} disabled={disabled}>
                <Trash2 className="text-destructive" />
              </ActionButton>
            </div>
          </div>

          {task.description ? <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{task.description}</p> : null}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <PriorityBadge priority={task.priority} />
            <StatusBadge status={task.status} />
            {task.dueDate ? (
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-xs text-muted-foreground",
                  overdue && "font-medium text-rose-700",
                  dueState === "today" && "font-medium text-amber-700",
                )}
              >
                <CalendarDays className="size-3.5" aria-hidden="true" />
                <span>{t("due.on", { date: formatDate(task.dueDate, intlLocale) })}</span>
                {dueLabel ? <span aria-label={t("due.status", { label: dueLabel })}>· {dueLabel}</span> : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}
