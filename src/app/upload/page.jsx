"use client";
import {ID, Role,Permission} from 'appwrite'
import React, { useState } from 'react';
import { redirect } from 'next/navigation'
import Navbar from "../daisycompo/Navbar/Navbar"

import { useSession } from 'next-auth/react';
import storage from '../../../utils/appwrite'
function FileUploadForm() {
  let {data:session}=useSession();
  console.log(session)

  if(!session){
    console.log('not authenticated')
  }
//   if(!session){
//     redirect('api/auth/signin');
// }
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //6521c107e5f3d4430b51
    

    // Here, you can handle the form submission, including uploading the file
    // to your server if needed. You can use libraries like Axios to send
    // the form data to your server.

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Selected File:', selectedFile);

    if(title=='' || description=='' || selectedFile==null){
      alert("Please fill all the fields")
      return;
    }
    const promise = storage.createFile(
      '6521c107e5f3d4430b51',
      ID.unique(),
      selectedFile,
    
  );
  
  promise.then(async function (response) {
      console.log(response); // Successany

      const result = await storage.getFilePreview(response.bucketId, response.$id);
      console.log(result.href)

      let data=await fetch('/api/upload',{
        method:'POST',
        body:JSON.stringify({
          title:title,
          description:description,
          link:result.href
          
        }),
        headers:{
          'Content-Type':'application/json'
        }
      })
      


      
     // Failure
  });


  };
  if(!session){
   return <>
    Please login to upload files
   </>

  }

  return (
<>
    <Navbar/>
      <h2 className='text-3xl mt-3 text-white ' >Upload your files</h2>
      <p className='mt-5'>You can upload your files here with the custom title and some description about it.</p>
      <div className='fileUploadForm '>
      <form onSubmit={handleSubmit} className="text-white mt-5 ">
        <div className="mb-5">
          <label htmlFor="title" className="block mb-0">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-input"
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block  text-gray-600">
            File Upload
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="form-input text-black"
            accept=".jpg, .jpeg, .png, .gif, .pdf" // Specify allowed file types
            onChange={handleFileChange}
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded fileBtn"
        >
          Submit
        </button>
      </form>
   
      <div>
      </div>
    </div>
    </> 
  );
}

export default FileUploadForm;
