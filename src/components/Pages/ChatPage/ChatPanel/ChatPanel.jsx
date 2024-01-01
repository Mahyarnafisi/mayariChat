import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import ChatPanelFooter from "./ChatPanelFooter/ChatPanelFooter";

function ChatPanel() {
  return (
    <div>
      <Card className="m-8 h-96 ">
        <CardHeader>
          <h1>chat page</h1>
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
