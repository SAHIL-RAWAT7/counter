import React from "react";
import CounterCard from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition">
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>
      <CounterCard />
    </div>
  );
}

export default App;
