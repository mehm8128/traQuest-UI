import { questDetail } from "@/apis/quests/mocks"
import QuestLevel from "@/components/QuestLevel"
import QuestTag from "@/components/QuestTag"
import UserIcon from "@/components/UserIcon"

export default function Quest() {
	return (
		<div>
			<h1 className="text-xl font-bold">{questDetail.title}</h1>
			<div className="flex gap-20">
				<p>{questDetail.description}</p>
				<div className="flex flex-col gap-4">
					<QuestLevel level={questDetail.level} />
					<QuestTag tags={questDetail.tags} />
				</div>
			</div>
			<section>
				<h2>クリア済みユーザー</h2>
				<div>
					{questDetail.completeUsers.map((user) => (
						<div key={user} className="flex gap-1 items-center">
							<UserIcon user={user} />
							<span>{user}</span>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
