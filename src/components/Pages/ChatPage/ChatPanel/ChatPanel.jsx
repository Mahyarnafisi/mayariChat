import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import Styles from "./ChatPanel.module.css";
import ChatPool from "./ChatPanelBody/ChatPool/ChatPool";
import ChatPanelFooter from "./ChatPanelFooter/ChatPanelFooter";
import LiveUsers from "./ChatPanelHeader/LiveUsers/LiveUsers";

function ChatPanel() {
  return (
    <div className={Styles.chatPanel}>
      <Card className="m-8 h-full rounded-lg ">
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
