import { User } from "@/clients/users.ts/types"
import axios from "axios"

export const useGetMe = () => {
	const res = axios.get<User[]>("/api/users/me")
	return res
}
