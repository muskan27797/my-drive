import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import SearchBar from "./SearchBar";

export const Navbar = () => {
    return (
      <div className="flex flex-row bg-white-500 py-4 shadow-lg">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex ">
          <h1 className="text-red text-xl font-bold flex space-x-2">
            <FontAwesomeIcon icon={faFileExport} color='orange'/>
            <span className='ml-2'>MyDrive</span>
          </h1>
        </div>
        <SearchBar/>
      </div>
    );
  };