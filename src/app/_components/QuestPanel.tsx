import { Quest } from "@/apis/quests/types"
import QuestLevel from "@/components/QuestLevel"
import QuestTag from "@/components/QuestTag"

interface Props {
	quest: Quest
}

export default function QuestPanel(props: Props) {
	return (
		<div className="bg-blue-50 border border-blue-200 rounded-lg shadow-md w-[300px] h-56 px-4 pt-2 pb-4 flex flex-col gap-2 transition-all hover:shadow-lg hover:opacity-90">
			<div className="text-xl font-bold">{props.quest.title}</div>
			<p className="text-sm flex-grow">{props.quest.description}</p>
			<QuestLevel level={props.quest.level} />
			<QuestTag tags={props.quest.tags} />
		</div>
	)
}
