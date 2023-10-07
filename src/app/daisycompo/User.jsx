"use client"

import React, { useState } from 'react';

function ModalForm({ isOpen, onClose }) {
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
    const options = e.target.options;
    const selectedCategories = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedCategories.push(options[i].value);
      }
    }
    setFormData({ ...formData, categories: selectedCategories });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server)
    // Reset the form or close the modal after submission
    onClose();
  };

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
            <p className="text-2xl font-bold">Sign Up</p>
            <button
              onClick={onClose}
              className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
            >
              &#215;
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                onChange={handleInputChange}
                value={formData.name}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-600">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="form-input"
                placeholder="Your Country"
                onChange={handleInputChange}
                value={formData.country}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-600">
                Number
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className="form-input"
                placeholder="Phone Number"
                onChange={handleInputChange}
                value={formData.number}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categories" className="block text-gray-600">
                Categories
              </label>
              <select
                id="categories"
                name="categories"
                className="form-select"
                multiple
                onChange={handleCategoryChange}
                value={formData.categories}
                required
              >
                <option value="coding">Coding</option>
                <option value="science">Science</option>
                <option value="trees">Trees</option>
                <option value="environment">Environment</option>
                <option value="js">JavaScript</option>
                <option value="nodejs">Node.js</option>
                <option value="typescript">TypeScript</option>
              </select>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
