"use client"

import { UnapprovedQuest } from "@/clients/quests/types"
import QuestTags from "@/components/QuestTags"
import QuestLevel from "@/components/QuestLevel"
import { approveQuest, rejectQuest } from "@/clients/quests/apis"
import { meState } from "@/stores/user"
import { useRecoilValue } from "recoil"

interface Props {
	questItem: UnapprovedQuest
	setQuests: React.Dispatch<React.SetStateAction<UnapprovedQuest[]>>
}
export default function QuestItem(props: Props) {
	const me = useRecoilValue(meState)

	const handleReject = async () => {
		try {
			await rejectQuest(props.questItem.id, me.id)
			props.setQuests((quests: UnapprovedQuest[]) =>
				quests.filter((quest) => quest.id !== props.questItem.id)
			)
			alert("却下しました")
		} catch {
			alert("エラーが発生しました")
		}
	}

	const handleApprove = async () => {
		try {
			await approveQuest(props.questItem.id, me.id)
			props.setQuests((quests: UnapprovedQuest[]) =>
				quests.filter((quest) => quest.id !== props.questItem.id)
			)
			alert("承認しました")
		} catch {
			alert("エラーが発生しました")
		}
	}

	return (
		<div className="border p-2 rounded-md border-gray-200">
			<div className="font-bold">{props.questItem.title}</div>
			<p>{props.questItem.description}</p>
			<QuestLevel level={props.questItem.level} />
			<QuestTags tags={props.questItem.tags.map((tag) => tag.name)} />
			<div className="text-right space-x-4">
				<button
					className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
					onClick={handleReject}
				>
					却下
				</button>
				<button
					className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl"
					onClick={handleApprove}
				>
					承認
				</button>
			</div>
		</div>
	)
}
