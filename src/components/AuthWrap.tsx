"use client"

import { useEffect } from "react"
import { meState } from "@/stores/user"
import { useSetRecoilState } from "recoil"
import { getMe } from "@/clients/users/apis"

export default function AuthWrap({ children }: { children: React.ReactNode }) {
	const setMe = useSetRecoilState(meState)

	useEffect(() => {
		;(async () => {
			try {
				const me = await getMe()
				setMe(me)
			} catch {
				location.href = `${process.env.NEXT_PUBLIC_ORIGIN}/api/users/authorize`
			}
		})()
	}, [setMe])

	return <>{children}</>
}
