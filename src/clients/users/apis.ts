import { User } from "@/clients/users/types"
import { getApiOrigin } from "@/utils/env"
import axios from "axios"

export const getMe = async () => {
	const res = await axios.get<User>(`${getApiOrigin()}/api/users/me`, {
		withCredentials: true,
	})
	return res.data
}
