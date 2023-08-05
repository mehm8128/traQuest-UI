import { postQuest } from "@/clients/quests/apis"
import { QuestRequest } from "@/clients/quests/types"
import axios from "axios"

jest.mock("axios")

describe("postQuests", () => {
	test("questの作成成功時: questの詳細を返す", async () => {
		const requestBody: QuestRequest = {
			title: "title",
			level: 1,
			description: "description",
			tags: [],
		}
		const quest = {
			data: {
				id: "1",
				number: 1,
				title: "title",
				level: 1,
				completedCount: 0,
				description: "description",
				tags: [],
				createdAt: "2021-01-01T00:00:00.000Z",
				updatedAt: "2021-01-01T00:00:00.000Z",
				completed: false,
			},
		}
		jest.spyOn(axios, "post").mockResolvedValue(quest)
		await expect(postQuest(requestBody)).resolves.toMatchObject(quest.data)
	})
})
