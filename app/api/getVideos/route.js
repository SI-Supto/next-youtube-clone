import { NextResponse } from "next/server";
import prisma from '../../libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

export const dynamic = 'force-dynamic'
export async function GET() {
    try {
        const { id } = await getCurrentUser();
        const savedVideos = await prisma.User.findUnique({
            where: {
                id: id
            },
            include: {
                savedVideos: true
            }
        })
        return NextResponse.json(savedVideos)
    } catch (error) {
        console.log(error)
    }


}