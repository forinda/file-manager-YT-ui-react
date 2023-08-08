import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUpload } from "@fortawesome/free-solid-svg-icons";
import SingleFolderFileCard from "../components/SingleFolderFileCard";
export default function SingleFolder() {
  const navigate = useNavigate();
  const { folderId } = useParams() as { folderId: string };
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
        <Link
          className="text-white bg-blue-400 flex gap-2 items-center px-2 rounded-md"
          to={`/folder/${folderId}/upload`}
        >
          <FontAwesomeIcon icon={faUpload} />
          Upload
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr)] gap-2 p-2">
        {[
          {
            name: "File 1",
            id: "1",
            type: "image",
            url: "https://picsum.photos/seed/picsum/200/300",
          },
        ].map((asset) => (
          <SingleFolderFileCard {...asset} />
        ))}
      </div>
    </div>
  );
}
