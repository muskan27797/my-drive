import { IFile } from "../App.interface";
import { fileData } from "../mock/fileDirectory";
import { MYDRIVE_CONSTANTS } from "./my-drive.constants"

export const dirColors = (type: string) => {
    if (type === 'folder') {
        return 'orange'
    } else {
        return MYDRIVE_CONSTANTS.randomColors[Math.floor(Math.random() * MYDRIVE_CONSTANTS.randomColors.length)]
    }
}

export const getCurrentDirectory = (currentPath: string[]): Record<string, IFile> => {
    let currentDir: Record<string, any> = fileData;
    for (const dir of currentPath) {
      currentDir = currentDir[dir].children!;
    }
    return currentDir;
  };