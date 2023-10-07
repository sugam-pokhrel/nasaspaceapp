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
              <label className="block text-gray-600">Categories</label>
              <div className="mt-2 space-y-2">
                <label className="inline-flex items-center" key="coding">
                  <input
                    type="checkbox"
                    name="coding"
                    checked={formData.categories.includes("coding")}
                    onChange={handleCategoryChange}
                    className="mr-2 text-blue-600"
                  />
                  <span className="text-blue-800">Coding</span>
                </label>
                <label className="inline-flex items-center" key="science">
                  <input
                    type="checkbox"
                    name="science"
                    checked={formData.categories.includes("science")}
                    onChange={handleCategoryChange}
                    className="mr-2 text-green-600"
                  />
                  <span className="text-green-800">Science</span>
                </label>
                <label className="inline-flex items-center" key="environment">
                  <input
                    type="checkbox"
                    name="environment"
                    checked={formData.categories.includes("environment")}
                    onChange={handleCategoryChange}
                    className="mr-2 text-yellow-600"
                  />
                  <span className="text-yellow-800">Environment</span>
                </label>
                <label className="inline-flex items-center" key="space">
                  <input
                    type="checkbox"
                    name="space"
                    checked={formData.categories.includes("space")}
                    onChange={handleCategoryChange}
                    className="mr-2 text-indigo-600"
                  />
                  <span className="text-indigo-800">Space</span>
                </label>
                <label className="inline-flex items-center" key="moon">
                  <input
                    type="checkbox"
                    name="moon"
                    checked={formData.categories.includes("moon")}
                    onChange={handleCategoryChange}
                    className="mr-2 text-purple-600"
                  />
                  <span className="text-purple-800">Moon</span>
                </label>
                <label className="inline-flex items-center" key="planets">
                  <input
                    type="checkbox"
                    name="planets"
                    checked={formData.categories.includes("planets")}
                    onChange={handleCategoryChange}
                    className="mr-2 text-red-600"
                  />
                  <span className="text-red-800">Planets</span>
                </label>
                <label className="inline-flex items-center" key="programming">
                  <input
                    type="checkbox"
                    name="programming"
                    checked={formData.categories.includes("programming")}
                    onChange={handleCategoryChange}
                    className="mr-2 text-pink-600"
                  />
                  <span className="text-pink-800">Programming</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
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

