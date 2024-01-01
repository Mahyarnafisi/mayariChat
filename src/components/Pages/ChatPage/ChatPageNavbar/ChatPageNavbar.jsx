import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import { useNavigate } from "react-router-dom";

function ChatPageNavbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full">
      <Navbar className="w-full border-1 border-gray-700 bg-transparent">
        <NavbarContent className="">
          <NavbarItem>
            <h1 className="text-white font-mono font-black text-xl">
              <ViewInArOutlinedIcon /> | MayariChat
            </h1>
          </NavbarItem>
          <NavbarItem>
            <Button color="danger" isIconOnly onClick={() => navigate("../login")}>
              <CloseRoundedIcon />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </nav>
  );
}

export default ChatPageNavbar;
