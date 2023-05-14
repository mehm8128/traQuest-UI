"use client"

import { completeQuest } from "@/clients/quests/apis"

export default function ApproveButton({
	isCompleted,
	questId,
}: {
	isCompleted: boolean
	questId: string
}) {
	const handleComplete = async () => {
		try {
			await completeQuest(questId)
			alert("クエストを完了しました！")
		} catch {
			alert("クエストの完了に失敗しました")
		}
	}

	return (
		<button
			className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl"
			onClick={handleComplete}
			disabled={isCompleted}
		>
			{isCompleted ? "クエスト完了済み" : "クエスト完了！"}
		</button>
	)
}
