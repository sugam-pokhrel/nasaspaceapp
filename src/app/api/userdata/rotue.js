

import { NextResponse } from 'next/server';
import prisma from '../../../../utils/prisma'

export async function GET(req,res) {
    const {name,phone,intrest}=req.body;

    console.log(intrest);

    return NextResponse.json({ message: process.env.GOOGLE_CLIENT_SECRET })



}