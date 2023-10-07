import {  getServerSession} from "next-auth";
import prisma from '../../../../utils/prisma'
import { NextResponse } from 'next/server';

export async function GET(request,res){


    let data=await prisma.projects.findMany({})
    return NextResponse.json({data:data},{status:200})
}
export async function POST(request,res) {
    var session= await getServerSession();
    let response = NextResponse.next()
    console.log(session)

     

    if (session !== null) {
        const email = session.user.email;
        const data=await request.json();
       

   






// if (data.name && data.phone && data.ElecricityId && data.ElectricityScNo && data.ElectricityOfficeName && data.transactionID !== '') {
//     // All variables are not empty, and transactionID is not empty.
//     // You can proceed with your code here.
//     console.log('all good')
    
// } else {
//   console.log('something went wrong')
//   return  NextResponse.json({message:'err'},{status:404})
   



    
   
  

// }


//     if (Object.keys(data.address).every(function(x) { return data.address[x]===''||data.address[x]===null;}) === false) {
//    console.log('has something');
// } else {
//    console.log('nothing');
// }

    
    try{

      console.log('creating')
          const user= await prisma.projects.create({
        
           data:{
            createdBy: email,
            title:data.title,
            description:data.description,
            imgUrl: data.link
            

           },


         
            
            
            


        

    });
        return  NextResponse.json({message:"Succesfully created the users"},{status:200})


    }catch(e){

          return NextResponse.json({ error: 'Something went wrong' }, { status: 401 })
        
    }


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

