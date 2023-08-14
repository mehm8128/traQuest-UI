import QuestPanel from "@/app/_components/QuestPanel"
import { quest } from "@/clients/quests/fixtures"
import { render, screen } from "@testing-library/react"

test("completedなときに済が表示される", () => {
	render(<QuestPanel quest={quest} />)
	expect(screen.getByText("済")).toBeInTheDocument()
})
test("completedでないときに済が表示されない", () => {
	render(<QuestPanel quest={quest} />)
	expect(screen.queryByText("済")).not.toBeInTheDocument()
})
