import QuestRequestForm from "@/app/request/_components/QuestRequestForm"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as questApis from "@/clients/quests/apis"
import * as tagApis from "@/clients/tags/apis"
import selectEvent from "react-select-event"
import { tags } from "@/clients/tags/fixtures"

jest.mock("next/navigation", () => require("next-router-mock"))
jest.mock("@/clients/quests/apis")
jest.mock("@/clients/tags/apis")
const user = userEvent.setup()

const setup = async () => {
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

	const inputTitle = async () => {
		const titleInput = screen.getByRole("textbox", { name: "クエスト名" })
		await user.type(titleInput, "title")
	}
	const inputDescription = async () => {
		const descriptionInput = screen.getByRole("textbox", {
			name: "クエストの説明",
		})
		await user.type(descriptionInput, "description")
	}
	const selectLevel = async () => {
		await selectEvent.select(screen.getByLabelText("難易度"), "3")
	}
	const selectTag = async () => {
		await selectEvent.select(screen.getByLabelText("タグ"), "tag2")
	}
	const createTag = async () => {
		await selectEvent.create(screen.getByLabelText("タグ"), "tag4")
	}
	const submit = async () => {
		await user.click(screen.getByRole("button", { name: "申請を送信" }))
	}

	return {
		mockCreateQuestFn,
		mockCreateTagFn,
		inputTitle,
		inputDescription,
		selectLevel,
		selectTag,
		createTag,
		submit,
	}
}

describe("QuestRequestForm", () => {
	test("タグを指定せずに正常に送信できる", async () => {
		const {
			mockCreateQuestFn,
			inputTitle,
			inputDescription,
			selectLevel,
			submit,
		} = await setup()

		await inputTitle()
		await inputDescription()
		await selectLevel()
		await submit()

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
		const {
			mockCreateQuestFn,
			inputTitle,
			inputDescription,
			selectLevel,
			selectTag,
			submit,
		} = await setup()

		await inputTitle()
		await inputDescription()
		await selectLevel()
		await selectTag()
		await submit()

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
		const {
			mockCreateQuestFn,
			mockCreateTagFn,
			inputTitle,
			inputDescription,
			selectLevel,
			createTag,
			submit,
		} = await setup()

		await inputTitle()
		await inputDescription()
		await selectLevel()
		await createTag()
		await submit()

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
		const { inputDescription, selectLevel, selectTag, submit } = await setup()

		await inputDescription()
		await selectLevel()
		await selectTag()
		await submit()

		await waitFor(() =>
			expect(
				screen.getByRole("textbox", { name: "クエスト名" })
			).toHaveAccessibleErrorMessage("Invalid length")
		)
	})

	test("クエストの説明がないバリデーションエラー", async () => {
		const { inputTitle, selectLevel, selectTag, submit } = await setup()

		await inputTitle()
		await selectLevel()
		await selectTag()
		await submit()

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
