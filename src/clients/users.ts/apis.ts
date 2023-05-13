import { User } from "@/clients/users.ts/types"
import { useFetch } from "@/clients/utils/fetcher"

export const useGetMe = () => {
	const { data: res } = useFetch<User[]>("/api/users/me")
	return res
}
