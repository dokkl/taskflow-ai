import { Suspense } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { TaskView } from "@/components/tasks/task-view";

export default function TodayPage() {
  return (
    <>
      <PageHeader titleKey="nav.today" descriptionKey="page.today.description" />
      <Suspense>
        <TaskView
          scope="today"
          defaults={{ sortBy: "PRIORITY", sortDirection: "DESC" }}
          emptyTitleKey="page.today.emptyTitle"
          emptyDescriptionKey="page.today.emptyDescription"
        />
      </Suspense>
    </>
  );
}
