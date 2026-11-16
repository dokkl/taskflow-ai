"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";
import { useDataRefresh } from "@/components/providers/app-providers";
import { getErrorMessage } from "@/lib/api/client";
import { tasksApi } from "@/lib/api/tasks";
import { useI18n } from "@/lib/i18n/use-i18n";
import type { CreateTaskRequest, Task, TaskStatus, UpdateTaskRequest } from "@/types/task";

/**
 * Wraps every task mutation with toast feedback and a data refresh so that
 * task lists and dashboard statistics update after each change.
 */
export function useTaskMutations() {
  const { invalidate } = useDataRefresh();
  const { t } = useI18n();
  const [isPending, setIsPending] = useState(false);

  const run = useCallback(
    async <T,>(action: () => Promise<T>, successMessage: string): Promise<T | null> => {
      setIsPending(true);
      try {
        const result = await action();
        invalidate();
        toast.success(successMessage);
        return result;
      } catch (error) {
        toast.error(getErrorMessage(error, t));
        return null;
      } finally {
        setIsPending(false);
      }
    },
    [invalidate, t],
  );

  const createTask = useCallback(
    (request: CreateTaskRequest) => run(() => tasksApi.create(request), t("toast.taskCreated")),
    [run, t],
  );

  const updateTask = useCallback(
    (id: string, request: UpdateTaskRequest) => run(() => tasksApi.update(id, request), t("toast.taskUpdated")),
    [run, t],
  );

  const changeStatus = useCallback(
    (task: Task, status: TaskStatus) => {
      const message =
        status === "COMPLETED"
          ? t("toast.taskCompleted")
          : task.status === "COMPLETED"
            ? t("toast.taskReopened")
            : t("toast.statusUpdated");
      return run(() => tasksApi.updateStatus(task.id, status), message);
    },
    [run, t],
  );

  const deleteTask = useCallback(
    (task: Task) => run(() => tasksApi.remove(task.id).then(() => true), t("toast.taskDeleted")),
    [run, t],
  );

  return { createTask, updateTask, changeStatus, deleteTask, isPending };
}
