import React from "react";

type Props = {
  type: "image" | "audio" | "video";
  name: string;
  id?: string | number;
  url: string;
};

export default function SingleFolderFileCard({ name, type, url }: Props) {
  return (
    <div className="w-full  overflow-hidden rounded border max-w-[18rem] h-60">
      <div className="w-full h-3/4">
        {type === "image" ? (
          <img src={url} className="w-full h-full object-cover" alt={name} />
        ) : type === "video" ? (
          <video src={url} className="" />
        ) : type === "audio" ? (
          <audio src={url} className="" />
        ) : (
          <div>
            <p>Unknown file format</p>
          </div>
        )}
      </div>
      <div className="p-2">
        <p>{name}</p>
      </div>
    </div>
  );
}
