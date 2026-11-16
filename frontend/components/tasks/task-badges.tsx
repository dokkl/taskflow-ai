"use client";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n/use-i18n";
import { PRIORITY_BADGE_CLASSES, priorityLabelKey, STATUS_BADGE_CLASSES, statusLabelKey } from "@/lib/task-labels";
import { cn } from "@/lib/utils";
import type { TaskPriority, TaskStatus } from "@/types/task";

export function PriorityBadge({ priority, className }: { priority: TaskPriority; className?: string }) {
  const { t } = useI18n();
  return (
    <Badge variant="outline" className={cn(PRIORITY_BADGE_CLASSES[priority], className)}>
      {t("priority.badge", { priority: t(priorityLabelKey(priority)) })}
    </Badge>
  );
}

export function StatusBadge({ status, className }: { status: TaskStatus; className?: string }) {
  const { t } = useI18n();
  return (
    <Badge variant="outline" className={cn(STATUS_BADGE_CLASSES[status], className)}>
      {t(statusLabelKey(status))}
    </Badge>
  );
}
