"use client";

import { Bot, Network } from "lucide-react";
import type { MessageKey } from "@/lib/i18n/messages";
import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";
import type { AssistantMode } from "@/types/ai";

const MODE_LABELS: Record<AssistantMode, MessageKey> = {
  agent: "assistant.mode.agent",
  supervisor: "assistant.mode.supervisor",
};

const MODE_HELP: Record<AssistantMode, MessageKey> = {
  agent: "assistant.modeHelp.agent",
  supervisor: "assistant.modeHelp.supervisor",
};

interface ModeSwitchProps {
  mode: AssistantMode;
  onChange: (mode: AssistantMode) => void;
  disabled?: boolean;
}

/** Segmented control choosing which backend entry point answers the next message. */
export function ModeSwitch({ mode, onChange, disabled }: ModeSwitchProps) {
  const { t } = useI18n();
  return (
    <div role="radiogroup" aria-label={t("assistant.mode")} className="inline-flex rounded-lg border border-border/70 bg-muted/40 p-0.5">
      {(["supervisor", "agent"] as const).map((option) => {
        const selected = option === mode;
        const Icon = option === "supervisor" ? Network : Bot;
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            title={selected ? t(MODE_HELP[option]) : `${t(MODE_HELP[option])} ${t("assistant.modeSwitchNote")}`}
            disabled={disabled}
            onClick={() => onChange(option)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors disabled:opacity-50",
              selected ? "bg-brand-gradient text-white shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {t(MODE_LABELS[option])}
          </button>
        );
      })}
    </div>
  );
}
