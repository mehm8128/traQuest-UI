import { Quest, QuestDetail } from "@/clients/quests/types"
import { tags, tag } from "@/clients/tags/mocks"

export const quests: Quest[] = [
	{
		id: "1",
		number: 1,
		title: "メッセージを投稿してみよう",
		level: 1,
		completed: true,
		completedCount: 0,
		description:
			"自分のtimesで何かメッセージを投稿してみよう。おすすめは「おいすー」です。",
		tags: tags(3),
		createdAt: "2023-01-01T00:00:00.000Z",
		updatedAt: "2023-01-01T00:00:00.000Z",
	},
	{
		id: "2",
		number: 2,
		title: "スタンプをつけてみよう",
		level: 2,
		completed: false,
		completedCount: 0,
		description:
			"他の人の投稿にスタンプをつけてみよう。generalチャンネルには重要な投稿があるので、みんなが押しているスタンプを押してみよう。",
		tags: [tag("2")],
		createdAt: "2023-01-01T00:00:00.000Z",
		updatedAt: "2023-01-01T00:00:00.000Z",
	},
	{
		id: "3",
		number: 3,
		title: "チャンネルに通知をつけてみよう",
		level: 3,
		completed: false,
		completedCount: 0,
		description:
			"チャンネルには右上の通知ボタンから通知をつけることができます。気になった先輩のtimesに通知をつけてみよう。",
		tags: [tag("3")],
		createdAt: "2023-01-01T00:00:00.000Z",
		updatedAt: "2023-01-01T00:00:00.000Z",
	},
]

export const questDetail: QuestDetail = {
	...quests[0],
	completedUsers: ["mehm8128", "itt", "yukikurage"],
	image: "https://q.trap.jp/api/v3/public/icon/mehm8128",
}
