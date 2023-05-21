"use client"

import axios from "axios"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getApiOrigin } from "@/utils/env"

export default function Callback({
	searchParams,
}: {
	searchParams: { code: string }
}) {
	const router = useRouter()
	useEffect(() => {
		;(async () => {
			await axios.get(
				`${getApiOrigin()}/api/users/callback?code=${searchParams.code}`,
				{ withCredentials: true }
			)
			router.push("/")
		})()
	})
	return null
}
