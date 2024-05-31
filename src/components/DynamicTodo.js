import React from "react";
import Board from "./Board";

export const DynamicTodo = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="h-4/5 p-6 rounded-lg bg-gray-800 shadow-xl">
        <div className="text-3xl font-bold text-center mb-4">Dynamic To-Do List Application</div>
        <Board />
      </div>
    </div>
  );
};