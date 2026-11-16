"use client";

import type { ReactNode } from "react";
import type { MessageKey } from "@/lib/i18n/messages";
import { useI18n } from "@/lib/i18n/use-i18n";

interface PageHeaderProps {
  titleKey: MessageKey;
  descriptionKey?: MessageKey;
  actions?: ReactNode;
}

/**
 * Page heading plus the document title. The title is rendered here (React hoists <title> into <head>)
 * rather than through route metadata so it follows the user's chosen language.
 */
export function PageHeader({ titleKey, descriptionKey, actions }: PageHeaderProps) {
  const { t } = useI18n();
  const title = t(titleKey);

  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <title>{`${title} · TaskFlow AI`}</title>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {descriptionKey ? <p className="mt-1 text-sm text-muted-foreground">{t(descriptionKey)}</p> : null}
      </div>
      {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
