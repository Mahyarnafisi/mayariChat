import { Spinner } from "@nextui-org/react";
import React from "react";

function Loading() {
  return (
    <div className="w-full z-50 h-screen absolute bg-transparent bg-stone-900 flex flex-col align-middle justify-center">
      <Spinner color="secondary" size="lg" label="Loading..." labelColor="secondary" />
    </div>
  );
}

export default Loading;
