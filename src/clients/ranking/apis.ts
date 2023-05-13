import { RankingItem } from "./types"
import { useFetch } from "@/clients/utils/fetcher"

export const useGetRanking = () => {
	const { data: res } = useFetch<RankingItem[]>("/api/ranking")
	return res
}
