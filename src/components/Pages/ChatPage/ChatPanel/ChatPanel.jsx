import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

function ChatPanel() {
  return (
    <div>
      <Card>
        <CardHeader>
          <h1>chat page</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>chat page</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <p>chat page</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ChatPanel;
