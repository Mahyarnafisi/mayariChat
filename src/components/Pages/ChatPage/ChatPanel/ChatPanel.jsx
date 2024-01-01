import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import ChatPanelFooter from "./ChatPanelFooter/ChatPanelFooter";
import Styles from "./ChatPanel.module.css";
import LiveUsers from "./ChatPanelHeader/LiveUsers/LiveUsers";
import ChatPool from "./ChatPanelBody/ChatPool/ChatPool";

function ChatPanel() {
  return (
    <div className={Styles.chatPanel}>
      <Card className="m-8 h-full ">
        <CardHeader>
          <LiveUsers />
        </CardHeader>
        <Divider />
        <CardBody className="bg-slate-200 ">
          <ChatPool />
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
