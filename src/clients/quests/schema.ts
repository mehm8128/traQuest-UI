import {
	type Input,
	array,
	number,
	optional,
	string,
	object,
	ValiError,
	minLength,
	boolean,
} from "valibot"

export const optionSchema = object({
	value: string(),
	label: string(),
	__isNew__: optional(boolean()),
})

export type OptionSchema = Input<typeof optionSchema>

export const questSchema = object(
	{
		title: string([minLength(1)]),
		level: optionSchema,
		description: string([minLength(1)]),
		tags: array(optionSchema),
		image: optional(string()),
		alt: optional(string()),
	},
	[
		//todo: 動いてないかも
		(input, info) => {
			if (input.image && !input.alt) {
				throw new ValiError([
					{
						validation: "custom",
						origin: "value",
						message: "alt is required when image is present",
						input,
						...info,
					},
				])
			}
			return input
		},
	]
)

export type QuestRequestSchema = Input<typeof questSchema>
