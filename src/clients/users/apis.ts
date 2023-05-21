import { User } from "@/clients/users/types"
import axios from "axios"

export const getMe = async () => {
	const res = await axios.get<User>(
		`${process.env.NEXT_PUBLIC_ORIGIN}/api/users/me`,
		{ withCredentials: true }
	)
	return res.data
}
