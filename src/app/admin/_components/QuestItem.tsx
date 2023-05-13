import { Quest, UnapprovedQuest } from "@/clients/quests/types"
import QuestTags from "@/components/QuestTag"
import QuestLevel from "@/components/QuestLevel"

interface Props {
	questItem: Quest | UnapprovedQuest
}
export default function QuestItem(props: Props) {
	return (
		<div className="border p-2 rounded-md border-gray-200">
			<div className="font-bold">{props.questItem.title}</div>
			<p>{props.questItem.description}</p>
			<QuestLevel level={props.questItem.level} />
			<QuestTags tags={props.questItem.tags} />
			<div className="text-right">
				<button className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl">
					承認
				</button>
			</div>
		</div>
	)
}
