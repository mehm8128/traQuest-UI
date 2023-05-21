"use client"

import QuestPanel from "@/app/_components/QuestPanel"
import { Quest } from "@/clients/quests/types"
import axios from "axios"
import Link from "next/link"
import { useState, useEffect } from "react"

const useQuests = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/quests`, {
		next: { revalidate: 60 },
	})
	if (!res.ok) throw new Error("エラーが発生しました")
	return await res.json()
}

export default async function Home() {
	const [quests, setQuests] = useState<Quest[]>([])

	useEffect(() => {
		;(async () => {
			const res = await axios.get<Quest[]>(
				`${process.env.NEXT_PUBLIC_ORIGIN}/api/quests`,
				{ withCredentials: true }
			)
			setQuests(res.data)
		})()
	}, [])

	if (!quests) return <div>loading</div>

	return (
		<div>
			<h1 className="text-3xl mt-2 text-center">クエスト一覧</h1>
			<div className="px-4 mt-6 flex flex-wrap gap-4">
				{quests.map((quest) => (
					<Link href={`/${quest.id}`} key={quest.id}>
						<QuestPanel quest={quest} />
					</Link>
				))}
			</div>
		</div>
	)
}
