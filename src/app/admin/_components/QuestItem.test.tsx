import CompleteButton from "@/app/[questId]/_components/CompleteButton"
import QuestItem from "@/app/admin/_components/QuestItem"
import { UnapprovedQuest } from "@/clients/quests/types"
import RecoilProvider from "@/components/RecoilProvider"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"

jest.mock("axios")
const user = userEvent.setup()

test("承認できる", async () => {
	const quest: UnapprovedQuest = {
		id: "1",
		number: 1,
		title: "aaaaa",
		level: 3,
		completedCount: 10,
		description: "aaaaa",
		tags: [],
		createdAt: "2021-01-01T00:00:00",
		updatedAt: "2021-01-01T00:00:00",
	}
	const mockFetchFn = jest.spyOn(axios, "post")
	const mockSetFn = jest.fn()
	render(
		<RecoilProvider>
			<QuestItem questItem={quest} setQuests={mockSetFn} />
		</RecoilProvider>
	)
	await user.click(screen.getByRole("button", { name: "承認" }))
	expect(mockFetchFn).toHaveBeenCalled()
	expect(mockSetFn).toHaveBeenCalled()
})

test("却下できる", async () => {
	const quest: UnapprovedQuest = {
		id: "1",
		number: 1,
		title: "aaaaa",
		level: 3,
		completedCount: 10,
		description: "aaaaa",
		tags: [],
		createdAt: "2021-01-01T00:00:00",
		updatedAt: "2021-01-01T00:00:00",
	}
	const mockFetchFn = jest.spyOn(axios, "post")
	const mockSetFn = jest.fn()
	render(
		<RecoilProvider>
			<QuestItem questItem={quest} setQuests={mockSetFn} />
		</RecoilProvider>
	)
	await user.click(screen.getByRole("button", { name: "却下" }))
	expect(mockFetchFn).toHaveBeenCalled()
	expect(mockSetFn).toHaveBeenCalled()
})
