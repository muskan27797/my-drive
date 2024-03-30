import { useState } from "react";

export const useFolder = () => {
    const [currentPath, setCurrentPath] = useState<string[]>([]);

    const navigateToFolder = (folderName: string) => {
      console.log(currentPath,folderName)
      setCurrentPath([...currentPath, folderName]);
    };
  
    const navigateBack = () => {
      setCurrentPath(currentPath.slice(0, -1));
      console.log(currentPath)
    };
  
    const navigateBackToIndex = (index: number | null) => {
      console.log(index);
      if (index === null) setCurrentPath([])
      else {
      setCurrentPath(currentPath.slice(0, index))}
    } 

    return {
        currentPath,
        navigateBack,
        navigateBackToIndex,
        navigateToFolder
    }
}