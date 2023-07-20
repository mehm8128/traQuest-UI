import { User } from "@/clients/users/types"
import { atom } from "recoil"

export const meState = atom<User>({
	key: "meState",
	default: {
		id: "",
		completedQuests: [],
		score: 0,
	},
})
