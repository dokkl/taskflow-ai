"use client";

import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { Brand } from "@/components/layout/brand";
import { CurrentDate } from "@/components/layout/current-date";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { useTaskForm, useUserPreferences } from "@/components/providers/app-providers";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/use-i18n";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function TopBar() {
  const { timezone } = useUserPreferences();
  const { openCreate } = useTaskForm();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-16 items-center gap-3 px-4 md:px-6 lg:px-8">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label={t("nav.open")}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 border-sidebar-border bg-sidebar p-4 text-sidebar-foreground [&>button]:text-sidebar-foreground">
            <SheetHeader className="p-0">
              <SheetTitle asChild>
                <div>
                  <Brand onDark />
                </div>
              </SheetTitle>
              <SheetDescription className="sr-only">{t("nav.description")}</SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <SidebarNav onNavigate={() => setMenuOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>

        <div className="lg:hidden">
          <Brand />
        </div>
        <CurrentDate timezone={timezone} className="ml-auto hidden text-sm text-muted-foreground sm:block" />
        <LanguageSwitcher className="ml-auto sm:ml-2" />

        <Button onClick={openCreate} className="bg-brand-gradient text-white shadow-sm shadow-violet-500/30 hover:opacity-90">
          <Plus data-icon="inline-start" />
          <span className="hidden sm:inline">{t("topbar.addTask")}</span>
          <span className="sr-only sm:hidden">{t("topbar.addTask")}</span>
        </Button>
      </div>
    </header>
  );
}
