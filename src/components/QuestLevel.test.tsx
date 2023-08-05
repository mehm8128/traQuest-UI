import QuestLevel from "@/components/QuestLevel"
import { render, screen, within } from "@testing-library/react"

test("★がレベル分表示される", () => {
	render(<QuestLevel level={3} />)
	expect(screen.getAllByText("★")).toHaveLength(3)
})
