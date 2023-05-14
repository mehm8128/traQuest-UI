import { Tag } from "./types"
import { useFetch } from "@/clients/utils/fetcher"
import axios from "axios"

export const useGetTags = () => {
	const { data: res } = useFetch<Tag[]>("/api/tags")
	return res
}

export const postTag = async (tags: string[]) => {
	const res = await axios.post(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/tags`,
		tags
	)
	return res
}
