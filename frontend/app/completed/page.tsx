import { Suspense } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { TaskView } from "@/components/tasks/task-view";

export default function CompletedPage() {
  return (
    <>
      <PageHeader titleKey="nav.completed" descriptionKey="page.completed.description" />
      <Suspense>
        <TaskView
          scope="completed"
          defaults={{ sortBy: "UPDATED_AT", sortDirection: "DESC" }}
          showStatusFilter={false}
          emptyTitleKey="page.completed.emptyTitle"
          emptyDescriptionKey="page.completed.emptyDescription"
        />
      </Suspense>
    </>
  );
}
