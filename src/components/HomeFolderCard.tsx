import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type Prop = {
  id: string;
};
export default function HomeFolderCard({ id }: Prop) {
  return (
    <div className="border rounded hover:shadow-sm">
      <div>
        <FontAwesomeIcon icon={faFolder} className="w-full h-10" />
      </div>
      <hr />
      <div className="p-1 text-[12px]">
        <p>New folder</p>
        <Link to={"/folder/" + id} className="text-blue-600">
          Open
        </Link>
      </div>
    </div>
  );
}
