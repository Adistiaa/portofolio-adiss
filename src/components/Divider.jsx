import { motion } from 'framer-motion';

const Divider = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative my-16 flex items-center justify-center w-full"
    >
      {/* Horizontal */}
      <div className="h-[2px] bg-gray-400 w-full"></div>

      {/* Vertical center */}
      <div className="absolute h-16 w-[2px] bg-gray-400"></div>

      {/* Circle glow */}
      <div className="absolute flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-600 to-gray-400 border-4 border-white shadow-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute w-8 h-8 rounded-full bg-gray-500 opacity-20 blur-sm"
        />
      </div>

      {/* Decorative */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute left-0 top-0 h-[2px] bg-gradient-to-r from-white to-gray-400 w-1/4"
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute right-0 top-0 h-[2px] bg-gradient-to-l from-white to-gray-400 w-1/4"
      />
    </motion.div>
  );
};

export default Divider;
