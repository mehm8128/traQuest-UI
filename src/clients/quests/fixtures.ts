import { Quest, QuestDetail, UnapprovedQuest } from "./types"

export const quest: Quest = {
	id: "1",
	number: 1,
	title: "aaaaa",
	level: 3,
	completed: true,
	completedCount: 10,
	description: "aaaaa",
	tags: [],
	createdAt: "2021-01-01T00:00:00",
	updatedAt: "2021-01-01T00:00:00",
}

export const questDetail: QuestDetail = {
	id: "1",
	number: 1,
	title: "aaaaa",
	level: 3,
	completed: true,
	completedCount: 10,
	description: "aaaaa",
	tags: [],
	createdAt: "2021-01-01T00:00:00",
	updatedAt: "2021-01-01T00:00:00",
	completedUsers: ["user1", "user2"],
}

export const unapprovedQuest: UnapprovedQuest = {
	id: "1",
	number: 1,
	title: "aaaaa",
	level: 3,
	completedCount: 10,
	description: "aaaaa",
	tags: [],
	createdAt: "2021-01-01T00:00:00",
	updatedAt: "2021-01-01T00:00:00",
}
