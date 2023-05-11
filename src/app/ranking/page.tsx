import { ranking } from "@/apis/rankings/mocks"
import RankingItem from "@/app/ranking/_components/RankingItem"

export default function Ranking() {
	return (
		<div className="w-1/3 mx-auto py-4">
			<h1 className="text-2xl font-bold">Ranking</h1>
			<div className="mt-2 flex flex-col gap-4">
				{ranking.map((rankingItem) => (
					<RankingItem rankingItem={rankingItem} key={rankingItem.rank} />
				))}
			</div>
		</div>
	)
}
