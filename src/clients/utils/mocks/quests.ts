import { rest } from "msw"

export const questHandlers = () => {
	const getQuests = rest.get("/api/quests", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(
				Array(20)
					.fill({})
					.map((_, i) => ({
						number: i + 1,
						title: `aaaaa${i + 1}`,
						level: (i + 1) % 5,
						completed: (i + 1) % 2 === 0,
						completedCount: (i + 1) % 10,
						description: "aaaaa",
						tags: [],
						createdAt: "2021-01-01T00:00:00",
						updatedAt: "2021-01-01T00:00:00",
					}))
			)
		)
	})

	const getUnapprovedQuests = rest.get(
		"/api/quests/unapproved",
		(_req, res, ctx) => {
			return res(
				ctx.status(200),
				ctx.json(
					Array(10)
						.fill({})
						.map((_, i) => ({
							number: i + 1,
							title: `aaaaa${i + 1}`,
							level: (i + 1) % 5,
							completedCount: (i + 1) % 10,
							description: "aaaaa",
							tags: [],
							createdAt: "2021-01-01T00:00:00",
							updatedAt: "2021-01-01T00:00:00",
						}))
				)
			)
		}
	)

	const getQuest = rest.get("/api/quests/:id", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				number: 1,
				title: "aaaaa1",
				level: 3,
				completed: false,
				completedCount: 10,
				description: "aaaaa",
				tags: [],
				createdAt: "2021-01-01T00:00:00",
				updatedAt: "2021-01-01T00:00:00",
			})
		)
	})

	const postQuest = rest.post("/api/quests", (_req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({
				number: 1,
				title: "aaaaa1",
				level: 3,
				completed: false,
				completedCount: 10,
				description: "aaaaa",
				tags: [],
				createdAt: "2021-01-01T00:00:00",
				updatedAt: "2021-01-01T00:00:00",
			})
		)
	})

	const putQuest = rest.get("/api/quests", (_req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				number: 1,
				title: "aaaaa1",
				level: 3,
				completed: false,
				completedCount: 10,
				description: "aaaaa",
				tags: [],
				createdAt: "2021-01-01T00:00:00",
				updatedAt: "2021-01-01T00:00:00",
			})
		)
	})

	const completeQuest = rest.post(
		"/api/quests/:id/complete",
		(_req, res, ctx) => {
			return res(ctx.status(200))
		}
	)

	const approveQuest = rest.post(
		"/api/quests/:id/approve",
		(_req, res, ctx) => {
			return res(
				ctx.status(201),
				ctx.json({
					number: 1,
					title: "aaaaa1",
					level: 3,
					completed: false,
					completedCount: 10,
					description: "aaaaa",
					tags: [],
					createdAt: "2021-01-01T00:00:00",
					updatedAt: "2021-01-01T00:00:00",
				})
			)
		}
	)

	return {
		getQuests,
		getUnapprovedQuests,
		getQuest,
		postQuest,
		putQuest,
		completeQuest,
		approveQuest,
	}
}
