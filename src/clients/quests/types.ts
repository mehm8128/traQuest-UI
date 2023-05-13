import { Tag } from "@/clients/tags/types"

export interface UnapprovedQuest {
	id: string
	number: number
	title: string
	level: number
	completedCount: number
	description: string
	tags: Tag[]
	createdAt: string
	updatedAt: string
}

export interface Quest extends UnapprovedQuest {
	completed: boolean
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
