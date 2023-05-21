import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import AuthWrap from "@/components/AuthWrap"
import RecoilProvider from "@/components/RecoilProvider"

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
				<RecoilProvider>
					<AuthWrap>
						<Header />
						<main className="px-4 py-2 text-dark">{children}</main>
					</AuthWrap>
				</RecoilProvider>
			</body>
		</html>
	)
}
