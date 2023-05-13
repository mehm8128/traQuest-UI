export interface Tag {
	id: string
	name: string
	createdAt: string
}

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
