import React from "react";

const Skeleton = () => {
  return (
    <div className=" text-black flex flex-row gap-4 animate-pulse my-4">
      <div className=" h-20 w-20 bg-gray-200 rounded-md" />
      <div className=" flex flex-col gap-2">
        <span className=" h-3 w-40 rounded-full bg-gray-200" />
        <span className=" h-3 w-40 rounded-full bg-gray-200" />
        <span className=" h-3 w-40 rounded-full bg-gray-200" />
      </div>
    </div>
  );
};

export default Skeleton;
