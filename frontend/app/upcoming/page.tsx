import { Suspense } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { TaskView } from "@/components/tasks/task-view";

export default function UpcomingPage() {
  return (
    <>
      <PageHeader titleKey="nav.upcoming" descriptionKey="page.upcoming.description" />
      <Suspense>
        <TaskView
          scope="upcoming"
          defaults={{ sortBy: "DUE_DATE", sortDirection: "ASC" }}
          emptyTitleKey="page.upcoming.emptyTitle"
          emptyDescriptionKey="page.upcoming.emptyDescription"
        />
      </Suspense>
    </>
  );
}
