export interface Quest {
	id: string
	number: number
	title: string
	level: number
	completed: boolean
	completeCount: number
	description: string
	tags: string[]
}

export interface QuestDetail extends Quest {
	completeUsers: string[]
	image?: string
	alt?: string
}
