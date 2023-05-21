export const getApiOrigin = () => {
	const origin = process.env.NEXT_PUBLIC_ORIGIN
	if (!origin) {
		return "http://localhost:3000"
	}
	return origin
}
