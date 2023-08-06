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
	const buttonEle = screen.getByRole("button", { name: "クエスト完了！" })
	expect(buttonEle).toBeInTheDocument()
	await user.click(buttonEle)
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
	const buttonEle = screen.getByRole("button", { name: "クエスト完了済み" })
	expect(buttonEle).toBeInTheDocument()
	expect(buttonEle).toBeDisabled()
})
