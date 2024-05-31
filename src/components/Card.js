import React from "react";
import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";

const Card = ({ id, title, description, column, completedAt, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column, description })}
        className="cursor-grab mb-2 rounded-lg border border-gray-500 bg-gray-600 p-3.5 active:cursor-grabbing"
      >
        {/* <p className="text-md font-medium text-neutral-100">{title}</p> */}
        <h4 className="text-md font-medium text-neutral-100">{title}</h4>
        <p>{description}</p>
        {column === "completed" && (
          <p className="text-xs text-gray-400">
            Completed at: {completedAt}
          </p>
        )}
      </motion.div>
    </>
  );
};

export default Card;
