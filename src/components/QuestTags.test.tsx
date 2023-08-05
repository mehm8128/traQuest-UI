import QuestTags from "@/components/QuestTags"
import { render, screen, within } from "@testing-library/react"

test("タグ名の表示", () => {
	render(<QuestTags tags={["タグ1", "タグ2"]} />)
	expect(screen.getByText("タグ1")).toBeInTheDocument()
	expect(screen.getByText("タグ2")).toBeInTheDocument()
})
test("タグが個数分表示される", () => {
	render(<QuestTags tags={["タグ1", "タグ2"]} />)
	const tagList = screen.getByRole("list")
	expect(tagList).toBeInTheDocument()
	expect(within(tagList).getAllByRole("listitem")).toHaveLength(2)
})

test("存在しないタグ名が表示されない", () => {
	render(<QuestTags tags={["タグ1", "タグ2"]} />)
	expect(screen.queryByText("タグ3")).not.toBeInTheDocument()
})
