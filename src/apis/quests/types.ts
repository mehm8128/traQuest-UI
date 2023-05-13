import { Tag } from "@/apis/tags/types"

export interface Quest {
	id: string
	number: number
	title: string
	level: number
	completed: boolean
	completedCount: number
	description: string
	tags: Tag[]
	createdAt: string
	updatedAt: string
}

export interface QuestDetail extends Quest {
	completeUsers: string[]
	image?: string
	alt?: string
}

export interface QuestRequest {
	title: string
	level: number
	description: string
	tags: string[]
	image?: string
	alt?: string
}
