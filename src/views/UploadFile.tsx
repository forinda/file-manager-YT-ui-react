import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFileUpload } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function UploadFile() {
  const navigate = useNavigate();
  //   const imageFileInputRef = React.useRef<HTMLInputElement | null>(null);
  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    // handle the form data
    event.preventDefault();
  };
  return (
    <div>
      <div className="p-2 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-1 items-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
        {/* <Link
          className="text-white bg-blue-400 flex gap-2 items-center px-2 rounded-md"
          to={`/folder/${folderId}`}
        >
          <FontAwesomeIcon icon={faUpload} />
          Upload
        </Link> */}
      </div>
      <form
        className="w-full h-full p-4 flex items-center justify-center min-h-[50vh] flex-col"
        onSubmit={handleFileUpload}
      >
        <input hidden name="image" id="image" type="file" accept="" />
        <label htmlFor="image" className="w-full max-w-md">
          <div className="border-dotted border-black border rounded-xl p-4 w-full h-36 flex justify-center items-center border-spacing-4 cursor-pointer">
            <FontAwesomeIcon icon={faFileUpload} size="2x" />
          </div>
        </label>
        <div>
          <button className="p-2 border my-2 bg-blue-600 rounded text-white" type="submit">Upload file</button>
        </div>
      </form>
    </div>
  );
}
