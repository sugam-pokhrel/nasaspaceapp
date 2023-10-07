"use client"
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
function ModalForm({ isOpen, onClose }) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    number: '',
    categories: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    const updatedCategories = [...formData.categories];

    if (checked) {
      updatedCategories.push(name);
    } else {
      const index = updatedCategories.indexOf(name);
      if (index !== -1) {
        updatedCategories.splice(index, 1);
      }
    }

    setFormData({ ...formData, categories: updatedCategories });
  };

  const handleSubmit = async(e) => {
    console.log(formData)
    e.preventDefault();
    if(!session){
      alert('cannot perform not authenticated')
      return;
    }
    
  try{
    await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

  }catch(err){
    alert("Err")
  }

    
 console.log(formData)
    onClose();
  };
  
  const userInterests = [
    'Artificial Intelligence',
    'Web development',
    'Mobile development',
    'Data Science',
    'Science',
    'Techonologies',
    'Mathematics',

  ];
useEffect(()=>{
  fetchfirst()
},[])
  let fetchfirst=async()=>{
  let data=await fetch('/api/user', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  data=await data.json()
  console.log(data)
  }


  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-black mt-4 underline text-cen">Sign Up</p>
            <button
              onClick={onClose}
              className="modal-close px-3 py-1 rounded-fulltransition-all focus:outline-none focus:bg-gray-300"
            >
              &#215;
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input w-full p-2  rounded  mt-0"
                placeholder="John Doe"
                onChange={handleInputChange}
                value={formData.name}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-black">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="form-input w-full p-2 border-gray-300 rounded placeholder-gray-500  mt-0"
                placeholder="Your Country"
                onChange={handleInputChange}
                value={formData.country}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-black">
              Phone Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className="form-input w-full p-2 border-gray-300 rounded placeholder-gray-500  mt-0"
                placeholder="Phone Number"
                onChange={handleInputChange}
                value={formData.number}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">Interest</label>
              <div className="mt-2 space-y-2">
              {userInterests.map((interest) => (
                  <label
                    key={interest}
                    className="inline-flex items-center"
                  >
                      <input
                      type="checkbox"
                      name={interest}
                      checked={formData.categories.includes(interest)}
                      onChange={handleCategoryChange}
                      className="mr-2 text-black"
                    />
                    <span className="text-green-800 ">{interest}</span>
                  </label>
                ))}
                {/* ... Category checkboxes here ... */}
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-4 py-2 updateBtn text-white font-semibold rounded"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
