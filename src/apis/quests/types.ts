export interface Quest {
	id: string
	title: string
	level: number
	completed: boolean
	completeCount: number
	description: string
	tags: string[]
}
