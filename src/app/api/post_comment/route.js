import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma=new PrismaClient()
export async function POST(req, res) {
 try {
    await prisma.post_comment.create({
        data: {
            post_id:1,
            title: "This is Title",
            published: 1,
            content:"This is Content"
        }
    })
     return NextResponse.json({status: 200,message:"create post_comment successfully"})
 }
 catch (error) {
    return NextResponse.json({status: 400,error: error.name})
 }
}