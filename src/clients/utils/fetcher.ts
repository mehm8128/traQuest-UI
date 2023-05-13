import axios from "axios"
import useSWR from "swr"

const fetcher = async <T>(url: string) =>
	await axios.get<T>(url).then((res) => res.data)

export const useFetch = <T>(url: string) => {
	return useSWR<T>(url, fetcher<T>)
}
