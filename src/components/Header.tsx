import UserIcon from "@/components/UserIcon"
import Link from "next/link"

export default function Header() {
	return (
		<header className="flex items-center justify-between bg-blue-200 py-2 px-4">
			<h1 className="text-3xl">
				<Link href="/">traQuest</Link>
			</h1>
			<div className="flex items-center gap-2">
				<div>mehm8128</div>
				<UserIcon user="mehm8128" />
			</div>
		</header>
	)
}
