import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
     await prisma.user.create({
        data: {
            firstName: "Mehedi",
            middleName: "Hasan",
            lastName: "Joy",
            mobile:"01923588531",
            email: "mmehedihasanjoyv@gmail.com",
            password: "1234567890",
            Intro: "User",
            profile:"Developer"
        }
    })
     return NextResponse.json({status: 200,message:"success"})
 }
 catch (error) {
    return NextResponse.json({status:400,message:error.name})
    }
    
}
 