"use client"

import { completeQuest } from "@/clients/quests/apis"
import { QuestDetail } from "@/clients/quests/types"
import { meState } from "@/stores/user"
import { useRecoilValue } from "recoil"

export default function CompleteButton({
	isCompleted,
	questId,
	setQuestDetail,
}: {
	isCompleted: boolean
	questId: string
	setQuestDetail: React.Dispatch<React.SetStateAction<QuestDetail | undefined>>
}) {
	const me = useRecoilValue(meState)

	const handleComplete = async () => {
		try {
			await completeQuest(questId, me.id)
			alert("クエストを完了しました！")
			setQuestDetail((questDetail: QuestDetail | undefined) => {
				if (!questDetail) return questDetail
				return {
					...questDetail,
					completed: true,
					completedUsers: [...questDetail.completedUsers, me.id],
				}
			})
		} catch {
			alert("クエストの完了に失敗しました")
		}
	}

	return (
		<button
			className={`px-8 py-4 rounded-xl ${
				isCompleted ? "bg-gray-200" : "bg-blue-200 hover:bg-blue-300"
			}`}
			onClick={handleComplete}
			disabled={isCompleted}
		>
			{isCompleted ? "クエスト完了済み" : "クエスト完了！"}
		</button>
	)
}
