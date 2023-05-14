import axios from "axios"

export const postTag = async (tags: string[]) => {
	const res = await axios.post(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/tags`,
		tags
	)
	return res
}
