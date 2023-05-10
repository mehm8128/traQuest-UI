/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "q.trap.jp",
				port: "",
				pathname: "/api/v3/**",
			},
		],
	},
}

module.exports = nextConfig
