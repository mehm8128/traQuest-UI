import { Quest, QuestRequest } from "./types"
import axios from "axios"
import { getApiOrigin } from "@/utils/env"

export const postQuest = async (quest: QuestRequest) => {
	const res = await axios.post<Quest>(`${getApiOrigin()}/api/quests`, quest)
	return res.data
}

export const putQuest = async (quest: QuestRequest) => {
	const res = await axios.put<Quest>("/api/quests", quest)
	return res.data
}

export const completeQuest = async (id: string, userId: string) => {
	const res = await axios.post(
		`${getApiOrigin()}/api/quests/${id}/complete`,
		{ userId },
		{ withCredentials: true }
	)
	return res.data
}

export const rejectQuest = async (id: string, userId: string) => {
	const res = await axios.post<Quest>(
		`${getApiOrigin()}/api/quests/${id}/reject`,
		{ userId },
		{ withCredentials: true }
	)
	return res.data
}

export const approveQuest = async (id: string, userId: string) => {
	const res = await axios.post<Quest>(
		`${getApiOrigin()}/api/quests/${id}/approve`,
		{ userId },
		{ withCredentials: true }
	)
	return res.data
}
