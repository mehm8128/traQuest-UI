"use client"

import UserIcon from "@/components/UserIcon"
import { meState } from "@/stores/user"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRecoilValue } from "recoil"

export default function Header() {
	const currentPath = usePathname()
	const me = useRecoilValue(meState)

	return (
		<header className="flex items-center justify-between bg-blue-200 py-2 px-4">
			<div className="flex items-center gap-12">
				<h1 className="text-3xl">
					<Link href="/">traQuest</Link>
				</h1>
				<div className="flex items-center gap-4">
					<Link
						href="/"
						className={`hover:bg-blue-300 py-2 px-3 rounded-3xl${
							currentPath === "/" ? " bg-blue-300" : ""
						}`}
					>
						クエスト一覧
					</Link>
					<Link
						href="/ranking"
						className={`hover:bg-blue-300 py-2 px-3 rounded-3xl${
							currentPath === "/ranking" ? " bg-blue-300" : ""
						}`}
					>
						ランキング
					</Link>
					<Link
						href="/request"
						className={`hover:bg-blue-300 py-2 px-3 rounded-3xl${
							currentPath === "/request" ? " bg-blue-300" : ""
						}`}
					>
						作成申請
					</Link>
					{me.name === "mehm8128" && (
						<Link
							href="/admin"
							className={`hover:bg-blue-300 py-2 px-3 rounded-3xl${
								currentPath === "/admin" ? " bg-blue-300" : ""
							}`}
						>
							申請一覧
						</Link>
					)}
				</div>
			</div>
			<div className="flex items-center gap-2">
				<div>{me.name}</div>
				<UserIcon user={me.name} size={40} />
			</div>
		</header>
	)
}
