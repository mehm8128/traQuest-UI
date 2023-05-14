import QuestItem from "@/app/admin/_components/QuestItem"
import { UnapprovedQuest } from "@/clients/quests/types"

const useUnapprovedQuests = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/quests/unapproved`,
		{ next: { revalidate: 60 } }
	)
	if (!res.ok) throw new Error("エラーが発生しました")
	return await res.json()
}

export default async function Request() {
	const quests: UnapprovedQuest[] = await useUnapprovedQuests()

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
