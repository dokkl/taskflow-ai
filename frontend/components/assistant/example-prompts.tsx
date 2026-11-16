"use client";

import { Sparkles } from "lucide-react";
import type { MessageKey } from "@/lib/i18n/messages";
import { useI18n } from "@/lib/i18n/use-i18n";
import type { AssistantMode } from "@/types/ai";

/** Example prompts are translated too: the assistant answers in the language it is asked in. */
export const EXAMPLE_PROMPTS: Record<AssistantMode, readonly MessageKey[]> = {
  agent: ["assistant.example.createTask", "assistant.example.pending", "assistant.example.overdue", "assistant.example.complete"],
  supervisor: ["assistant.example.planDay", "assistant.example.focus", "assistant.example.summary", "assistant.example.createTask"],
};

const COPY: Record<AssistantMode, { title: MessageKey; description: MessageKey }> = {
  agent: { title: "assistant.intro.agent.title", description: "assistant.intro.agent.description" },
  supervisor: { title: "assistant.intro.supervisor.title", description: "assistant.intro.supervisor.description" },
};

export function ExamplePrompts({
  mode,
  onPick,
  disabled,
}: {
  mode: AssistantMode;
  onPick: (prompt: string) => void;
  disabled?: boolean;
}) {
  const { t } = useI18n();
  const copy = COPY[mode];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-md shadow-violet-500/30">
        <Sparkles className="size-6" aria-hidden="true" />
      </span>
      <div>
        <h2 className="text-lg font-semibold tracking-tight">{t(copy.title)}</h2>
        <p className="mt-1 max-w-md text-sm text-muted-foreground">{t(copy.description)}</p>
      </div>
      <ul className="grid w-full max-w-xl gap-2 sm:grid-cols-2" aria-label={t("assistant.examples")}>
        {EXAMPLE_PROMPTS[mode].map((key) => (
          <li key={key}>
            <button
              type="button"
              onClick={() => onPick(t(key))}
              disabled={disabled}
              className="w-full rounded-xl border border-border/70 bg-card px-3 py-2.5 text-left text-sm shadow-sm transition-colors hover:border-primary/40 hover:bg-accent disabled:opacity-50"
            >
              {t(key)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
