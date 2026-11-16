"use client";

import { useEffect, useState } from "react";
import { ArrowDownAZ, ArrowUpAZ, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { TaskListParams } from "@/hooks/use-task-query-params";
import { useI18n } from "@/lib/i18n/use-i18n";
import { priorityLabelKey, sortFieldLabelKey, statusLabelKey } from "@/lib/task-labels";
import { TASK_PRIORITIES, TASK_SORT_FIELDS, TASK_STATUSES } from "@/types/task";

const ALL = "ALL";

interface TaskFiltersProps {
  params: TaskListParams;
  onChange: (changes: Partial<TaskListParams>) => void;
  onReset: () => void;
  showStatusFilter?: boolean;
}

export function TaskFilters({ params, onChange, onReset, showStatusFilter = true }: TaskFiltersProps) {
  const { t } = useI18n();
  // Local text state so typing feels instant; the URL (and the request) update after a short debounce.
  const [searchText, setSearchText] = useState(params.search);
  const [syncedSearch, setSyncedSearch] = useState(params.search);
  if (syncedSearch !== params.search) {
    setSyncedSearch(params.search);
    setSearchText(params.search);
  }

  useEffect(() => {
    if (searchText === params.search) return;
    const timeout = setTimeout(() => onChange({ search: searchText }), 300);
    return () => clearTimeout(timeout);
  }, [searchText, params.search, onChange]);

  const hasActiveFilters = params.search !== "" || params.priority !== "" || (showStatusFilter && params.status !== "");

  return (
    <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
      <div className="relative min-w-0 flex-1 md:max-w-sm">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          type="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder={t("filters.searchPlaceholder")}
          aria-label={t("filters.search")}
          className="pl-8"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {showStatusFilter ? (
          <Select value={params.status || ALL} onValueChange={(value) => onChange({ status: value === ALL ? "" : (value as TaskListParams["status"]) })}>
            <SelectTrigger aria-label={t("filters.byStatus")} className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>{t("filters.allStatuses")}</SelectItem>
              {TASK_STATUSES.map((status) => (
                <SelectItem key={status} value={status}>
                  {t(statusLabelKey(status))}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : null}

        <Select value={params.priority || ALL} onValueChange={(value) => onChange({ priority: value === ALL ? "" : (value as TaskListParams["priority"]) })}>
          <SelectTrigger aria-label={t("filters.byPriority")} className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>{t("filters.allPriorities")}</SelectItem>
            {TASK_PRIORITIES.map((priority) => (
              <SelectItem key={priority} value={priority}>
                {t(priorityLabelKey(priority))}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={params.sortBy} onValueChange={(value) => onChange({ sortBy: value as TaskListParams["sortBy"] })}>
          <SelectTrigger aria-label={t("filters.sortBy")} className="w-[150px]">
            <span className="text-muted-foreground">{t("filters.sortPrefix")}</span>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {TASK_SORT_FIELDS.map((field) => (
              <SelectItem key={field} value={field}>
                {t(sortFieldLabelKey(field))}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="icon"
          aria-label={params.sortDirection === "ASC" ? t("filters.sortedAsc") : t("filters.sortedDesc")}
          onClick={() => onChange({ sortDirection: params.sortDirection === "ASC" ? "DESC" : "ASC" })}
        >
          {params.sortDirection === "ASC" ? <ArrowUpAZ /> : <ArrowDownAZ />}
        </Button>

        {hasActiveFilters ? (
          <Button variant="ghost" size="sm" onClick={onReset}>
            <X data-icon="inline-start" />
            {t("common.clear")}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
