import { User } from "@/clients/users.ts/types"
import { atom } from "recoil"

export const meState = atom<User>({
	key: "meState",
	default: {
		id: "",
		name: "",
		completedQuests: [],
		score: 0,
	},
})
