import { rest } from "msw"

export const rankingHandlers = () => {
	const getTags = rest.get("/api/tags", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(
				Array(100)
					.fill({})
					.map((_, i) => ({
						id: `aaa${i}`,
						name: `aaa${i}`,
						createdAt: "2021-01-01T00:00:00",
					}))
			)
		)
	})

	const postTag = rest.post("/api/tags", (_req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({
				id: "aaa",
				name: "aaa",
				createdAt: "2021-01-01T00:00:00",
			})
		)
	})

	return {
		getTags,
		postTag,
	}
}
