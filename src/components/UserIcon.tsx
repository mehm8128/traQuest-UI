import Image from "next/image"

interface Props {
	user: string
	size?: number
}

export default function QuestLevel(props: Props) {
	const size = props.size ?? 32
	return (
		<Image
			src={`https://q.trap.jp/api/v3/public/icon/${props.user}`}
			alt=""
			className="rounded-full"
			height={size}
			width={size}
		/>
	)
}
