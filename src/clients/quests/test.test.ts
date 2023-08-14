import { postQuest } from "@/clients/quests/apis"
import { QuestRequest } from "@/clients/quests/types"
import { quest as questFixture } from "./fixtures"
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
			data: questFixture,
		}
		jest.spyOn(axios, "post").mockResolvedValue(quest)
		await expect(postQuest(requestBody)).resolves.toMatchObject(quest.data)
	})
})
