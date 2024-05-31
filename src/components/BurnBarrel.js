import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
    setAnimating(true);
  };

  const handleDragLeave = () => {
    setActive(false);
    setTimeout(() => {
      setAnimating(false);
    }, 500); 
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((prev) => prev.filter((c) => c.id !== cardId));
    setActive(false);
    setAnimating(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`grid mt-16 h-5/6 w-16 shrink-0 place-content-center rounded border text-2xl ${active
        ? "border-red-800 bg-red-800/20 text-red-500"
        : "border-neutral-500 bg-red-100 text-red-400"
      }`}
    >
      {animating ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

export default BurnBarrel;
