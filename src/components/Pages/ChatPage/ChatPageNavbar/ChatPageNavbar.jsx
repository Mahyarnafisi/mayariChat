import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function ChatPageNavbar() {
  return (
    <nav className="w-full">
      <Navbar maxWidth="full" className="border-b- border-gray-800 bg-transparent">
        <NavbarContent>
          <NavbarItem>
            <h1 className="text-white">Mayari ChatRoom</h1>
          </NavbarItem>
        </NavbarContent>
        <NavbarItem>
          <Button color="danger" isIconOnly>
            <CloseRoundedIcon />
          </Button>
        </NavbarItem>
      </Navbar>
    </nav>
  );
}

export default ChatPageNavbar;
