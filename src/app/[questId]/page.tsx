import ApproveButton from "@/app/[questId]/_components/ApproveButton"
import { QuestDetail } from "@/clients/quests/types"
import QuestLevel from "@/components/QuestLevel"
import QuestTag from "@/components/QuestTag"
import UserIcon from "@/components/UserIcon"
import Image from "next/image"

const useQuest = async (questId: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/quests/${questId}`,
		{ next: { revalidate: 60 } }
	)
	if (!res.ok) throw new Error("エラーが発生しました")
	return await res.json()
}

export default async function Quest({
	params,
}: {
	params: { questId: string }
}) {
	const questDetail: QuestDetail = await useQuest(params.questId)

	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl font-bold">{questDetail.title}</h1>
			<div className="flex justify-between mt-2">
				<p>{questDetail.description}</p>
				<div className="flex flex-col items-end gap-2">
					<QuestLevel level={questDetail.level} />
					<QuestTag tags={questDetail.tags} />
				</div>
			</div>
			{questDetail.image && (
				<Image
					src={questDetail.image}
					alt={questDetail.alt ?? ""}
					height={160}
					width={320}
				/>
			)}
			<div className="text-center mt-12">
				<ApproveButton
					isCompleted={questDetail.completed}
					questId={params.questId}
				/>
			</div>
			<section className="mt-8">
				<h2 className="text-xl">クリア済みユーザー</h2>
				{questDetail.completedUsers.length === 0 && (
					<div className="mt-4">まだいません！一番乗りを目指しましょう</div>
				)}
				<div className="flex flex-wrap gap-12 mt-4">
					{questDetail.completedUsers.map((user) => (
						<div key={user} className="flex flex-col items-center gap-1">
							<UserIcon user={user} size={64} />
							<span>{user}</span>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
