export interface Quest {
	id: string
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
}
