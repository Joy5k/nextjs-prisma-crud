import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma=new PrismaClient()
export async function POST(req, res, next) { 
    try {
        await prisma.category.create({
            data: {
                title: "Category Title",
                metaTitle: "Category Meta Title",
                slug: "category slug",
                content:"category content"
            }
        })
        return NextResponse.json({status: 200, message:"success"});
    } catch (error) {
        return NextResponse.json({message:"failed",status:500,error:error.name,Erro_code:error.code});
    }
}