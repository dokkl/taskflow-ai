"use client";

import { useEffect } from "react";
import { useI18n } from "@/lib/i18n/use-i18n";

/** Keeps <html lang> in step with the chosen UI language (screen readers, hyphenation, fonts). */
export function LocaleSync() {
  const { locale } = useI18n();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
