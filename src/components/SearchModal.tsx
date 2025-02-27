"use client";

import { useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ y: "-100%", opacity: 0 }} // Start from top with opacity 0
      animate={{ y: 0, opacity: 1 }} // Slide down to position
      exit={{ y: "-100%", opacity: 0 }} // Slide up when closing
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="relative w-full max-w-2xl p-8 bg-black text-white rounded-lg shadow-lg">
        
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white hover:text-gray-400" onClick={onClose}>
          <FaTimes size={24} />
        </button>

        {/* Search Form */}
        <div className="modal-body flex flex-col items-center">
          <h2 className="text-2xl mb-4">Search</h2>
          <form action="#" className="w-full flex items-center border border-gray-600 rounded-lg p-3">
            <input 
              type="text" 
              placeholder="Type to search..." 
              className="w-full bg-transparent outline-none px-4 py-2 text-white"
            />
            <button type="submit" className="text-gray-400 hover:text-white p-2">
              <FaSearch size={20} />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchModal;
