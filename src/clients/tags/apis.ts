import { Tag } from "@/clients/tags/types"
import axios from "axios"

export const postTag = async (tags: string[]) => {
	const res = await axios.post<Tag[]>(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/tags`,
		tags
	)
	return res.data
}
