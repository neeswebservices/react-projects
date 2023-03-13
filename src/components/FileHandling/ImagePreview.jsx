import React from "react";
import { MdCancel } from "react-icons/md";

export const ImagePreview = ({ item, index, setFiles }) => {
  return (
    <div className="image-preview relative h-[100px] w-[100px]">
      <img
        src={URL.createObjectURL(item)}
        alt="files"
        className="w-[100%] h-[100%]"
      />
      <MdCancel
        color="red"
        size={20}
        className="absolute top-0 right-0 cursor-pointer"
        onClick={() => {
          setFiles((prev) => prev.filter((item, i) => i !== index));
        }}
      />
    </div>
  );
};
