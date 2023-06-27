import { Quest } from "@/clients/quests/types"
import QuestLevel from "@/components/QuestLevel"
import QuestTag from "@/components/QuestTag"

interface Props {
	quest: Quest
}

export default function QuestPanel(props: Props) {
	return (
		<div className="bg-blue-50 border border-blue-200 rounded-lg relative shadow-md w-[300px] h-56 px-4 pt-2 pb-4 flex flex-col gap-2 transition-all hover:shadow-lg hover:opacity-90">
			{props.quest.completed && (
				<div className="absolute z-0 text-center translate-x-1/2 translate-y-1/2 mx-auto text-9xl text-red-100 opacity-50">
					済
				</div>
			)}
			<div className="text-xl font-bold break-all">{props.quest.title}</div>
			<p className="text-sm flex-grow">{props.quest.description}</p>
			<QuestLevel level={props.quest.level} />
			<QuestTag tags={props.quest.tags} />
		</div>
	)
}
