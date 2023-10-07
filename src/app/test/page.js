"use client"
import React, { useState } from 'react';
import ModalForm from '../daisycompo/User';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
