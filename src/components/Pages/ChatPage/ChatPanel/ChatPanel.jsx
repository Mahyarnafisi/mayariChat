import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ChatPanelFooter from "./ChatPanelFooter/ChatPanelFooter";
import Styles from "./ChatPanel.module.css";
import LiveUsers from "./ChatPanelHeader/LiveUsers/LiveUsers";

function ChatPanel() {
  return (
    <div className={Styles.chatPanel}>
      <Card className="m-8 h-96 ">
        <CardHeader className="p-4">
          <LiveUsers />
        </CardHeader>
        <Divider />
        <CardBody className="bg-slate-300 h-full">
          <p>chat page</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <ChatPanelFooter />
        </CardFooter>
      </Card>
    </div>
  );
}

export default ChatPanel;
