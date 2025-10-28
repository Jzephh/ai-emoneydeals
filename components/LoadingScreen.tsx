"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        backgroundImage: "url('/background-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Animated Logo/Brand */}
        <motion.div 
          className="relative mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Pulse ring - outer */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[var(--color-brand-purple)]"
            style={{ margin: '-8px' }}
            animate={{ 
              scale: [1, 1.5],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          {/* Inner pulsing dot */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[var(--color-brand-purple)] opacity-20"
            style={{ margin: '-4px' }}
            animate={{ 
              scale: [1, 1.2],
              opacity: [0.2, 0.05]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Logo circle */}
          <div className="relative h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
            <img 
              src="/logo.jpeg" 
              alt="eMoney Deals Logo" 
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">
            eMoney <span className="text-[var(--color-brand-purple)]">Free Trial</span>
          </h1>
          <p className="text-gray-400 text-sm mb-8 text-center font-body">
            Getting ready for your free trial...
          </p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div 
          className="flex gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-purple)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-purple)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-[var(--color-brand-purple)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 256 }}
          transition={{ delay: 0.6 }}
          className="relative w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-brand-purple)] via-purple-500 to-[var(--color-brand-purple)]"
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "100%", "0%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

