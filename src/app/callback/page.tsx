"use client"

import axios from "axios"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Callback({
	searchParams,
}: {
	searchParams: { code: string }
}) {
	const router = useRouter()
	useEffect(() => {
		;(async () => {
			const res = await axios.post(
				`https://q.trap.jp/api/v3/oauth2/token`,
				{
					grant_type: "authorization_code",
					client_id: "rGS0EP7TT5p4u0WPrpNr13wRcBuh8AQlxJeo",
					code: searchParams.code,
				},
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
				}
			)
			// const res = await axios.get(
			// 	`${process.env.NEXT_PUBLIC_ORIGIN}/api/users/callback?code=${searchParams.code}`
			// )
			console.log(res)
			//router.push("/")
		})()
	})
	return null
}
