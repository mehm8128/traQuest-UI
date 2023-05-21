import { Tag } from "@/clients/tags/types"

interface Props {
	tags: Tag[]
}

export default function QuestTags(props: Props) {
	return (
		<div className="flex itmes-center flex-wrap gap-2">
			{props.tags.map((tag) => (
				<span
					className="bg-gray-200 border border-gray-300 rounded-md py-1 px-2"
					key={tag.id}
				>
					{tag.name}
				</span>
			))}
		</div>
	)
}
