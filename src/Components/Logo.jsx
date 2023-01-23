import React from "react";
import { FiZap } from "react-icons/fi";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <FiZap className="text-green-400 font-bold text-4xl" />
      <span className="text-blue-500 font-[900] text-3xl">Sociala.</span>
    </div>
  );
};

export default Logo;
