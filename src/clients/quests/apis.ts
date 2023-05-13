import { Quest, QuestDetail, QuestRequest } from "./types"
import { useFetch } from "@/clients/utils/fetcher"
import axios from "axios"

export const useGetQuests = () => {
	const { data: res } = useFetch<Quest[]>("/api/quests")
	return res
}

export const useGetQuest = (id: string) => {
	const { data: res } = useFetch<QuestDetail[]>(`/api/quests/${id}`)
	return res
}

export const postQuest = async (quest: QuestRequest) => {
	const res = await axios.post("/api/quests", quest)
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
	const res = await axios.post(`/api/quests/${id}/approve`)
	return res
}
