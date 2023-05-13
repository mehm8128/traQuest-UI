import { Tag, TagRequest } from "./types"
import { useFetch } from "@/clients/utils/fetcher"
import axios from "axios"

export const useGetTags = () => {
	const { data: res } = useFetch<Tag[]>("/api/tags")
	return res
}

export const postTag = async (tag: TagRequest) => {
	const res = await axios.post("/api/tags", tag)
	return res
}
