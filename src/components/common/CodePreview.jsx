import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "react-toastify";
export const CodePreview = ({ code, fileName }) => {
  return (
    <div className="w-full">
      <p className="text-lg font-medium">
        Create a file named: <span className="font-bold">{fileName}</span>
      </p>
      <div className="copy flex justify-end cursor-pointer">
        <CopyToClipboard text={code} onCopy={() => {
            toast.success("Copied to clipboard")
        }}>
          <span className="bg-green-400 p-3 font-bold">Copy to clipboard</span>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter language={"jsx"} style={atomDark}>
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};
