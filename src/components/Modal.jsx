import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className=''>
    <motion.div
      className="fixed inset-0 bg-[#000300] bg-opacity-75 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-[#101010] rounded-lg p-6 shadow-lg w-full max-w-md text-white mx-8">
        <h2 className="text-xl font-semibold mb-4 text-pink-600">{title}</h2>
        <p className="text-white mb-6 text-sm ">{message}</p>
        <div className="text-right">
          <button
            onClick={onClose}
            className="bg-pink-700 text-white py-1.5 px-4 mx-1 rounded hover:bg-pink-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
    </div>
  );
};
export default Modal;