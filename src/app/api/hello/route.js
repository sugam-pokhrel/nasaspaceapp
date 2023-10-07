import {  getServerSession} from "next-auth";
import prisma from '../../../../utils/prisma'
import { NextResponse } from 'next/server';

export async function PUT(request,res) {
  console.log('put request')

    var session= await getServerSession();
    let response = NextResponse.next()
    if(!session){
        return NextResponse.json({ error: 'unAuth' }, { status: 401 })

      }
    if (session !== null) {
    const email = session.user.email;
    const data=await request.json();
   

    try{
      let update=await prisma.user.update({
        where:{
          email:email
        },
         data:{
            name:data.name,
            email:email,
            phone:data.phone,
            intrest:data.intrest,



           },
      });

      return NextResponse.json({message:"updated succesfully"},{status:200});


    }catch(e){
      return NextResponse.json({ error: 'Something went wrong' }, { status: 401 })
        

    }




}
}

export async function POST(request,res) {
    var session= await getServerSession();
    let response = NextResponse.next()
    console.log(session)

     

    if (session !== null) {
    const email = session.user.email;
    const data=await request.json();
    console.log(data)

    let isuser=await prisma.user.findFirst({
      where:{
        email:email
      }
    })

    if(isuser){
        
    try{
        let update=await prisma.user.update({
          where:{
            email:email
          },
           data:{
              name:data.name,
              email:email,
              phone:data.phone,
              intrest:data.intrest,
              country:data.country,
  
  
  
             },
        });
  
        return NextResponse.json({message:"updated succesfully"},{status:200});
  
  
      }catch(e){
        return NextResponse.json({ error: 'Something went wrong' }, { status: 401 })
          
  
      }
    
        }






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
          const user= await prisma.user.create({
        
           data:{
            email,
            name:data.name,
            phone:data.number,
            intrest:data.categories,
            country:data.country,

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

