

import { NextResponse } from 'next/server';
import prisma from '../../../../utils/prisma'

export async function GET(req,res) {

    await prisma.user.create({
        data:{
            email:"testint@testing.com",
            name:"testint",
            phone:"fasfasf",
            intrest:["fasfasf","fasfasf"]
        }
    })



    return NextResponse.json({ message: process.env.GOOGLE_CLIENT_SECRET })
}