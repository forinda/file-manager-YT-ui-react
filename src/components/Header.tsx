import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="border-b shadow sticky top-0 p-4 bg-white z-[9999]">
      <div className="max-w-7xl mx-auto flex justify-between gap-8">
        {/* Left */}
        <div>
          <Link to={"/"}>
            File{" "}
            <span className="text-green-800 font-bold uppercase">Drive</span>
          </Link>
        </div>
        {/* Search */}
        <div className="flex-1 border max-w-sm p-1 rounded flex gap-2 items-center">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            placeholder="Search...."
            className="focus:ring-0 focus:border-none focus:outline-none flex-1"
          />
        </div>
        {/* Profile */}
        <div className="flex items-center gap-2">
            <button className="px-2 bg-blue-500 rounded text-white py-1">New folder</button>
          <img
            src="https://picsum.photos/id/237/200/300"
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
