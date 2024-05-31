import React, { useState } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";
import { DEFAULT_CARDS } from '../utils/constants';

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-6">
      <Column title="TODO" column="todo" headingColor="text-yellow-200" cards={cards} setCards={setCards} />
      <Column title="IN PROGRESS" column="doing" headingColor="text-blue-200" cards={cards} setCards={setCards} />
      <Column title="COMPLETED" column="done" headingColor="text-emerald-200" cards={cards} setCards={setCards} />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

export default Board;
