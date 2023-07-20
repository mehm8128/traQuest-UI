import UserIcon from "@/components/UserIcon"
import { RankingItem as RankingItemType } from "@/clients/ranking/types"

interface Props {
	rankingItem: RankingItemType
}
export default function RankingItem(props: Props) {
	return (
		<div className="flex items-center">
			<div className="text-2xl font-bold mr-4">{props.rankingItem.rank}</div>
			<UserIcon user={props.rankingItem.id} size={44} />
			<span className="ml-4">{props.rankingItem.id}</span>
			<span className="ml-auto">{props.rankingItem.score}</span>
		</div>
	)
}
