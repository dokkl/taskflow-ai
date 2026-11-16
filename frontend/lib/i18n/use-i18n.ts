"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import { createTranslator, INTL_LOCALES, isLocale, type Locale, type Translator } from "@/lib/i18n/messages";

const STORAGE_KEY = "taskflow.locale";
const CHANGE_EVENT = "taskflow:locale-change";

/**
 * Locale used for server rendering and when nothing else applies. Set NEXT_PUBLIC_DEFAULT_LOCALE=ko
 * to render Korean on first paint (no English flash for Korean users).
 */
export const DEFAULT_LOCALE: Locale = isLocale(process.env.NEXT_PUBLIC_DEFAULT_LOCALE) ? process.env.NEXT_PUBLIC_DEFAULT_LOCALE : "en";

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

function detectBrowserLocale(): Locale | null {
  const languages = typeof navigator === "undefined" ? [] : (navigator.languages ?? [navigator.language]);
  for (const language of languages) {
    const base = language?.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return null;
}

function getClientLocale(): Locale {
  return readStoredLocale() ?? detectBrowserLocale() ?? DEFAULT_LOCALE;
}

function getServerLocale(): Locale {
  return DEFAULT_LOCALE;
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) onChange();
  };
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  window.addEventListener("languagechange", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("languagechange", onChange);
  };
}

/** Persists the chosen locale and notifies every mounted component (and other tabs via `storage`). */
export function setLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* Storage can be unavailable (private mode); the choice still applies to this page. */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export interface I18n {
  locale: Locale;
  /** BCP 47 tag for Intl formatting, e.g. "ko-KR". */
  intlLocale: string;
  t: Translator;
  setLocale: (locale: Locale) => void;
}

/**
 * Current UI language. The choice lives in localStorage, so no provider is needed: every component
 * subscribes to the same store and re-renders when the language changes.
 */
export function useI18n(): I18n {
  const locale = useSyncExternalStore(subscribe, getClientLocale, getServerLocale);
  const t = useMemo(() => createTranslator(locale), [locale]);
  const change = useCallback((next: Locale) => setLocale(next), []);
  return { locale, intlLocale: INTL_LOCALES[locale], t, setLocale: change };
}
