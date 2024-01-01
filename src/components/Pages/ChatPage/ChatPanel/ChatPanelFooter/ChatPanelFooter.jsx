import React from "react";
import Styles from "./ChatPanelFooter.module.css";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import WallpaperOutlinedIcon from "@mui/icons-material/WallpaperOutlined";

function ChatPanelFooter() {
  return (
    <div className={Styles.chatPanelFooter}>
      <Dropdown>
        <DropdownTrigger>
          <Button size="lg" color="primary" className="rounded-md" isIconOnly endContent={<AddRoundedIcon />}></Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="addPicture" description="Share and image to chat room" startContent={<WallpaperOutlinedIcon />}>
            <h2 className="font-bold"> Add a picture</h2>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Input placeholder="write your message" radius="md" variant="bordered" size="md" />
    </div>
  );
}

export default ChatPanelFooter;
