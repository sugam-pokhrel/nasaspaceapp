import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div className='teamSection grid grid-cols-3'>
      <div className='teamNav'>
        <Link href={"/"}><img src="./sciMart.png" width={"100px"} alt="" /></Link>
        <ul>
       <li><Link href='/Team' className='chatLinks mb-4'><h2>Team</h2></Link></li>
       <li>  <Link href='/invite' className='chatLinks mb-4'><h2>Invite</h2></Link></li>
      <li><Link href='/chat' className='chatLinks'><h2>Chat</h2></Link></li>
      <li> <Link href='/marketplace' className='chatLinks'><h2>Marketplace</h2></Link></li>
      <li> <Link href='/tasks' className='chatLinks'><h2>Task </h2></Link></li>


        </ul>
        </div>
        <div className='teamMain mt-10 '>
          <h1>Hridaya's Team</h1>
          <p>Invite your friends to get connected with project.</p>
            <Link href={"/invite"}>  <button className='inviteBtn bg-purple-400 mt-5'>Invite Team Members</button></Link>
</div>
<img src="https://o.remove.bg/downloads/3723b60c-4a0a-477f-aabf-d81fe196887e/pngtree-modern-flat-design-concept-of-team-work-design-with-characters-in-png-image_2157887-removebg-preview.png" alt="" width={"300px"}  className='mt-20'/>
    </div>
    </>
  )
}

export default page