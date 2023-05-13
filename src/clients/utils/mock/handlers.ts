import { questHandlers } from "@/clients/utils/mock/quests"
import { RestHandler } from "msw"

export function getHandlersArray(
	handlers: Record<string, RestHandler>
): RestHandler[] {
	return Object.values(handlers)
}

export function handlers() {
	return [getHandlersArray(questHandlers())].flat()
}
