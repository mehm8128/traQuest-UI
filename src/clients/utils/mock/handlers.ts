import { questHandlers } from "@/clients/utils/mock/quests"
import { rankingHandlers } from "@/clients/utils/mock/ranking"
import { tagHandlers } from "@/clients/utils/mock/tags"
import { userHandlers } from "@/clients/utils/mock/users"
import { RestHandler } from "msw"

export function getHandlersArray(
	handlers: Record<string, RestHandler>
): RestHandler[] {
	return Object.values(handlers)
}

export function handlers() {
	return [
		getHandlersArray(questHandlers()),
		getHandlersArray(tagHandlers()),
		getHandlersArray(rankingHandlers()),
		getHandlersArray(userHandlers()),
	].flat()
}
