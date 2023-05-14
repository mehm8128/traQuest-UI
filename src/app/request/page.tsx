"use client"

import { tags } from "@/clients/tags/mocks"
import { useState } from "react"
import CreatableSelect from "react-select/creatable"
import Select from "react-select"
import { QuestRequest } from "@/clients/quests/types"
import { useRouter } from "next/navigation"
import { postQuest } from "@/clients/quests/apis"
import { postTag } from "@/clients/tags/apis"

const levelOptions = Array(5)
	.fill(0)
	.map((_, i) => ({ value: i + 1, label: i + 1 }))
const tagOptions = tags(3).map((tag) => ({ value: tag.id, label: tag.name }))

interface Option {
	value: string
	label: string
	__new__?: boolean
}

//todo: このコンポーネント自体はserver coomponentにしたい
export default function Request() {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [selectedLevel, setSelectedLevel] = useState(levelOptions[0])
	const [selectedTags, setSelectedTags] = useState<Option[]>([])
	const [isSubmitting, setIsSubmitting] = useState(false)

	const router = useRouter()

	const handleCreateTag = async (tags: Option[]) => {
		if (tags.length === 0) return []
		try {
			const requestData: string[] = tags.map((tag) => tag.value)
			await postTag(requestData)
		} catch {
			alert("エラーが発生しました。")
			return []
		}
		//todo: return tag ids
		return []
	}

	const handleSubmit = async () => {
		//todo: validation
		setIsSubmitting(true)
		const newTags: string[] = await handleCreateTag(
			selectedTags.filter((tag) => tag.__new__ !== undefined)
		)

		try {
			const requestData: QuestRequest = {
				title,
				description,
				level: selectedLevel.value,
				tags: selectedTags.map((tag) => tag.value).concat(newTags),
			}
			await postQuest(requestData)
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
			<form className="flex flex-col gap-4">
				<label className="flex flex-col gap-1">
					<span>クエスト名</span>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="クエスト名"
						className="w-full border border-gray-400 rounded-md p-2"
					/>
				</label>
				<label className="flex flex-col gap-1">
					<span>クエストの説明</span>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="クエストの説明"
						className="w-full min-h-[128px] border border-gray-400 rounded-md p-2"
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
					<CreatableSelect
						placeholder="タグ"
						isMulti
						name="tags"
						options={[]}
						onChange={(val) => (val ? setSelectedTags([...val]) : null)}
					/>
				</label>
				<div className="text-right">
					<button
						className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl"
						type="button"
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
