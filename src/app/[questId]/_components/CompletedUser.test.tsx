import CompletedUsers from "@/app/[questId]/_components/CompletedUsers"
import { QuestDetail } from "@/clients/quests/types"
import { render, screen } from "@testing-library/react"

test("completedUsersが表示される", async () => {
	const questDetail: QuestDetail = {
		id: "1",
		number: 1,
		title: "aaaaa",
		level: 3,
		completed: true,
		completedCount: 10,
		description: "aaaaa",
		tags: [],
		createdAt: "2021-01-01T00:00:00",
		updatedAt: "2021-01-01T00:00:00",
		completedUsers: ["user1", "user2"],
	}
	render(<CompletedUsers questDetail={questDetail} />)
	expect(screen.getByText("user1")).toBeInTheDocument()
	expect(screen.getByText("user2")).toBeInTheDocument()
})

test("completedUsersにないユーザーが表示されない", async () => {
	const questDetail: QuestDetail = {
		id: "1",
		number: 1,
		title: "aaaaa",
		level: 3,
		completed: true,
		completedCount: 10,
		description: "aaaaa",
		tags: [],
		createdAt: "2021-01-01T00:00:00",
		updatedAt: "2021-01-01T00:00:00",
		completedUsers: ["user1", "user2"],
	}
	render(<CompletedUsers questDetail={questDetail} />)
	expect(screen.queryByText("user3")).not.toBeInTheDocument()
})
