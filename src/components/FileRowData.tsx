import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { dirColors } from "../utility/my-drive.helper";
import { IFile } from "../App.interface";
import { faFile, faFolder } from "@fortawesome/free-solid-svg-icons";

export const FileRowData = ({name, info, navigateToFolder}: {name: string, info: IFile, navigateToFolder: (name: string) => void}) => {
    const { type, size, modifiedDate } = info;
    return (
      <tr>
        <td className="cursor-pointer px-4 py-2 text-lg border-b-2" onClick={() => {
            if (type === 'folder') {
                navigateToFolder(name)
            }
        }}><FontAwesomeIcon icon={type ==='folder'? faFolder: faFile} color={dirColors(type)}/><span className='ml-2'>{name}</span></td>
        <td className="px-4 py-2 text-lg border-b-2">{type}</td>
        <td className="px-4 py-2 text-lg border-b-2">{size ?? "-"}</td>
        <td className="px-4 py-2 text-lg border-b-2">{modifiedDate}</td>
      </tr>
    );
}