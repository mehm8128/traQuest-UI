"use client"

import CompleteButton from "@/app/[questId]/_components/CompleteButton"
import { QuestDetail } from "@/clients/quests/types"
import QuestLevel from "@/components/QuestLevel"
import QuestTag from "@/components/QuestTag"
import UserIcon from "@/components/UserIcon"
import { getApiOrigin } from "@/utils/env"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

const useQuest = async (questId: string) => {
	const res = await fetch(`${getApiOrigin()}/api/quests/${questId}`, {
		next: { revalidate: 60 },
	})
	if (!res.ok) throw new Error("エラーが発生しました")
	return await res.json()
}

export default async function Quest({
	params,
}: {
	params: { questId: string }
}) {
	const [questDetail, setQuestDetail] = useState<QuestDetail>()

	useEffect(() => {
		;(async () => {
			const res = await axios.get<QuestDetail>(
				`${getApiOrigin()}/api/quests/${params.questId}`,
				{ withCredentials: true }
			)
			setQuestDetail(res.data)
		})()
	}, [params.questId])

	if (!questDetail) return <div>loading</div>

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
				<CompleteButton
					isCompleted={questDetail.completed}
					questId={params.questId}
					setQuestDetail={setQuestDetail}
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
