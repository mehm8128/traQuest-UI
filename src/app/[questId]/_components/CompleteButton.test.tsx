import CompleteButton from "@/app/[questId]/_components/CompleteButton"
import RecoilProvider from "@/components/RecoilProvider"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import axios from "axios"

jest.mock("axios")
const user = userEvent.setup()

test("uncompletedなときにcompleteできる", async () => {
	const mockFetchFn = jest.spyOn(axios, "post")
	const mockSetFn = jest.fn()
	render(
		<RecoilProvider>
			<CompleteButton
				isCompleted={false}
				questId="aaa"
				setQuestDetail={mockSetFn}
			/>
		</RecoilProvider>
	)
	expect(screen.getByText("クエスト完了！")).toBeInTheDocument()
	await user.click(screen.getByRole("button"))
	expect(mockFetchFn).toHaveBeenCalled()
	expect(mockSetFn).toHaveBeenCalled()
})

test("completedなときにボタンがdisabled", async () => {
	const mockSetFn = jest.fn()
	render(
		<RecoilProvider>
			<CompleteButton
				isCompleted={true}
				questId="aaa"
				setQuestDetail={mockSetFn}
			/>
		</RecoilProvider>
	)
	expect(screen.getByText("クエスト完了済み")).toBeInTheDocument()
	expect(screen.getByRole("button")).toBeDisabled()
})
