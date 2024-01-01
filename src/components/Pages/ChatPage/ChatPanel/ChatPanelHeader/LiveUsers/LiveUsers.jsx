import { User } from "@nextui-org/react";
import React from "react";

function LiveUsers() {
  const randomAvatar = () => {
    const ranNum = Math.floor(Math.random() * 100);
    return ranNum;
  };
  return (
    <section className="flex flex-col gap-2 ">
      <div>
        <h2 className="font-semibold">Online Users:</h2>
      </div>
      <div className="flex gap-4">
        <User name="YamunNu" description="online" className="" avatarProps={{ src: `https://i.pravatar.cc/${randomAvatar()}` }} />
        <User name="Xian" description="online" avatarProps={{ src: `https://i.pravatar.cc/${randomAvatar()}` }} />
        <User name="Tenuity" description="online" avatarProps={{ src: `https://i.pravatar.cc/${randomAvatar()}` }} />
      </div>
    </section>
  );
}

export default LiveUsers;
