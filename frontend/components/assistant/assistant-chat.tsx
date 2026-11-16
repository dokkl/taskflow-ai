"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, Bot, MessageSquarePlus, RefreshCw } from "lucide-react";
import { ChatComposer } from "@/components/assistant/chat-composer";
import { ExamplePrompts } from "@/components/assistant/example-prompts";
import { MessageBubble } from "@/components/assistant/message-bubble";
import { ModeSwitch } from "@/components/assistant/mode-switch";
import { Button } from "@/components/ui/button";
import { useAssistant } from "@/hooks/use-assistant";
import { useI18n } from "@/lib/i18n/use-i18n";
import { cn } from "@/lib/utils";

function TypingIndicator() {
  const { t } = useI18n();
  return (
    <div role="status" aria-live="polite" className="flex items-center gap-2 text-sm text-muted-foreground">
      <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full bg-brand-gradient text-white">
        <Bot className="size-4" />
      </span>
      <span className="inline-flex items-center gap-1 rounded-2xl rounded-bl-md border border-border/70 bg-card px-4 py-2.5">
        <span className="sr-only">{t("assistant.thinking")}</span>
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            aria-hidden="true"
            className="size-1.5 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: `${dot * 150}ms` }}
          />
        ))}
      </span>
    </div>
  );
}

export function AssistantChat() {
  const { t } = useI18n();
  const { messages, mode, setMode, status, backendUnreachable, isSending, error, send, approve, reject, newConversation, retryLast } = useAssistant();
  const bottomRef = useRef<HTMLDivElement>(null);
  const unavailable = status !== null && !status.available;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [messages, isSending]);

  return (
    <section
      aria-label={t("assistant.label")}
      className="flex h-[calc(100vh-13rem)] min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-border/70 bg-background shadow-sm"
    >
      <header className="flex items-center justify-between gap-3 border-b bg-card px-4 py-3">
        <div className="flex min-w-0 items-center gap-2 text-sm">
          <span className={cn("size-2 shrink-0 rounded-full", status === null ? "bg-muted-foreground/40" : status.available ? "bg-emerald-500" : "bg-destructive")} aria-hidden="true" />
          <span className="font-medium" data-testid="active-mode">{mode === "supervisor" ? t("assistant.supervisorName") : t("assistant.mode.agent")}</span>
          <span className="hidden truncate text-muted-foreground sm:inline">
            {status === null ? t("assistant.checking") : status.available ? `Claude · ${status.model}` : t("assistant.unavailable")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ModeSwitch mode={mode} onChange={setMode} disabled={isSending} />
          <Button variant="outline" size="sm" onClick={newConversation} disabled={isSending || messages.length === 0}>
            <MessageSquarePlus data-icon="inline-start" />
            <span className="hidden sm:inline">{t("assistant.newConversation")}</span>
            <span className="sr-only sm:hidden">{t("assistant.newConversation")}</span>
          </Button>
        </div>
      </header>

      {unavailable ? (
        <div role="alert" className="flex items-start gap-3 border-b border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>{status?.message || (backendUnreachable ? t("error.network") : t("assistant.notAvailable"))}</p>
        </div>
      ) : null}

      <div className="flex-1 overflow-y-auto px-4 py-4" data-testid="message-list">
        {messages.length === 0 && !isSending ? (
          <ExamplePrompts mode={mode} onPick={(prompt) => void send(prompt)} disabled={isSending || unavailable} />
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} onApprove={approve} onReject={reject} disabled={isSending} />
            ))}
            {isSending ? <TypingIndicator /> : null}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {error ? (
        <div role="alert" className="flex items-center gap-3 border-t border-destructive/30 bg-destructive/5 px-4 py-2 text-sm">
          <AlertTriangle className="size-4 shrink-0 text-destructive" aria-hidden="true" />
          <span className="flex-1">{error}</span>
          {messages.some((message) => message.failed) ? (
            <Button variant="outline" size="sm" onClick={retryLast} disabled={isSending}>
              <RefreshCw data-icon="inline-start" />
              {t("common.retry")}
            </Button>
          ) : null}
        </div>
      ) : null}

      <div className="border-t bg-card px-4 py-3">
        <ChatComposer onSend={(text) => void send(text)} disabled={isSending || unavailable} />
        <p className="mt-2 text-xs text-muted-foreground">
          {t("assistant.hintKeys")} {mode === "supervisor" ? t("assistant.hintSupervisor") : t("assistant.hintAgent")}
        </p>
      </div>
    </section>
  );
}
