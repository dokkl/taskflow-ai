"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarClock, CalendarDays, CheckCircle2, LayoutDashboard, ListTodo, Settings, Sparkles } from "lucide-react";
import type { MessageKey } from "@/lib/i18n/messages";
import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

export const NAV_ITEMS: ReadonlyArray<{ href: string; labelKey: MessageKey; icon: typeof LayoutDashboard }> = [
  { href: "/", labelKey: "nav.dashboard", icon: LayoutDashboard },
  { href: "/assistant", labelKey: "nav.assistant", icon: Sparkles },
  { href: "/tasks", labelKey: "nav.tasks", icon: ListTodo },
  { href: "/today", labelKey: "nav.today", icon: CalendarDays },
  { href: "/upcoming", labelKey: "nav.upcoming", icon: CalendarClock },
  { href: "/completed", labelKey: "nav.completed", icon: CheckCircle2 },
  { href: "/settings", labelKey: "nav.settings", icon: Settings },
];

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <nav aria-label={t("nav.main")} className="flex flex-col gap-1">
      {NAV_ITEMS.map(({ href, labelKey, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm shadow-violet-950/40"
                : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {t(labelKey)}
          </Link>
        );
      })}
    </nav>
  );
}
