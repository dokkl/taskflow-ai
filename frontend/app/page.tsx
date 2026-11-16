import { Suspense } from "react";
import { T } from "@/components/i18n/t";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { PageHeader } from "@/components/layout/page-header";
import { TaskView } from "@/components/tasks/task-view";

export default function DashboardPage() {
  return (
    <>
      <PageHeader titleKey="nav.dashboard" descriptionKey="page.dashboard.description" />
      <div className="space-y-8">
        <StatsCards />
        <section aria-labelledby="dashboard-tasks-heading" className="space-y-4">
          <h2 id="dashboard-tasks-heading" className="text-lg font-semibold tracking-tight">
            <T k="page.dashboard.tasksHeading" />
          </h2>
          <Suspense>
            <TaskView
              defaults={{ sortBy: "DUE_DATE", sortDirection: "ASC" }}
              emptyTitleKey="page.dashboard.emptyTitle"
              emptyDescriptionKey="page.dashboard.emptyDescription"
            />
          </Suspense>
        </section>
      </div>
    </>
  );
}
