import { questDetail } from "@/apis/quests/mocks"
import QuestLevel from "@/components/QuestLevel"
import QuestTag from "@/components/QuestTag"
import UserIcon from "@/components/UserIcon"
import Image from "next/image"

export default function Quest() {
	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl font-bold">{questDetail.title}</h1>
			<div className="flex justify-between mt-2">
				<p>{questDetail.description}</p>
				<div className="flex flex-col items-end gap-2">
					<QuestLevel level={questDetail.level} />
					<QuestTag tags={questDetail.tags} />
				</div>
			</div>
			{questDetail.image && (
				<Image
					src={questDetail.image}
					alt={questDetail.alt ?? ""}
					height={160}
					width={320}
				/>
			)}
			<section className="mt-16">
				<h2 className="text-xl">クリア済みユーザー</h2>
				<div className="flex flex-wrap gap-12 mt-4">
					{questDetail.completeUsers.map((user) => (
						<div key={user} className="flex flex-col items-center gap-1">
							<UserIcon user={user} size={64} />
							<span>{user}</span>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
