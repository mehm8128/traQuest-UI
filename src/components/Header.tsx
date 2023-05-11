import UserIcon from "@/components/UserIcon"

export default function Header() {
	return (
		<header className="flex items-center justify-between bg-blue-200 py-1 px-2">
			<h1 className="text-3xl">traQuest</h1>
			<div className="flex items-center gap-2">
				<div>mehm8128</div>
				<UserIcon user="mehm8128" />
			</div>
		</header>
	)
}
