"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useI18n } from "@/lib/i18n/use-i18n";
import type { Task } from "@/types/task";

interface DeleteTaskDialogProps {
  task: Task | null;
  onConfirm: (task: Task) => void;
  onCancel: () => void;
  isPending?: boolean;
}

export function DeleteTaskDialog({ task, onConfirm, onCancel, isPending }: DeleteTaskDialogProps) {
  const { t } = useI18n();
  return (
    <AlertDialog open={task !== null} onOpenChange={(open) => (open ? undefined : onCancel())}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("deleteDialog.title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {task ? t("deleteDialog.description", { title: task.title }) : null}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>{t("common.cancel")}</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault();
              if (task) onConfirm(task);
            }}
          >
            {t("common.delete")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
