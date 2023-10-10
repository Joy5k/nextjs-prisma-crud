import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma=new PrismaClient()
export async function POST(req, res, next) { 
    try {
        await prisma.post_category.create({
            data: {
                postId: 1,
                categoryId:1
            }
        })
        return NextResponse.json({ status: 200, message:" successful"})
    } catch (error) {
        return NextResponse.json({status:500,message:'Failed',error:error.name});
    }
}