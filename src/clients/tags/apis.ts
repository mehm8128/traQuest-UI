import { Tag } from "@/clients/tags/types"
import { getApiOrigin } from "@/utils/env"
import axios from "axios"

export const postTag = async (tags: string[]) => {
	const res = await axios.post<Tag[]>(`${getApiOrigin()}/api/tags`, tags)
	return res.data
}
