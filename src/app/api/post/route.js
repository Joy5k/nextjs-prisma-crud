const { PrismaClient } = require('@prisma/client')
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
     await prisma.post.create({
         data: {
            authorId:1,
            title: "Full stack web developer",
            metaTitle: "Web development using MERN stack",
            slug: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur.",
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur.",
            published:1,
            content: "MERN",
          
        }
    })
     return NextResponse.json({status: 200,message:"success"})
 }
 catch (error) {
    return NextResponse.json({status:400,message:error.name})
    }
    
}
 