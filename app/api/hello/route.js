import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'
export async function POST(req) {
    try {
        const data = await req.json();
        return NextResponse.json(data)
    } catch (error) {
        console.log(error);
    }
}