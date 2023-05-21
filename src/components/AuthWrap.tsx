"use client"

import { useEffect } from "react"
import { meState } from "@/stores/user"
import { useRecoilState } from "recoil"
import { getMe } from "@/clients/users/apis"
import { getApiOrigin } from "@/utils/env"

export default function AuthWrap({ children }: { children: React.ReactNode }) {
	const [me, setMe] = useRecoilState(meState)

	useEffect(() => {
		if (me) return
		;(async () => {
			try {
				const me = await getMe()
				setMe(me)
			} catch {
				location.href = `${getApiOrigin()}/api/users/authorize`
			}
		})()
	}, [me, setMe])

	return <>{children}</>
}
