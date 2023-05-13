"use client"

import { tags } from "@/apis/tags/mocks"
import { useState } from "react"
import CreatableSelect from "react-select/creatable"
import Select from "react-select"
import { QuestRequest } from "@/apis/quests/types"
import { useRouter } from "next/navigation"

const levelOptions = Array(5)
	.fill(0)
	.map((_, i) => ({ value: i + 1, label: i + 1 }))
const tagOptions = tags(3).map((tag) => ({ value: tag.id, label: tag.name }))

interface Option {
	value: string
	label: string
	__new__?: boolean
}

export default function Request() {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [selectedLevel, setSelectedLevel] = useState(levelOptions[0])
	const [selectedTags, setSelectedTags] = useState<Option[]>([])
	const [isSubmitting, setIsSubmitting] = useState(false)

	const router = useRouter()

	const handleCreateTag = (tags: Option[]) => {
		try {
			const requestData: string[] = tags.map((tag) => tag.value)
			// todo: 送信処理
		} catch {
			alert("エラーが発生しました。")
			return []
		}
		//todo: tag ids
		return []
	}

	const handleSubmit = () => {
		setIsSubmitting(true)
		const newTags: string[] = handleCreateTag(
			selectedTags.filter((tag) => tag.__new__ !== undefined)
		)

		try {
			const requestData: QuestRequest = {
				title,
				description,
				level: selectedLevel.value,
				tags: selectedTags.map((tag) => tag.value).concat(newTags),
			}
			// todo: 送信処理
			alert("申請を送信しました。")
			router.push("/")
		} catch {
			alert("エラーが発生しました。")
		}
		setIsSubmitting(false)
	}

	return (
		<div className="w-1/2 mx-auto py-4">
			<h1 className="text-3xl mt-2 text-center">クエスト作成申請</h1>
			<p className="mt-6 mb-4">
				クエストを新たに作成することができます。送信した申請は管理者に承認されるとクエスト一覧に表示されるようになります。
			</p>
			<form
				className="flex flex-col gap-4"
				onSubmit={(e) => e.preventDefault()}
			>
				<label className="flex flex-col gap-1">
					<span>クエスト名</span>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="クエスト名"
						className="w-full border border-black rounded-md p-2"
					/>
				</label>
				<label className="flex flex-col gap-1">
					<span>クエストの説明</span>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="クエストの説明"
						className="w-full min-h-[128px] border border-black rounded-md p-2"
					/>
				</label>
				<label className="flex flex-col gap-1">
					<span>難易度</span>
					<Select
						placeholder="難易度"
						name="level"
						options={levelOptions}
						defaultValue={levelOptions[0]}
						onChange={(val) => (val ? setSelectedLevel(val) : null)}
					/>
				</label>
				<label className="flex flex-col gap-1">
					<span>タグ</span>
					{JSON.stringify(selectedTags)}
					<CreatableSelect
						placeholder="タグ"
						isMulti
						name="tags"
						options={tagOptions}
						onChange={(val) => (val ? setSelectedTags([...val]) : null)}
					/>
				</label>
				<div className="text-right">
					<button
						className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl"
						onClick={handleSubmit}
						disabled={isSubmitting}
					>
						申請を送信
					</button>
				</div>
			</form>
		</div>
	)
}
