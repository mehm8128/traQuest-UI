import { Tag } from "@/clients/tags/types"

interface Props {
	tags: string[]
}

export default function QuestTags(props: Props) {
	return (
		<ul className="flex itmes-center flex-wrap gap-2">
			{props.tags.map((tag) => (
				<li
					className="bg-gray-200 border border-gray-300 rounded-md py-1 px-2"
					key={tag}
				>
					{tag}
				</li>
			))}
		</ul>
	)
}
