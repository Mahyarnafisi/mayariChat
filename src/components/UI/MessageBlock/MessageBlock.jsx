import { User } from "@nextui-org/react";
import React, { useState } from "react";

function MessageBlock() {
  const [color, setColor] = useState(true);
  return (
    <div className="flex place-items-start gap-1">
      <User className="" />
      <div className={`flex flex-col bg-${color ? "gray" : "blue"}-700 p-4 rounded-large`}>
        <p className="text-white font-semibold">Lorem ipsum electus consequuntur recusandae beatae maiores corporis rem? Voluptatibus optio nihil dolorem!</p>
        <span className="text-white opacity-75 mt-2 ">01/12/2024</span>
      </div>
    </div>
  );
}

export default MessageBlock;
