import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma=new PrismaClient()
export async function POST(req, res) { 
 try {
     await prisma.post_meta.create({
         data: {
             postId:1,
             key:"123-abc",
             content:"This is post meta content"
        }
     })
     return NextResponse.json({status:200,message:"success"})
 }
 catch (error) {
return NextResponse.json({status:"fail",error:error.name})
 }   
}