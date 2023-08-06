import Header from "./Header"
import RecoilProvider from "./RecoilProvider"
import { render, screen } from "@testing-library/react"

test("adminであるとき、申請一覧リンクが表示される", () => {
	render(
		<RecoilProvider
			defaultValue={{
				id: "mehm8128",
			}}
		>
			<Header />
		</RecoilProvider>
	)
	expect(screen.getByText("申請一覧")).toBeInTheDocument()
})

test("adminでないとき、申請一覧リンクが表示されない", () => {
	render(
		<RecoilProvider
			defaultValue={{
				id: "aaa",
			}}
		>
			<Header />
		</RecoilProvider>
	)
	expect(screen.queryByText("申請一覧")).not.toBeInTheDocument()
})
