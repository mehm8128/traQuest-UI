import QuestPanel from "@/app/_components/QuestPanel"
import { Quest } from "@/clients/quests/types"
import { render, screen } from "@testing-library/react"

test("completedなときに済が表示される", () => {
	const quest: Quest = {
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
	}
	render(<QuestPanel quest={quest} />)
	expect(screen.getByText("済")).toBeInTheDocument()
})
test("completedでないときに済が表示されない", () => {
	const quest: Quest = {
		id: "1",
		number: 1,
		title: "aaaaa",
		level: 3,
		completed: false,
		completedCount: 10,
		description: "aaaaa",
		tags: [],
		createdAt: "2021-01-01T00:00:00",
		updatedAt: "2021-01-01T00:00:00",
	}
	render(<QuestPanel quest={quest} />)
	expect(screen.queryByText("済")).not.toBeInTheDocument()
})
