import QuestRequestForm from "@/app/request/_components/QuestRequestForm"
import { Tag } from "@/clients/tags/types"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as questApis from "@/clients/quests/apis"
import * as tagApis from "@/clients/tags/apis"
import selectEvent from "react-select-event"

jest.mock("next/navigation", () => require("next-router-mock"))
jest.mock("@/clients/quests/apis")
jest.mock("@/clients/tags/apis")
const user = userEvent.setup()
const tags: Tag[] = Array(3)
	.fill(null)
	.map((_, i) => ({
		id: `tag${i}`,
		name: `tag${i}`,
		createdAt: "",
	}))

describe("QuestRequestForm", () => {
	test("タグを指定せずに正常に送信できる", async () => {
		const mockCreateQuestFn = jest.spyOn(questApis, "postQuest")
		jest.spyOn(window, "alert").mockImplementation(() => {})
		render(<QuestRequestForm tags={tags} />)

		const titleInput = screen.getByRole("textbox", { name: "クエスト名" })
		await user.type(titleInput, "title")
		const descriptionInput = screen.getByRole("textbox", {
			name: "クエストの説明",
		})
		await user.type(descriptionInput, "description")
		await selectEvent.select(screen.getByLabelText("難易度"), "3")

		await user.click(screen.getByRole("button", { name: "申請を送信" }))
		expect(mockCreateQuestFn).toHaveBeenCalledWith({
			title: "title",
			description: "description",
			level: 3,
			tags: [],
			image: undefined,
			alt: undefined,
		})
	})

	test("既存のタグを使って正常に送信できる", async () => {
		const mockCreateQuestFn = jest.spyOn(questApis, "postQuest")
		jest.spyOn(window, "alert").mockImplementation(() => {})
		render(<QuestRequestForm tags={tags} />)

		const titleInput = screen.getByRole("textbox", { name: "クエスト名" })
		await user.type(titleInput, "title")
		const descriptionInput = screen.getByRole("textbox", {
			name: "クエストの説明",
		})
		await user.type(descriptionInput, "description")
		await selectEvent.select(screen.getByLabelText("難易度"), "3")
		await selectEvent.select(screen.getByLabelText("タグ"), "tag2")

		await user.click(screen.getByRole("button", { name: "申請を送信" }))
		expect(mockCreateQuestFn).toHaveBeenCalledWith({
			title: "title",
			description: "description",
			level: 3,
			tags: ["tag2"],
			image: undefined,
			alt: undefined,
		})
	})

	test("タグを新規作成して正常に送信できる", async () => {
		const mockCreateQuestFn = jest.spyOn(questApis, "postQuest")
		const mockCreateTagFn = jest.spyOn(tagApis, "postTag").mockResolvedValue([
			{
				id: "tag4",
				name: "tag4",
				createdAt: "",
			},
		])
		jest.spyOn(window, "alert").mockImplementation(() => {})
		render(<QuestRequestForm tags={tags} />)

		const titleInput = screen.getByRole("textbox", { name: "クエスト名" })
		await user.type(titleInput, "title")
		const descriptionInput = screen.getByRole("textbox", {
			name: "クエストの説明",
		})
		await user.type(descriptionInput, "description")
		await selectEvent.select(screen.getByLabelText("難易度"), "3")
		await selectEvent.create(screen.getByLabelText("タグ"), "tag4")

		await user.click(screen.getByRole("button", { name: "申請を送信" }))
		expect(mockCreateTagFn).toHaveBeenCalledWith(["tag4"])
		expect(mockCreateQuestFn).toHaveBeenCalledWith({
			title: "title",
			description: "description",
			level: 3,
			tags: ["tag4"],
			image: undefined,
			alt: undefined,
		})
	})

	test("クエスト名がないバリデーションエラー", async () => {
		render(<QuestRequestForm tags={tags} />)

		const descriptionInput = screen.getByRole("textbox", {
			name: "クエストの説明",
		})
		await user.type(descriptionInput, "description")
		await selectEvent.select(screen.getByLabelText("難易度"), "3")
		await selectEvent.select(screen.getByLabelText("タグ"), "tag1")

		await user.click(screen.getByRole("button", { name: "申請を送信" }))
		await waitFor(() =>
			expect(
				screen.getByRole("textbox", { name: "クエスト名" })
			).toHaveAccessibleErrorMessage("Invalid length")
		)
	})

	test("クエストの説明がないバリデーションエラー", async () => {
		render(<QuestRequestForm tags={tags} />)

		const titleInput = screen.getByRole("textbox", { name: "クエスト名" })
		await user.type(titleInput, "title")
		await selectEvent.select(screen.getByLabelText("難易度"), "3")
		await selectEvent.select(screen.getByLabelText("タグ"), "tag2")

		await user.click(screen.getByRole("button", { name: "申請を送信" }))
		await waitFor(() =>
			expect(
				screen.getByRole("textbox", { name: "クエストの説明" })
			).toHaveAccessibleErrorMessage("Invalid length")
		)
	})
	test("画像があるのにaltがないバリデーションエラー", async () => {
		//todo: 実装したら書く
	})
})
