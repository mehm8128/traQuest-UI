import { Quest } from "@/apis/quests/types"
import QuestTag from "@/app/components/QuestTag"

interface Props {
	quest: Quest
}

export default function QuestPanel(props: Props) {
	return (
		<div className="bg-blue-50 border border-blue-200 rounded-lg shadow-md w-80 h-56 px-4 pt-2 pb-4 flex flex-col">
			<div className="text-xl font-bold">{props.quest.title}</div>
			<p className="text-sm mt-2 flex-grow">{props.quest.description}</p>
			<div className="mt-2">
				{Array(props.quest.level)
					.fill(null)
					.map((_, i) => (
						<span className="text-xl text-yellow-400" key={i}>
							★
						</span>
					))}
			</div>
			<div className="mt-2">
				{props.quest.tags.map((tag) => (
					<QuestTag tag={tag} key={tag} />
				))}
			</div>
		</div>
	)
}
