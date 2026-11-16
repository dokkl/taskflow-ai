"use client";

import type { MessageKey, TranslationParams } from "@/lib/i18n/messages";
import { useI18n } from "@/lib/i18n/use-i18n";

/** Renders a translated string. Lets server components show text in the user's chosen language. */
export function T({ k, params }: { k: MessageKey; params?: TranslationParams }) {
  const { t } = useI18n();
  return <>{t(k, params)}</>;
}
