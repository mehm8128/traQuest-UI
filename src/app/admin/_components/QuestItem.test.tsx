import QuestItem from "@/app/admin/_components/QuestItem"
import { quest, unapprovedQuest } from "@/clients/quests/fixtures"
import RecoilProvider from "@/components/RecoilProvider"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"

jest.mock("axios")
const user = userEvent.setup()

test("承認できる", async () => {
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
	const mockFetchFn = jest.spyOn(axios, "post")
	const mockSetFn = jest.fn()
	render(
		<RecoilProvider>
			<QuestItem questItem={unapprovedQuest} setQuests={mockSetFn} />
		</RecoilProvider>
	)
	await user.click(screen.getByRole("button", { name: "却下" }))
	expect(mockFetchFn).toHaveBeenCalled()
	expect(mockSetFn).toHaveBeenCalled()
})
