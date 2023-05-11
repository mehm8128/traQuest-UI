interface Props {
	level: number
}

export default function QuestLevel(props: Props) {
	return (
		<div>
			{Array(props.level)
				.fill(null)
				.map((_, i) => (
					<span className="text-2xl text-yellow-400" key={i}>
						★
					</span>
				))}
		</div>
	)
}
