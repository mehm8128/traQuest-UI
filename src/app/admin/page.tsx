import { quests } from "@/clients/quests/mocks"
import QuestItem from "@/app/admin/_components/QuestItem"

export default function Request() {
	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl mt-2 text-center">申請一覧</h1>
			<div className="mt-4 flex flex-col gap-4">
				{quests.map((questItem) => (
					<QuestItem questItem={questItem} key={questItem.id} />
				))}
			</div>
		</div>
	)
}
