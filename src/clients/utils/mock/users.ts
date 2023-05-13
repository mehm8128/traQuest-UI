import { rest } from "msw"

export const rankingHandlers = () => {
	const getMe = rest.get("/api/users/me", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(
				Array(100)
					.fill({})
					.map((_, i) => ({
						name: `aaa${i}`,
						completedQuests: ["aaa1", "aaa2"],
						score: 300,
					}))
			)
		)
	})

	return {
		getMe,
	}
}
