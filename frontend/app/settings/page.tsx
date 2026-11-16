import { PageHeader } from "@/components/layout/page-header";
import { PreferencesForm } from "@/components/settings/preferences-form";

export default function SettingsPage() {
  return (
    <>
      <PageHeader titleKey="nav.settings" descriptionKey="page.settings.description" />
      <div className="max-w-2xl">
        <PreferencesForm />
      </div>
    </>
  );
}
