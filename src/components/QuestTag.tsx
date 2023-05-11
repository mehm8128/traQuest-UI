interface Props {
	tags: string[]
}

export default function QuestTags(props: Props) {
	return (
		<div className="flex itmes-center gap-2">
			{props.tags.map((tag) => (
				<span
					className="bg-gray-200 border border-gray-300 rounded-md py-1 px-2"
					key={tag}
				>
					{tag}
				</span>
			))}
		</div>
	)
}