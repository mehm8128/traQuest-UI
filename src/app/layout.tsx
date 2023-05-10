import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "traQuest",
	description: "traQuest",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<main className="px-4 py-2">{children}</main>
			</body>
		</html>
	)
}
