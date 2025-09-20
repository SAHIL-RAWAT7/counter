import React, { useState } from "react";
import { motion } from "framer-motion";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 text-center w-96"
    >
      <h1 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">
        Professional Counter
      </h1>

      <motion.p
        key={count}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-6xl font-bold mb-8 text-blue-600 dark:text-yellow-400"
      >
        {count}
      </motion.p>

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow hover:opacity-90 active:scale-95 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow hover:opacity-90 active:scale-95 transition"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold shadow hover:opacity-90 active:scale-95 transition"
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
}

export default Counter;
