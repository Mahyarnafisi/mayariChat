import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import { User } from "@nextui-org/react";
import React from "react";

function MessageBlock() {
  return (
    <div className="flex place-items-start gap-1 mb-2">
      <User className="" />
      <div className={`flex flex-col bg-blue-100 p-4 rounded-large`}>
        <p className="text-blue-900 font-semibold">Lorem ipsum electus consequuntur recusandae em!</p>
        <span className="text-blue-900 opacity-65 mt-2 flex align-middle">
          <ScheduleRoundedIcon className="scale-85 " />
          01/12/2024
        </span>
      </div>
    </div>
  );
}

export default MessageBlock;
