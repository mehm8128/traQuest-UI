import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "traQuest",
	description: "traQuest",
}

// const initMock = async () => {
// 	if (process.env.NODE_ENV === "development") {
// 		if (typeof window === "undefined") {
// 			const { server } = await import("@/clients/utils/mocks/server")
// 			server.listen({
// 				onUnhandledRequest: "bypass",
// 			})
// 		} else {
// 			const { worker } = await import("@/clients/utils/mocks/browser")
// 			worker.start({
// 				onUnhandledRequest: "bypass",
// 			})
// 		}
// 	}
// }
// initMock()

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<Header />
				<main className="px-4 py-2 text-dark">{children}</main>
			</body>
		</html>
	)
}
