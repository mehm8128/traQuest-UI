"use client"

import { User } from "@/clients/users/types"
import { meState } from "@/stores/user"
import { MutableSnapshot, RecoilRoot } from "recoil"
export default function RecoilProvider({
	children,
	defaultValue,
}: {
	children: React.ReactNode
	defaultValue?: Partial<User>
}) {
	const initializeState = ({ set }: MutableSnapshot) => {
		if (!defaultValue) return
		set(meState, (prev) => ({ ...prev, ...defaultValue }))
	}
	return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>
}
