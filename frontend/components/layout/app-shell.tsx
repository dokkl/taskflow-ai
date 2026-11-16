import type { ReactNode } from "react";
import { LocaleSync } from "@/components/i18n/locale-sync";
import { T } from "@/components/i18n/t";
import { Brand } from "@/components/layout/brand";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { TopBar } from "@/components/layout/top-bar";
import { AppProviders } from "@/components/providers/app-providers";
import { TaskFormSheet } from "@/components/tasks/task-form-sheet";
import { Toaster } from "@/components/ui/sonner";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <AppProviders>
      <div className="flex min-h-screen bg-background">
        <aside className="hidden w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground lg:flex">
          <div className="flex h-16 items-center border-b border-sidebar-border px-6">
            <Brand onDark />
          </div>
          <div className="flex-1 p-4">
            <SidebarNav />
          </div>
          <p className="border-t border-sidebar-border px-6 py-4 text-xs text-sidebar-foreground/60">
            <T k="app.tagline" />
          </p>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-6 lg:px-8 lg:py-8">{children}</main>
        </div>
      </div>
      <LocaleSync />
      <TaskFormSheet />
      <Toaster position="bottom-right" richColors closeButton />
    </AppProviders>
  );
}
