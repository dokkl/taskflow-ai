"use client";

import { Languages } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LOCALE_NAMES, LOCALES, isLocale } from "@/lib/i18n/messages";
import { useI18n } from "@/lib/i18n/use-i18n";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <Select value={locale} onValueChange={(value) => isLocale(value) && setLocale(value)}>
      <SelectTrigger aria-label={t("language.label")} size="sm" className={className}>
        <Languages className="size-4 text-muted-foreground" aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {LOCALES.map((option) => (
          <SelectItem key={option} value={option} lang={option}>
            {LOCALE_NAMES[option]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
