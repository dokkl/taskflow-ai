import { act, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TaskForm } from "@/components/tasks/task-form";
import { TaskList } from "@/components/tasks/task-list";
import { createTranslator, en, ko } from "@/lib/i18n/messages";
import { setLocale } from "@/lib/i18n/use-i18n";
import { makeTask, renderWithProviders } from "./test-utils";

const listProps = {
  today: "2026-11-15",
  isLoading: false,
  error: null,
  onRetry: vi.fn(),
  onEdit: vi.fn(),
  onDelete: vi.fn(),
  onStatusChange: vi.fn(),
  emptyTitle: "empty",
  emptyDescription: "empty",
};

afterEach(() => {
  window.localStorage.clear();
});

describe("translations", () => {
  it("provides a non-empty Korean string for every English key", () => {
    for (const key of Object.keys(en)) {
      expect(ko[key as keyof typeof ko], key).toBeTruthy();
    }
    expect(Object.keys(ko).sort()).toEqual(Object.keys(en).sort());
  });

  it("interpolates parameters", () => {
    expect(createTranslator("ko")("pagination.page", { page: 2, total: 5 })).toBe("2 / 5 페이지");
    expect(createTranslator("en")("pagination.page", { page: 2, total: 5 })).toBe("Page 2 of 5");
  });
});

describe("language switching", () => {
  it("renders task labels in Korean once the locale is set to ko", () => {
    setLocale("ko");
    renderWithProviders(<TaskList {...listProps} tasks={[makeTask({ priority: "HIGH", status: "IN_PROGRESS", dueDate: "2026-11-15" })]} />);

    expect(screen.getByText("우선순위 높음")).toBeInTheDocument();
    expect(screen.getByText("진행 중")).toBeInTheDocument();
    expect(screen.getByText("· 오늘")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "작업 수정" })).toBeInTheDocument();
  });

  it("re-renders mounted components when the language changes", () => {
    renderWithProviders(<TaskForm mode="create" onSubmit={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Create task" })).toBeInTheDocument();

    act(() => setLocale("ko"));
    expect(screen.getByRole("button", { name: "작업 만들기" })).toBeInTheDocument();
    expect(screen.getByLabelText("제목")).toBeInTheDocument();

    act(() => setLocale("en"));
    expect(screen.getByRole("button", { name: "Create task" })).toBeInTheDocument();
  });
});
