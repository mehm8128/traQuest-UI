import { FieldErrors, FieldValues } from "react-hook-form"

export default function FieldWrap({
	labelText,
	htmlFor,
	children,
	error,
}: {
	labelText: string
	htmlFor: string
	children: React.ReactNode
	error?: FieldErrors[number]
}) {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={htmlFor}>
				<span>{labelText}</span>
			</label>
			{children}
			<div className="h-4 text-red-400">{error?.message?.toString()}</div>
		</div>
	)
}
