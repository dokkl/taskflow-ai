/**
 * UI translations. `en` is the source of truth for the key set; every other locale must provide
 * exactly the same keys (enforced by the `Messages` type). Placeholders use `{name}` syntax.
 */
export const en = {
  // App / navigation
  "app.tagline": "Phase 0 · Personal Task Manager",
  "nav.main": "Main navigation",
  "nav.dashboard": "Dashboard",
  "nav.assistant": "AI Assistant",
  "nav.tasks": "All Tasks",
  "nav.today": "Today",
  "nav.upcoming": "Upcoming",
  "nav.completed": "Completed",
  "nav.settings": "Settings",
  "nav.open": "Open navigation",
  "nav.description": "Navigate between TaskFlow pages",
  "topbar.addTask": "Add Task",
  "language.label": "Language",

  // Pages
  "page.dashboard.description": "An overview of your tasks and what needs attention.",
  "page.dashboard.tasksHeading": "Tasks",
  "page.dashboard.emptyTitle": "No tasks yet",
  "page.dashboard.emptyDescription": "Create your first task to start planning your day.",
  "page.assistant.description":
    "Manage your tasks in plain language. Switch between the single TaskAgent and the TaskFlow Supervisor that routes to specialised agents (LangChain4j + Claude).",
  "page.tasks.description": "Every task, with filters, sorting and pagination.",
  "page.tasks.emptyTitle": "No tasks found",
  "page.tasks.emptyDescription": "Try clearing the filters, or add a new task.",
  "page.today.description": "Open tasks due today in your configured timezone.",
  "page.today.emptyTitle": "Nothing due today",
  "page.today.emptyDescription": "Enjoy the breathing room, or pull something forward from Upcoming.",
  "page.upcoming.description": "Open tasks due tomorrow or later.",
  "page.upcoming.emptyTitle": "No upcoming tasks",
  "page.upcoming.emptyDescription": "Tasks with a future due date will appear here.",
  "page.completed.description": "Everything you have finished. Reopen a task to bring it back.",
  "page.completed.emptyTitle": "No completed tasks yet",
  "page.completed.emptyDescription": "Completed tasks will show up here once you mark them done.",
  "page.settings.description": "Configure how TaskFlow interprets dates and your daily capacity.",

  // Common
  "common.retry": "Retry",
  "common.cancel": "Cancel",
  "common.delete": "Delete",
  "common.close": "Close",
  "common.reset": "Reset",
  "common.clear": "Clear",

  // Errors
  "error.network": "Cannot reach the TaskFlow backend. Is it running?",
  "error.generic": "Something went wrong",
  "error.requestFailed": "Request failed with status {status}",

  // Task labels
  "status.TODO": "To do",
  "status.IN_PROGRESS": "In progress",
  "status.COMPLETED": "Completed",
  "priority.LOW": "Low",
  "priority.MEDIUM": "Medium",
  "priority.HIGH": "High",
  "priority.badge": "{priority} priority",
  "sort.CREATED_AT": "Created",
  "sort.UPDATED_AT": "Last updated",
  "sort.DUE_DATE": "Due date",
  "sort.PRIORITY": "Priority",
  "due.overdue": "Overdue",
  "due.today": "Today",
  "due.tomorrow": "Tomorrow",
  "due.on": "Due {date}",
  "due.status": "Due status: {label}",

  // Dashboard stats
  "stats.label": "Statistics",
  "stats.loadError": "Could not load statistics: {message}",
  "stats.total": "Total Tasks",
  "stats.pending": "Pending",
  "stats.inProgress": "In Progress",
  "stats.completed": "Completed",
  "stats.overdue": "{count} overdue",
  "stats.dueToday": "{count} due today",
  "stats.nothingOverdue": "Nothing overdue",

  // Task list / card
  "tasks.loading": "Loading tasks",
  "tasks.loadError": "Could not load tasks: {message}",
  "tasks.addTask": "Add task",
  "task.markCompleted": "Mark as completed",
  "task.markNotCompleted": "Mark as not completed",
  "task.complete": "Complete",
  "task.start": "Start task",
  "task.reopen": "Reopen task",
  "task.completeTask": "Complete task",
  "task.edit": "Edit task",
  "task.delete": "Delete task",

  // Filters
  "filters.search": "Search tasks",
  "filters.searchPlaceholder": "Search tasks…",
  "filters.byStatus": "Filter by status",
  "filters.allStatuses": "All statuses",
  "filters.byPriority": "Filter by priority",
  "filters.allPriorities": "All priorities",
  "filters.sortBy": "Sort by",
  "filters.sortPrefix": "Sort:",
  "filters.sortedAsc": "Sorted ascending, switch to descending",
  "filters.sortedDesc": "Sorted descending, switch to ascending",

  // Pagination
  "pagination.label": "Pagination",
  "pagination.showing": "Showing {from}–{to} of {total}",
  "pagination.perPage": "Tasks per page",
  "pagination.pageSize": "{size} / page",
  "pagination.previous": "Previous",
  "pagination.previousPage": "Previous page",
  "pagination.next": "Next",
  "pagination.nextPage": "Next page",
  "pagination.page": "Page {page} of {total}",

  // Delete dialog
  "deleteDialog.title": "Delete this task?",
  "deleteDialog.description": "“{title}” will be permanently removed. This cannot be undone.",

  // Task form
  "taskForm.newTitle": "New task",
  "taskForm.editTitle": "Edit task",
  "taskForm.newDescription": "Add a task to your list. You can change everything later.",
  "taskForm.editDescription": "Update the details, priority, status or due date.",
  "taskForm.title": "Title",
  "taskForm.titlePlaceholder": "What needs to be done?",
  "taskForm.description": "Description",
  "taskForm.descriptionPlaceholder": "Add details, links or notes (optional)",
  "taskForm.priority": "Priority",
  "taskForm.priorityPlaceholder": "Choose a priority",
  "taskForm.status": "Status",
  "taskForm.statusPlaceholder": "Choose a status",
  "taskForm.dueDate": "Due date",
  "taskForm.create": "Create task",
  "taskForm.save": "Save changes",

  // Toasts
  "toast.taskCreated": "Task created",
  "toast.taskUpdated": "Task updated",
  "toast.taskCompleted": "Task completed",
  "toast.taskReopened": "Task reopened",
  "toast.statusUpdated": "Status updated",
  "toast.taskDeleted": "Task deleted",
  "toast.preferencesSaved": "Preferences saved",

  // Validation
  "validation.titleRequired": "Title is required",
  "validation.titleMax": "Title must be at most 150 characters",
  "validation.descriptionMax": "Description must be at most 2000 characters",
  "validation.priorityRequired": "Choose a priority",
  "validation.statusRequired": "Choose a status",
  "validation.dateInvalid": "Enter a valid date",
  "validation.timezoneRequired": "Timezone is required",
  "validation.timezoneInvalid": "Enter a valid IANA timezone such as Asia/Colombo",
  "validation.minutesNumber": "Enter a number of minutes",
  "validation.minutesInteger": "Minutes must be a whole number",
  "validation.minutesMin": "Minutes must be at least 0",
  "validation.minutesMax": "Minutes must be at most 1440 (24 hours)",

  // Settings
  "settings.title": "Preferences",
  "settings.description": "These settings drive date calculations today and daily planning in later phases.",
  "settings.timezone": "Timezone",
  "settings.timezoneHint": "IANA identifier. Today in this timezone: {today}",
  "settings.minutes": "Daily available minutes",
  "settings.hoursPerDay": "{hours} hours per day",
  "settings.minutesHint": "Minutes you can dedicate to tasks each day",
  "settings.save": "Save preferences",

  // Assistant
  "assistant.label": "AI assistant",
  "assistant.thinking": "Thinking",
  "assistant.supervisorName": "TaskFlow Supervisor",
  "assistant.checking": "Checking…",
  "assistant.unavailable": "Unavailable",
  "assistant.notAvailable": "The AI assistant is not available.",
  "assistant.newConversation": "New conversation",
  "assistant.hintKeys": "Enter to send · Shift+Enter for a new line ·",
  "assistant.hintSupervisor": "The supervisor picks the agent; only TaskAgent can change tasks.",
  "assistant.hintAgent": "The assistant never deletes a task without your approval.",
  "assistant.inputLabel": "Message the assistant",
  "assistant.inputPlaceholder": "Ask TaskAgent… e.g. “Create a high-priority task for tomorrow”",
  "assistant.send": "Send message",
  "assistant.mode": "Assistant mode",
  "assistant.mode.agent": "TaskAgent",
  "assistant.mode.supervisor": "Supervisor",
  "assistant.modeHelp.agent": "One agent that creates, finds and updates tasks (Phase 1).",
  "assistant.modeHelp.supervisor": "Routes to TaskAgent, PriorityAgent, PlanningAgent and SummaryAgent (Phase 2).",
  "assistant.modeSwitchNote": "Switching starts a new conversation.",
  "assistant.examples": "Example prompts",
  "assistant.intro.agent.title": "Ask TaskAgent",
  "assistant.intro.agent.description":
    "Create, find, update and complete tasks in plain language. Deleting a task always asks for your approval first.",
  "assistant.intro.supervisor.title": "Ask the TaskFlow Supervisor",
  "assistant.intro.supervisor.description":
    "One request, the right specialist: TaskAgent manages tasks, PriorityAgent ranks them, PlanningAgent plans your day and SummaryAgent reports progress.",
  "assistant.example.createTask": "Create a high-priority task to review the architecture document tomorrow.",
  "assistant.example.pending": "Show my pending tasks.",
  "assistant.example.overdue": "What tasks are overdue?",
  "assistant.example.complete": "Mark my API review task as completed.",
  "assistant.example.planDay": "Plan my day.",
  "assistant.example.focus": "What should I focus on first?",
  "assistant.example.summary": "Summarise my progress this week.",
  "assistant.execution": "Execution details",
  "assistant.execution.agents": "Agents: {list}",
  "assistant.execution.direct": "Answered by the supervisor directly",
  "assistant.execution.tools": "Tools: {list}",
  "assistant.execution.failed": "failed",
  "assistant.execution.llmCall": "{count} LLM call",
  "assistant.execution.llmCalls": "{count} LLM calls",
  "assistant.execution.tokens": "{count} tokens",
  "assistant.execution.request": "request {id}",
  "assistant.notSent": "Not sent",
  "confirm.label": "Confirmation required",
  "confirm.title": "Delete this task?",
  "confirm.warning": "This cannot be undone. Nothing is deleted until you approve it here.",
  "confirm.approved": "Approved",
  "confirm.rejected": "Kept",
  "confirm.expired": "No longer valid",
  "confirm.approve": "Approve deletion",
  "confirm.keep": "Keep task",
  "confirm.deleted": "Deleted",
} as const;

export type MessageKey = keyof typeof en;
export type Messages = Record<MessageKey, string>;

export const ko: Messages = {
  "app.tagline": "Phase 0 · 개인 작업 관리자",
  "nav.main": "주 메뉴",
  "nav.dashboard": "대시보드",
  "nav.assistant": "AI 어시스턴트",
  "nav.tasks": "전체 작업",
  "nav.today": "오늘",
  "nav.upcoming": "예정",
  "nav.completed": "완료됨",
  "nav.settings": "설정",
  "nav.open": "메뉴 열기",
  "nav.description": "TaskFlow 페이지 간 이동",
  "topbar.addTask": "작업 추가",
  "language.label": "언어",

  "page.dashboard.description": "작업 현황과 지금 주의가 필요한 항목을 한눈에 확인하세요.",
  "page.dashboard.tasksHeading": "작업",
  "page.dashboard.emptyTitle": "아직 작업이 없습니다",
  "page.dashboard.emptyDescription": "첫 작업을 만들어 하루 계획을 시작해 보세요.",
  "page.assistant.description":
    "자연어로 작업을 관리하세요. 단일 TaskAgent와 전문 에이전트에게 요청을 분배하는 TaskFlow Supervisor(LangChain4j + Claude) 중에서 선택할 수 있습니다.",
  "page.tasks.description": "필터, 정렬, 페이지 이동을 지원하는 전체 작업 목록입니다.",
  "page.tasks.emptyTitle": "작업을 찾을 수 없습니다",
  "page.tasks.emptyDescription": "필터를 해제하거나 새 작업을 추가해 보세요.",
  "page.today.description": "설정한 시간대 기준으로 오늘 마감인 미완료 작업입니다.",
  "page.today.emptyTitle": "오늘 마감인 작업이 없습니다",
  "page.today.emptyDescription": "여유를 즐기거나, 예정된 작업을 미리 처리해 보세요.",
  "page.upcoming.description": "내일 이후 마감인 미완료 작업입니다.",
  "page.upcoming.emptyTitle": "예정된 작업이 없습니다",
  "page.upcoming.emptyDescription": "마감일이 미래인 작업이 여기에 표시됩니다.",
  "page.completed.description": "완료한 모든 작업입니다. 작업을 다시 열어 되돌릴 수 있습니다.",
  "page.completed.emptyTitle": "아직 완료한 작업이 없습니다",
  "page.completed.emptyDescription": "작업을 완료로 표시하면 여기에 나타납니다.",
  "page.settings.description": "TaskFlow가 날짜를 해석하는 방식과 하루 작업 가능 시간을 설정합니다.",

  "common.retry": "다시 시도",
  "common.cancel": "취소",
  "common.delete": "삭제",
  "common.close": "닫기",
  "common.reset": "초기화",
  "common.clear": "지우기",

  "error.network": "TaskFlow 백엔드에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요.",
  "error.generic": "문제가 발생했습니다",
  "error.requestFailed": "요청이 실패했습니다 (상태 코드 {status})",

  "status.TODO": "할 일",
  "status.IN_PROGRESS": "진행 중",
  "status.COMPLETED": "완료",
  "priority.LOW": "낮음",
  "priority.MEDIUM": "보통",
  "priority.HIGH": "높음",
  "priority.badge": "우선순위 {priority}",
  "sort.CREATED_AT": "생성일",
  "sort.UPDATED_AT": "최근 수정일",
  "sort.DUE_DATE": "마감일",
  "sort.PRIORITY": "우선순위",
  "due.overdue": "기한 지남",
  "due.today": "오늘",
  "due.tomorrow": "내일",
  "due.on": "마감 {date}",
  "due.status": "마감 상태: {label}",

  "stats.label": "통계",
  "stats.loadError": "통계를 불러오지 못했습니다: {message}",
  "stats.total": "전체 작업",
  "stats.pending": "대기 중",
  "stats.inProgress": "진행 중",
  "stats.completed": "완료",
  "stats.overdue": "기한 지남 {count}건",
  "stats.dueToday": "오늘 마감 {count}건",
  "stats.nothingOverdue": "기한 지난 작업 없음",

  "tasks.loading": "작업을 불러오는 중",
  "tasks.loadError": "작업을 불러오지 못했습니다: {message}",
  "tasks.addTask": "작업 추가",
  "task.markCompleted": "완료로 표시",
  "task.markNotCompleted": "미완료로 표시",
  "task.complete": "완료",
  "task.start": "작업 시작",
  "task.reopen": "작업 다시 열기",
  "task.completeTask": "작업 완료",
  "task.edit": "작업 수정",
  "task.delete": "작업 삭제",

  "filters.search": "작업 검색",
  "filters.searchPlaceholder": "작업 검색…",
  "filters.byStatus": "상태로 필터",
  "filters.allStatuses": "모든 상태",
  "filters.byPriority": "우선순위로 필터",
  "filters.allPriorities": "모든 우선순위",
  "filters.sortBy": "정렬 기준",
  "filters.sortPrefix": "정렬:",
  "filters.sortedAsc": "오름차순 정렬됨, 내림차순으로 전환",
  "filters.sortedDesc": "내림차순 정렬됨, 오름차순으로 전환",

  "pagination.label": "페이지 이동",
  "pagination.showing": "전체 {total}개 중 {from}–{to}",
  "pagination.perPage": "페이지당 작업 수",
  "pagination.pageSize": "{size}개씩",
  "pagination.previous": "이전",
  "pagination.previousPage": "이전 페이지",
  "pagination.next": "다음",
  "pagination.nextPage": "다음 페이지",
  "pagination.page": "{page} / {total} 페이지",

  "deleteDialog.title": "이 작업을 삭제할까요?",
  "deleteDialog.description": "“{title}” 작업이 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.",

  "taskForm.newTitle": "새 작업",
  "taskForm.editTitle": "작업 수정",
  "taskForm.newDescription": "목록에 작업을 추가합니다. 모든 내용은 나중에 변경할 수 있습니다.",
  "taskForm.editDescription": "세부 내용, 우선순위, 상태 또는 마감일을 수정합니다.",
  "taskForm.title": "제목",
  "taskForm.titlePlaceholder": "무엇을 해야 하나요?",
  "taskForm.description": "설명",
  "taskForm.descriptionPlaceholder": "세부 내용, 링크, 메모 추가 (선택)",
  "taskForm.priority": "우선순위",
  "taskForm.priorityPlaceholder": "우선순위 선택",
  "taskForm.status": "상태",
  "taskForm.statusPlaceholder": "상태 선택",
  "taskForm.dueDate": "마감일",
  "taskForm.create": "작업 만들기",
  "taskForm.save": "변경 사항 저장",

  "toast.taskCreated": "작업을 만들었습니다",
  "toast.taskUpdated": "작업을 수정했습니다",
  "toast.taskCompleted": "작업을 완료했습니다",
  "toast.taskReopened": "작업을 다시 열었습니다",
  "toast.statusUpdated": "상태를 변경했습니다",
  "toast.taskDeleted": "작업을 삭제했습니다",
  "toast.preferencesSaved": "설정을 저장했습니다",

  "validation.titleRequired": "제목을 입력하세요",
  "validation.titleMax": "제목은 최대 150자까지 입력할 수 있습니다",
  "validation.descriptionMax": "설명은 최대 2000자까지 입력할 수 있습니다",
  "validation.priorityRequired": "우선순위를 선택하세요",
  "validation.statusRequired": "상태를 선택하세요",
  "validation.dateInvalid": "올바른 날짜를 입력하세요",
  "validation.timezoneRequired": "시간대를 입력하세요",
  "validation.timezoneInvalid": "Asia/Seoul 같은 올바른 IANA 시간대를 입력하세요",
  "validation.minutesNumber": "분 단위 숫자를 입력하세요",
  "validation.minutesInteger": "분은 정수여야 합니다",
  "validation.minutesMin": "분은 0 이상이어야 합니다",
  "validation.minutesMax": "분은 최대 1440(24시간)까지 입력할 수 있습니다",

  "settings.title": "환경 설정",
  "settings.description": "이 설정은 현재 날짜 계산과 이후 단계의 일일 계획에 사용됩니다.",
  "settings.timezone": "시간대",
  "settings.timezoneHint": "IANA 식별자. 이 시간대의 오늘 날짜: {today}",
  "settings.minutes": "하루 작업 가능 시간(분)",
  "settings.hoursPerDay": "하루 {hours}시간",
  "settings.minutesHint": "매일 작업에 쓸 수 있는 시간(분)",
  "settings.save": "설정 저장",

  "assistant.label": "AI 어시스턴트",
  "assistant.thinking": "생각 중",
  "assistant.supervisorName": "TaskFlow Supervisor",
  "assistant.checking": "확인 중…",
  "assistant.unavailable": "사용 불가",
  "assistant.notAvailable": "AI 어시스턴트를 사용할 수 없습니다.",
  "assistant.newConversation": "새 대화",
  "assistant.hintKeys": "Enter로 전송 · Shift+Enter로 줄바꿈 ·",
  "assistant.hintSupervisor": "Supervisor가 에이전트를 선택하며, 작업 변경은 TaskAgent만 할 수 있습니다.",
  "assistant.hintAgent": "어시스턴트는 승인 없이 작업을 삭제하지 않습니다.",
  "assistant.inputLabel": "어시스턴트에게 메시지 보내기",
  "assistant.inputPlaceholder": "TaskAgent에게 물어보세요… 예: “내일까지 우선순위 높은 작업 만들어 줘”",
  "assistant.send": "메시지 보내기",
  "assistant.mode": "어시스턴트 모드",
  "assistant.mode.agent": "TaskAgent",
  "assistant.mode.supervisor": "Supervisor",
  "assistant.modeHelp.agent": "작업을 생성·검색·수정하는 단일 에이전트입니다 (Phase 1).",
  "assistant.modeHelp.supervisor": "TaskAgent, PriorityAgent, PlanningAgent, SummaryAgent로 요청을 분배합니다 (Phase 2).",
  "assistant.modeSwitchNote": "전환하면 새 대화가 시작됩니다.",
  "assistant.examples": "예시 질문",
  "assistant.intro.agent.title": "TaskAgent에게 물어보기",
  "assistant.intro.agent.description":
    "자연어로 작업을 생성, 검색, 수정, 완료하세요. 작업 삭제는 항상 먼저 승인을 요청합니다.",
  "assistant.intro.supervisor.title": "TaskFlow Supervisor에게 물어보기",
  "assistant.intro.supervisor.description":
    "요청 하나로 알맞은 전문가에게 연결됩니다. TaskAgent는 작업을 관리하고, PriorityAgent는 우선순위를 매기고, PlanningAgent는 하루를 계획하며, SummaryAgent는 진행 상황을 보고합니다.",
  "assistant.example.createTask": "내일까지 아키텍처 문서를 검토하는 우선순위 높은 작업을 만들어 줘.",
  "assistant.example.pending": "대기 중인 작업을 보여 줘.",
  "assistant.example.overdue": "기한이 지난 작업은 뭐야?",
  "assistant.example.complete": "API 검토 작업을 완료로 표시해 줘.",
  "assistant.example.planDay": "오늘 하루 계획을 세워 줘.",
  "assistant.example.focus": "무엇부터 집중해야 할까?",
  "assistant.example.summary": "이번 주 진행 상황을 요약해 줘.",
  "assistant.execution": "실행 상세",
  "assistant.execution.agents": "에이전트: {list}",
  "assistant.execution.direct": "Supervisor가 직접 응답함",
  "assistant.execution.tools": "도구: {list}",
  "assistant.execution.failed": "실패",
  "assistant.execution.llmCall": "LLM 호출 {count}회",
  "assistant.execution.llmCalls": "LLM 호출 {count}회",
  "assistant.execution.tokens": "토큰 {count}개",
  "assistant.execution.request": "요청 {id}",
  "assistant.notSent": "전송되지 않음",
  "confirm.label": "확인 필요",
  "confirm.title": "이 작업을 삭제할까요?",
  "confirm.warning": "이 작업은 되돌릴 수 없습니다. 여기서 승인하기 전까지는 아무것도 삭제되지 않습니다.",
  "confirm.approved": "승인됨",
  "confirm.rejected": "유지됨",
  "confirm.expired": "더 이상 유효하지 않음",
  "confirm.approve": "삭제 승인",
  "confirm.keep": "작업 유지",
  "confirm.deleted": "삭제됨",
};

export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];

export const MESSAGES: Record<Locale, Messages> = { en, ko };

/** Native names shown in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = { en: "English", ko: "한국어" };

/** BCP 47 tags used for Intl date formatting. */
export const INTL_LOCALES: Record<Locale, string> = { en: "en-US", ko: "ko-KR" };

export type TranslationParams = Record<string, string | number>;
export type Translator = (key: MessageKey, params?: TranslationParams) => string;

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export function isMessageKey(value: unknown): value is MessageKey {
  return typeof value === "string" && Object.prototype.hasOwnProperty.call(en, value);
}

export function createTranslator(locale: Locale): Translator {
  const messages = MESSAGES[locale];
  return (key, params) => {
    const template = messages[key] ?? en[key] ?? key;
    if (!params) return template;
    return template.replace(/\{(\w+)\}/g, (match, name: string) => (name in params ? String(params[name]) : match));
  };
}

/** English translator for non-React code paths (e.g. defaults in the API layer). */
export const translateEn = createTranslator("en");
