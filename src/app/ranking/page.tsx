import { RankingItem as RankingItemType } from "@/clients/ranking/types"
import RankingItem from "@/app/ranking/_components/RankingItem"

const useRanking = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/ranking`, {
		next: { revalidate: 60 },
	})
	if (!res.ok) throw new Error("エラーが発生しました")
	return await res.json()
}
export default async function Ranking() {
	const ranking: RankingItemType[] = await useRanking()

	return (
		<div className="w-1/3 mx-auto py-4">
			<h1 className="text-3xl mt-2 text-center">ランキング</h1>
			<div className="mt-4 flex flex-col gap-4">
				{ranking.map((rankingItem) => (
					<RankingItem rankingItem={rankingItem} key={rankingItem.rank} />
				))}
			</div>
		</div>
	)
}
