import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import { SWRConfig } from "swr"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "traQuest",
	description: "traQuest",
}

const SWRconfig = {}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<SWRConfig value={SWRconfig}>
					<Header />
					<main className="px-4 py-2 text-dark">{children}</main>
				</SWRConfig>
			</body>
		</html>
	)
}
