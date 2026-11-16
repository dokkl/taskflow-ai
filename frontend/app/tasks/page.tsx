import { Suspense } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { TaskView } from "@/components/tasks/task-view";

export default function AllTasksPage() {
  return (
    <>
      <PageHeader titleKey="nav.tasks" descriptionKey="page.tasks.description" />
      <Suspense>
        <TaskView emptyTitleKey="page.tasks.emptyTitle" emptyDescriptionKey="page.tasks.emptyDescription" />
      </Suspense>
    </>
  );
}
