import { rest } from "msw"

export const userHandlers = () => {
	const getMe = rest.get("/api/users/me", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				name: `aaa1`,
				completedQuests: ["aaa1", "aaa2"],
				score: 300,
			})
		)
	})

	return { getMe }
}
