import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div className='teamSection grid grid-cols-3'>
      <div className='teamNav'>
        <img src="./sciMart.png" width={"100px"} alt="" />
        <ul>
        <Link href='/Team' className='chatLinks mb-4'><h2>Team</h2></Link>
        <Link href='/chat' className='chatLinks'><h2>Chat</h2></Link>
        <Link href='/marketplace' className='chatLinks'><h2>Marketplace</h2></Link>

        </ul>
        </div>
        <div className='teamMain mt-10'>
          <h1>Create new Team</h1>
          <div>
          <label htmlFor="teamName" className='text-2xl'>Team Name</label><br />
        <input
          type="text"
          id="teamName"
          // value={}
          // onChange={handleTeamNameChange}
          className='mb-5'
        />
          </div>
          <div>
        <label htmlFor="emails" className='mt-5 text-2xl'>Emails</label>
        <textarea
          id="emails"
          // value={emails}
          // onChange={handleEmailsChange}
          className='bordered'
        />
              <button >Create Team</button>

      </div>
</div>
    </div>
    </>
  )
}

export default page