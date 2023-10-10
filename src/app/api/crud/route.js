import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
    try {
    //  await prisma.user.create({
    //   data: { brandName: 'Apple Phone', brandImage: '123-ABC_APPLE.jpg' }
    // });
     await prisma.user.create({
        data: {
            firstName: "Mehedi",
            middleName: "Hasan",
            lastName: "Joy",
            mobile:"01923588531",
            email: "mmehedihasanjoyv@gmail.com",
            password:"1234567890"
        }
    })
     return NextResponse.json({status: 200,message:"success"})
 }
 catch (error) {
    return NextResponse.json({status:400,message:error.message})
 }
 }