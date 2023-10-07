

import { NextResponse } from 'next/server';
import prisma from '../../../../utils/prisma'

export async function POST(req,res) {
    const {name,phone,intrest}=req.body;

    

    await prisma.user.create({

        data: {
            name: name,
            phone: phone,
            intrest: intrest
        }

    })

    return NextResponse.json({ message: process.env.GOOGLE_CLIENT_SECRET })

}

export async function GET(req,res) {
let data=await prisma.user.findFirst(
    {
        where: {
            id: req.body.id
        }
    }
)
    return NextResponse.json({ message: data }
);



}