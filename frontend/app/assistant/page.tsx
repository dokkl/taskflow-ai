import { AssistantChat } from "@/components/assistant/assistant-chat";
import { PageHeader } from "@/components/layout/page-header";

export default function AssistantPage() {
  return (
    <>
      <PageHeader titleKey="nav.assistant" descriptionKey="page.assistant.description" />
      <AssistantChat />
    </>
  );
}
