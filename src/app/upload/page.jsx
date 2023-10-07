"use client";
import React, { useState } from 'react';
import Navbar from "../daisycompo/Navbar/Navbar"
function FileUploadForm() {
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

    // Here, you can handle the form submission, including uploading the file
    // to your server if needed. You can use libraries like Axios to send
    // the form data to your server.

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Selected File:', selectedFile);
  };

  return (
<>
    <Navbar/>
  
 
      <h2 className='text-3xl text-white ' >Upload your files</h2>
      <div className='fileUploadForm'> 
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
    </div>
    </> 
  );
}

export default FileUploadForm;
