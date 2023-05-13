import { questHandlers } from "@/clients/utils/mocks/quests"
import { rankingHandlers } from "@/clients/utils/mocks/ranking"
import { tagHandlers } from "@/clients/utils/mocks/tags"
import { userHandlers } from "@/clients/utils/mocks/users"
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
