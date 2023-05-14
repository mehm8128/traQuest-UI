import { Quest, QuestDetail, QuestRequest } from "./types"
import axios from "axios"

export const postQuest = async (quest: QuestRequest) => {
	const res = await axios.post(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/quests`,
		quest
	)
	return res
}

export const putQuest = async (quest: QuestRequest) => {
	const res = await axios.put("/api/quests", quest)
	return res
}

export const completeQuest = async (id: string) => {
	const res = await axios.post(`/api/quests/${id}/complete`)
	return res
}

export const approveQuest = async (id: string) => {
	const res = await axios.post(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/quests/${id}/approve`
	)
	return res
}
