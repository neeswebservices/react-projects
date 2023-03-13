import React, { useRef, useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { CustomModal } from "../components/common/CustomModal";
import { ImagePreview } from "../components/FileHandling/ImagePreview";

export const FileHandling = () => {
  const [files, setFiles] = useState([]);
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    console.log(files);
    event.preventDefault();
  };

  const codeForThisProject = {
    title:"File Uploading and Preview",
    data:[{
        fileName:"FileHandling.jsx",
        code:`import React, { useRef, useState } from "react";
        import { AiFillFileAdd } from "react-icons/ai";
        import { CustomModal } from "../components/common/CustomModal";
        import { ImagePreview } from "../components/FileHandling/ImagePreview";
        
        export const FileHandling = () => {
          const [files, setFiles] = useState([]);
          const inputRef = useRef(null);
          const handleSubmit = (event) => {
            console.log(files);
            event.preventDefault();
          };
          return (
            <div className="w-full flex justify-center h-screen items-center">
              <div className="previewWrapper">
                <h2 className="text-2xl font-bold mb-4">File Upload Example</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                  <div
                    className="fileuploader w-[200px] h-[100px] bg-slate-300 flex items-center justify-center flex-col rounded-md cursor-pointer"
                    onClick={(e) => {
                      inputRef.current.click();
                    }}
                  >
                    <AiFillFileAdd size={30} />
                    <p>Add Photos</p>
                  </div>
                  <input
                    ref={inputRef}
                    hidden
                    type="file"
                    multiple
                    onChange={(e) => {
                      setFiles([...e.target.files]);
                    }}
                  />
        
                  <div className="image-preview mt-2 flex gap-2">
                    {files?.map((item, index) => (
                      <ImagePreview
                        key={index}
                        setFiles={setFiles}
                        item={item}
                        index={index}
                      />
                    ))}
                  </div>
                  <button className="bg-red-400 text-white px-5 py-2   rounded-md font-bold mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          );
        };
        `
      },{
        fileName:"ImagePreview.jsx",
        code:`import React from "react";
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
        `
      }]
  }
  return (
    <div className="w-full flex justify-center h-screen items-center">
       <div className="absolute bottom-10 right-10">
       <CustomModal projectCode={codeForThisProject}/>
       </div>
      <div className="previewWrapper">
        <h2 className="text-2xl font-bold mb-4">File Upload Example</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div
            className="fileuploader w-[200px] h-[100px] bg-slate-300 flex items-center justify-center flex-col rounded-md cursor-pointer"
            onClick={(e) => {
              inputRef.current.click();
            }}
          >
            <AiFillFileAdd size={30} />
            <p>Add Photos</p>
          </div>
          <input
            ref={inputRef}
            hidden
            type="file"
            multiple
            onChange={(e) => {
              setFiles([...e.target.files]);
            }}
          />

          <div className="image-preview mt-2 flex gap-2">
            {files?.map((item, index) => (
              <ImagePreview
                key={index}
                setFiles={setFiles}
                item={item}
                index={index}
              />
            ))}
          </div>
          <button className="bg-red-400 text-white px-5 py-2   rounded-md font-bold mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
