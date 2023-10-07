"use client";
import React from 'react'
import './globals.css'

const Modal = () => {
  return (
    <>
    <div className='interestModal mt-5'> 
    <div className='modalForm'>
      <form>
      <label for="username">Username</label>
      <br />
    <input type="text" id="username" name="username" required/>
<br />
    <label for="country" className='mt-5'>Country</label>
    <br />
    <select id="country" name="country" required className='options'>
    <option value="nepal">Nepal</option>
      <option value="usa">USA</option>
      <option value="canada">Canada</option>
      <option value="uk">UK</option>
      <option value="australia">Australia</option>
    </select>
    <br></br>

    <label for="tags" className=''>Interest</label>
    <br /> 
    <input type="text" id="tags" name="tags" required>
      </input>
<br></br>

<span className='bold' >Cancel</span>
  <button className=' submitButton'>
    Submit
  </button>
      </form>
       </div>
    </div>
    </>
  )
}

export default Modal