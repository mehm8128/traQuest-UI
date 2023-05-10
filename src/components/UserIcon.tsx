import Image from "next/image"

interface Props {
	user: string
}

export default function QuestLevel(props: Props) {
	return (
		<Image
			src={`https://q.trap.jp/api/v3/public/icon/${props.user}`}
			alt=""
			height={32}
			width={32}
		/>
	)
}
