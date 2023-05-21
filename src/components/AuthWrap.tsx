"use client"

import { User } from "@/clients/users.ts/types"
import axios from "axios"
import { useEffect } from "react"
import { meState } from "@/stores/user"
import { useSetRecoilState } from "recoil"

export default function AuthWrap({ children }: { children: React.ReactNode }) {
	const setMe = useSetRecoilState(meState)

	useEffect(() => {
		;(async () => {
			try {
				const res = await axios.get<User>(
					`${process.env.NEXT_PUBLIC_ORIGIN}/api/users/me`,
					{ withCredentials: true }
				)
				setMe(res.data)
			} catch {
				location.href = `${process.env.NEXT_PUBLIC_ORIGIN}/api/users/authorize`
			}
		})()
	}, [setMe])

	return <>{children}</>
}
