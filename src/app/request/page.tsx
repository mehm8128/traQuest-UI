import QuestRequestForm from "@/app/request/_components/QuestRequestForm"
import { Tag } from "@/clients/tags/types"

const useTags = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/tags`, {
		next: { revalidate: 60 },
	})
	if (!res.ok) throw new Error("エラーが発生しました")
	return await res.json()
}

export default async function Request() {
	const tags: Tag[] = await useTags()

	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl mt-2 text-center">クエスト作成申請</h1>
			<p className="mt-6 mb-4">
				クエストを新たに作成することができます。送信した申請は管理者に承認されるとクエスト一覧に表示されるようになります。
			</p>
			<QuestRequestForm tags={tags} />
		</div>
	)
}
