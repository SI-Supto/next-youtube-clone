import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '../../libs/prismadb'
export async function POST(req) {
    try {
        const data = await req.json();
        const { id } = await getCurrentUser();
        const savedVideos = await prisma.Videos.findMany({
            where: {
                ownerId: id,
                videoId: data.videoId
            }
        })
        if (savedVideos.length !== 0) {
            return NextResponse.json(savedVideos)
        }

        const saveData = await prisma.Videos.create({
            data: {
                ...data, ownerId: id
            }
        })
        return NextResponse.json(saveData)
    } catch (error) {
        console.log(error);
    }
}