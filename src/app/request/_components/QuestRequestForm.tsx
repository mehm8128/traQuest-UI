"use client"

import { useState } from "react"
import CreatableSelect from "react-select/creatable"
import Select from "react-select"
import { QuestRequest } from "@/clients/quests/types"
import { useRouter } from "next/navigation"
import { postQuest } from "@/clients/quests/apis"
import { postTag } from "@/clients/tags/apis"
import { Tag } from "@/clients/tags/types"

const levelOptions = Array(5)
	.fill(0)
	.map((_, i) => ({ value: i + 1, label: i + 1 }))

interface Option {
	value: string
	label: string
	__isNew__?: boolean
}

export default function QuestRequestForm({ tags }: { tags: Tag[] }) {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [selectedLevel, setSelectedLevel] = useState(levelOptions[0])
	const [selectedTags, setSelectedTags] = useState<Option[]>([])
	const [isSubmitting, setIsSubmitting] = useState(false)

	const router = useRouter()
	const tagOptions = tags.map((tag) => ({ value: tag.id, label: tag.name }))

	const handleCreateTag = async (tags: Option[]) => {
		console.log(tags)
		if (tags.length === 0) return []

		try {
			const requestData: string[] = tags.map((tag) => tag.value)
			const res = await postTag(requestData)
			return res.map((tag) => tag.id)
		} catch {
			alert("エラーが発生しました。")
		}
		return []
	}

	const handleSubmit = async () => {
		if (title === "" || description === "") {
			alert("1文字以上入力してください")
			return
		}
		setIsSubmitting(true)
		console.log(selectedTags)
		const newTags: string[] = await handleCreateTag(
			selectedTags.filter((tag) => tag.__isNew__ !== undefined)
		)

		try {
			const requestData: QuestRequest = {
				title,
				description,
				level: selectedLevel.value,
				tags: selectedTags
					.filter((tag) => tag.__isNew__ === undefined)
					.map((tag) => tag.value)
					.concat(newTags),
			}
			await postQuest(requestData)
			router.refresh()
			alert("申請を送信しました。")
			router.push("/")
		} catch {
			alert("エラーが発生しました。")
		}
		setIsSubmitting(false)
	}

	return (
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
					options={tagOptions}
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
	)
}
