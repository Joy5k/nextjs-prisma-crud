import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma=new PrismaClient()
export async function POST(req, res) {
 try {
    await prisma.post_category.create({
        data: {
            postId:1,
            categoryId:2,
        }
    })
     return NextResponse.json({status: 200,message:"create post_category successfully"})
 }
 catch (error) {
   return NextResponse.json({status:500,message:"failed to create category",error:error,Error_code:error.code})
 }
}
