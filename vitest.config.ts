/// <reference types="vitest" />

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src").replace(/\\/g, "/"),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./setup.ts"],
	},
})
