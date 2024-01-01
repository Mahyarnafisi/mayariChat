import React from "react";
import Styles from "./ChatPage.module.css";
import ChatPanel from "./ChatPanel/CHatPanel";
import ChatPageNavbar from "./ChatPageNavbar/ChatPageNavbar";

function ChatPage() {
  return (
    <div className={Styles.chatPage}>
      <ChatPageNavbar />
      <ChatPanel />
    </div>
  );
}

export default ChatPage;
