import { rest } from "msw"

export const rankingHandlers = () => {
	const getRanking = rest.get("/api/ranking", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(
				Array(100)
					.fill({})
					.map((_, i) => ({
						rank: i,
						userId: i.toString(),
						score: i * 100,
					}))
			)
		)
	})

	return {
		getRanking,
	}
}
