"use client"

import { useEffect } from "react"
import { meState } from "@/stores/user"
import { useRecoilState } from "recoil"
import { getMe, getMeId } from "@/clients/users/apis"
import axios from "axios"

export default function AuthWrap({ children }: { children: React.ReactNode }) {
	const [me, setMe] = useRecoilState(meState)

	useEffect(() => {
		if (me.id) return
		;(async () => {
			const meId = await getMeId()
			axios.defaults.headers.common["X-Forwarded-User"] = meId.id

			try {
				const me = await getMe()
				setMe(me)
			} catch {
				alert("ログインしてください")
			}
		})()
	}, [me, setMe])

	return <>{children}</>
}
