import { NextResponse } from "next/server";
import prisma from '../../../libs/prismadb';

export const dynamic = 'force-dynamic'
export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        const deleteVideo = await prisma.Videos.delete({
            where: {
                id: id
            },
        })
        return NextResponse.json(deleteVideo)
    } catch (error) {
        console.log(error);
    }

}