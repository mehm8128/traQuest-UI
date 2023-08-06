"use client"

import CompleteButton from "@/app/[questId]/_components/CompleteButton"
import CompletedUsers from "@/app/[questId]/_components/CompletedUsers"
import { QuestDetail } from "@/clients/quests/types"
import QuestLevel from "@/components/QuestLevel"
import QuestTags from "@/components/QuestTags"
import { meState } from "@/stores/user"
import { getApiOrigin } from "@/utils/env"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"

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
	const me = useRecoilValue(meState)
	const [questDetail, setQuestDetail] = useState<QuestDetail>()

	useEffect(() => {
		if (!me.id) return
		;(async () => {
			const res = await axios.get<QuestDetail>(
				`${getApiOrigin()}/api/quests/${params.questId}`,
				{ withCredentials: true }
			)
			setQuestDetail(res.data)
		})()
	}, [params.questId, me])

	if (!questDetail) return <div>loading</div>

	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl font-bold">{questDetail.title}</h1>
			<div className="flex justify-between mt-2">
				<p>{questDetail.description}</p>
				<div className="flex flex-col items-end gap-2">
					<QuestLevel level={questDetail.level} />
					<QuestTags tags={questDetail.tags.map((tag) => tag.name)} />
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
			<CompletedUsers questDetail={questDetail} />
		</div>
	)
}
