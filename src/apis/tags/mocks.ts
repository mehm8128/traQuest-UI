export const tag = (id: string) => ({
	id,
	name: `tag${id}`,
	createdAt: `2023-01-0${id}T00:00:00.000Z`,
})

export const tags = (n: number) =>
	Array(n)
		.fill(null)
		.map((_, i) => tag(i.toString()))
