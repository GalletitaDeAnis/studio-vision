// components/WhatsAppButton.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
    const phone = "59172238937";    // <-- Tu número con código país
  const [showTooltip, setShowTooltip] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open(`https://wa.me/${phone}`, "_blank");
    setTimeout(() => setClicked(false), 1000);
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={handleClick}
        className="relative cursor-pointer"
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition duration-300 shadow-2xl group">
          <FaWhatsapp className="text-3xl text-white drop-shadow animate-pulse" />
          <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-30" />
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: -20 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-12 right-0 bg-green-800 text-white text-xs px-3 py-1 rounded-full shadow-lg"
            >
              ¡Escríbenos ahora!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mini Chatbox on Click */}
        <AnimatePresence>
          {clicked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute -left-72 bottom-0 w-64 p-4 bg-white text-black rounded-xl shadow-xl z-50"
            >
              <h4 className="text-sm font-bold mb-2">¡Hola! 👋</h4>
              <p className="text-xs text-gray-600">
                ¿En qué podemos ayudarte? Da clic en el botón verde para escribirnos directamente por WhatsApp.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
