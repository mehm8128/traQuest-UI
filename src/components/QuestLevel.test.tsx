import QuestLevel from "./QuestLevel"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

test("★がレベル分表示される", () => {
	render(<QuestLevel level={3} />)
	expect(screen.getAllByText("★")).toHaveLength(3)
})
