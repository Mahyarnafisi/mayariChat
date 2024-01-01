import React from "react";
import MessageBlock from "../../../../../UI/MessageBlock/MessageBlock";

function ChatPool() {
  return (
    <div className="h-full overflow-y">
      <MessageBlock />
      <MessageBlock />
      <MessageBlock />
      <MessageBlock />
      <MessageBlock />
    </div>
  );
}

export default ChatPool;
