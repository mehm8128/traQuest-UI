import { quests } from "@/apis/quests/mocks"
import QuestPanel from "@/app/components/QuestPanel"

export default function Home() {
	return (
		<div>
			<h1 className="text-3xl">traQuest</h1>
			<div className='px-4 py-2 flex flex-wrap gap-4'>
				{quests.map((quest) => (
					<QuestPanel quest={quest} key={quest.id} />
				))}
			</div>
		</div>
	)
}
