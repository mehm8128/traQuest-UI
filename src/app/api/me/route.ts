import { getShowcaseUser } from "@/utils/auth"
import { NextRequest, NextResponse } from "next/server"

export interface MeResponse {
	id: string
}

export async function GET(req: NextRequest) {
	const userId = getShowcaseUser(req)
	if (!userId) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
	}
	const res: MeResponse = { id: userId }
	return NextResponse.json(res)
}
