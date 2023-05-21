"use client"

import QuestItem from "@/app/admin/_components/QuestItem"
import { UnapprovedQuest } from "@/clients/quests/types"
import { getApiOrigin } from "@/utils/env"
import axios from "axios"
import { useState, useEffect } from "react"

const useUnapprovedQuests = async () => {
	const res = await fetch(`${getApiOrigin()}/api/quests/unapproved`, {
		next: { revalidate: 60 },
		headers: { credentials: "include" },
	})
	if (!res.ok) throw new Error("エラーが発生しました")
	return await res.json()
}

export default async function Request() {
	const [quests, setQuests] = useState<UnapprovedQuest[]>([])

	useEffect(() => {
		;(async () => {
			const res = await axios.get<UnapprovedQuest[]>(
				`${getApiOrigin()}/api/quests/unapproved`,
				{ withCredentials: true }
			)
			setQuests(res.data)
		})()
	}, [])

	if (!quests) return <div>loading</div>

	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl mt-2 text-center">申請一覧</h1>
			<div className="mt-4 flex flex-col gap-4">
				{quests.map((questItem) => (
					<QuestItem
						questItem={questItem}
						key={questItem.id}
						setQuests={setQuests}
					/>
				))}
			</div>
		</div>
	)
}
