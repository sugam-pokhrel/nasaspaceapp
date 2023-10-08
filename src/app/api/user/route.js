import {  getServerSession} from "next-auth";

import { NextResponse } from 'next/server';
import prisma from '../../../../utils/prisma'
export async function GET(request,res) {
    var session= await getServerSession();
    let response = NextResponse.next()
    console.log('waiting')

     
      
      if(!session){
        return NextResponse.json({ error: 'unAuth' }, { status: 401 })
      }
      if (session !== null) {
    const email = session.user.email;
    const data=await request.json();

    
    const user= await prisma.user.findFirst({
        where:{
            email:email
        }
    });
    return NextResponse.json({user:user})

  }
  



    


   
    // try{

    //     // const body=await request.json();
    //     // const {username,password,email}=body;

    //    const user= await prisma.user.findUnique({
           
    //    });

    //     return Response.json({message:"success"})

    // }catch(e){
    //     return NextResponse.error();
    // }

}