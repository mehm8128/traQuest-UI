import { Tag } from "@/clients/tags/types"

export const tags: Tag[] = Array(3)
	.fill(null)
	.map((_, i) => ({
		id: `tag${i}`,
		name: `tag${i}`,
		createdAt: "",
	}))
