interface Props {
	tag: string
}

export default function QuestTag(props: Props) {
	return (
		<span className="bg-gray-200 border border-gray-300 rounded-md py-1 px-2">
			{props.tag}
		</span>
	)
}
