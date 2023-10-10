import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function POST(req, res, next) { 
    try {
        await prisma.tag.create({
            data:{
                title:"tag-Title",
                metaTitle:"tag Meta-Title",
                slug:"tag-slug",
                content:"tag-content"
            }
        })
        return NextResponse.json({status: 200, message:"success"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"failed",status:500,error:error.name,Error_code:error.code});
    }
}