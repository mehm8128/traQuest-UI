import { QuestDetail } from "@/clients/quests/types"
import UserIcon from "@/components/UserIcon"

export default function CompletedUsers({
	questDetail,
}: {
	questDetail: QuestDetail
}) {
	return (
		<section className="mt-8">
			<h2 className="text-xl">クリア済みユーザー</h2>
			{questDetail.completedUsers.length === 0 && (
				<div className="mt-4">まだいません！一番乗りを目指しましょう</div>
			)}
			<div className="flex flex-wrap gap-12 mt-4">
				{questDetail.completedUsers.map((user) => (
					<div key={user} className="flex flex-col items-center gap-1">
						<UserIcon user={user} size={64} />
						<span>{user}</span>
					</div>
				))}
			</div>
		</section>
	)
}
