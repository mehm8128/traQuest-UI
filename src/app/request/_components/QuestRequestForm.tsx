"use client"

import { useId, useState } from "react"
import CreatableSelect from "react-select/creatable"
import Select from "react-select"
import { useRouter } from "next/navigation"
import { postQuest } from "@/clients/quests/apis"
import { postTag } from "@/clients/tags/apis"
import { Tag } from "@/clients/tags/types"
import FieldWrap from "@/components/FieldWrap"
import { QuestRequestSchema, OptionSchema } from "@/clients/quests/schema"
import { Controller, useForm } from "react-hook-form"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { questSchema } from "@/clients/quests/schema"
import { QuestRequest } from "@/clients/quests/types"

const levelOptions = Array(5)
	.fill(0)
	.map((_, i) => ({ value: (i + 1).toString(), label: (i + 1).toString() }))

export default function QuestRequestForm({ tags }: { tags: Tag[] }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<QuestRequestSchema>({
		resolver: valibotResolver(questSchema),
		defaultValues: {
			title: "",
			description: "",
			level: levelOptions[0],
			tags: [],
		},
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const id = useId()

	const router = useRouter()
	const tagOptions = tags.map((tag) => ({ value: tag.id, label: tag.name }))

	const handleCreateTag = async (tags: OptionSchema[]) => {
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

	const onSubmit = async (data: QuestRequestSchema) => {
		setIsSubmitting(true)
		const newTags: string[] = await handleCreateTag(
			data.tags.filter((tag) => tag.__isNew__ !== undefined)
		)
		try {
			const requestData: QuestRequest = {
				...data,
				level: parseInt(data.level.value),
				tags: data.tags
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
			<FieldWrap
				labelText="クエスト名"
				htmlFor={`${id}-title`}
				error={errors.title}
			>
				<input
					id={`${id}-title`}
					placeholder="クエスト名"
					className="w-full border border-gray-400 rounded-md p-2"
					{...register("title")}
				/>
			</FieldWrap>
			<FieldWrap
				labelText="クエストの説明"
				htmlFor={`${id}-description`}
				error={errors.description}
			>
				<textarea
					id={`${id}-description`}
					placeholder="クエストの説明"
					className="w-full min-h-[128px] border border-gray-400 rounded-md p-2"
					{...register("description")}
				/>
			</FieldWrap>
			<FieldWrap
				labelText="難易度"
				htmlFor={`${id}-level`}
				error={errors.level}
			>
				<Controller
					name="level"
					control={control}
					render={({ field }) => (
						<Select
							id={`${id}-level`}
							placeholder="難易度"
							options={levelOptions}
							{...field}
						/>
					)}
				/>
			</FieldWrap>
			<FieldWrap
				labelText="タグ"
				htmlFor={`${id}-tags`}
				error={errors.tags?.[0]}
			>
				<Controller
					name="tags"
					control={control}
					render={({ field }) => (
						<CreatableSelect
							id={`${id}-tags`}
							placeholder="タグ"
							isMulti
							options={tagOptions}
							{...field}
						/>
					)}
				/>
			</FieldWrap>
			<div className="text-right">
				<button
					className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-xl"
					type="button"
					onClick={handleSubmit(onSubmit)}
					disabled={isSubmitting}
				>
					申請を送信
				</button>
			</div>
		</form>
	)
}
