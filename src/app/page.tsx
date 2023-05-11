import { quests } from "@/apis/quests/mocks"
import QuestPanel from "@/app/_components/QuestPanel"
import Link from "next/link"

export default function Home() {
	return (
		<div>
			<h1 className="text-3xl">Quests</h1>
			<div className="px-4 py-2 flex flex-wrap gap-4">
				{quests.map((quest) => (
					<Link href={`/${quest.id}`} key={quest.id}>
						<QuestPanel quest={quest} />
					</Link>
				))}
			</div>
		</div>
	)
}
