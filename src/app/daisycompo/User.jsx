
import React from 'react'
import React, { useState } from 'react';
import { Input, Tag, Select } from 'daisyui/react';

const User = () => {
    const [tags, setTags] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      country: '',
      number: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleTagSelect = (selectedTags) => {
      setTags(selectedTags);
    };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-600">
              Country
            </label>
            <Input
              type="text"
              id="country"
              name="country"
              placeholder="Your Country"
              onChange={handleInputChange}
              value={formData.country}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-600">
              Number
            </label>
            <Input
              type="text"
              id="number"
              name="number"
              placeholder="Phone Number"
              onChange={handleInputChange}
              value={formData.number}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categories" className="block text-gray-600">
              Categories
            </label>
            <Select
              id="categories"
              name="categories"
              multiple
              onChange={handleTagSelect}
              placeholder="Select Categories"
              className="mt-2"
            >
              <Tag value="coding">Coding</Tag>
              <Tag value="science">Science</Tag>
              <Tag value="trees">Trees</Tag>
              <Tag value="environment">Environment</Tag>
              <Tag value="js">JavaScript</Tag>
              <Tag value="nodejs">Node.js</Tag>
              <Tag value="typescript">TypeScript</Tag>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign Up
            </button>
            <a href="#" className="text-gray-600 hover:underline">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    );
}

export default User