import { Quest } from "@/apis/quests/types"

export const quests: Quest[] = [
	{
		id: "1",
		title: "メッセージを投稿してみよう",
		level: 1,
		completed: true,
		completeCount: 0,
		description:
			"自分のtimesで何かメッセージを投稿してみよう。おすすめは「おいすー」です。",
		tags: ["test"],
	},
	{
		id: "2",
		title: "スタンプをつけてみよう",
		level: 2,
		completed: false,
		completeCount: 0,
		description:
			"他の人の投稿にスタンプをつけてみよう。generalチャンネルには重要な投稿があるので、みんなが押しているスタンプを押してみよう。",
		tags: ["test2"],
	},
	{
		id: "3",
		title: "チャンネルに通知をつけてみよう",
		level: 3,
		completed: false,
		completeCount: 0,
		description:
			"チャンネルには右上の通知ボタンから通知をつけることができます。気になった先輩のtimesに通知をつけてみよう。",
		tags: ["test3"],
	},
]
