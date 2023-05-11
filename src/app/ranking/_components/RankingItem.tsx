import UserIcon from "@/components/UserIcon"

interface Props {
	rankingItem: RankingItem
}
export default function RankingItem(props: Props) {
	return (
		<div className="flex items-center">
			<div className="text-2xl font-bold mr-2">{props.rankingItem.rank}</div>
			<UserIcon user={props.rankingItem.userId} size={44} />
			<span className="ml-4">{props.rankingItem.userId}</span>
			<span className="ml-auto">{props.rankingItem.score}</span>
		</div>
	)
}
