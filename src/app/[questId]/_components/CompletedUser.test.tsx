import CompletedUsers from "@/app/[questId]/_components/CompletedUsers"
import { questDetail } from "@/clients/quests/fixtures"
import { render, screen } from "@testing-library/react"

test("completedUsersが表示される", async () => {
	render(<CompletedUsers questDetail={questDetail} />)
	expect(screen.getByText("user1")).toBeInTheDocument()
	expect(screen.getByText("user2")).toBeInTheDocument()
})

test("completedUsersにないユーザーが表示されない", async () => {
	render(<CompletedUsers questDetail={questDetail} />)
	expect(screen.queryByText("user3")).not.toBeInTheDocument()
})
