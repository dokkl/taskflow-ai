"use client";

import { useSyncExternalStore } from "react";
import { formatLongDate } from "@/lib/dates";
import { useI18n } from "@/lib/i18n/use-i18n";

function subscribe() {
  // The date only needs to be read once per page load; nothing to subscribe to.
  return () => {};
}

/**
 * Shows today's date in the user's timezone. The value is read on the client only
 * (the server snapshot is empty), so static prerendering never bakes in a stale date.
 */
export function CurrentDate({ timezone, className }: { timezone: string; className?: string }) {
  const { intlLocale } = useI18n();
  const label = useSyncExternalStore(
    subscribe,
    () => formatLongDate(new Date(), timezone, intlLocale),
    () => null,
  );

  return (
    <p className={className} aria-live="off">
      {label ?? " "}
    </p>
  );
}
