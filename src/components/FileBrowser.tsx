import React from 'react';
import { useFolder } from '../hooks/useFolder';
import {  getCurrentDirectory } from '../utility/my-drive.helper';
import { BreadcrumbsSection } from './BreadCrumbs';
import { FileRowData } from './FileRowData';
import { EmptyData } from './EmptyData';
import { BackButton } from './BackButton';
import { MYDRIVE_CONSTANTS } from '../utility/my-drive.constants';

export const FileBrowser = () => {

  const {currentPath, navigateBack, navigateBackToIndex, navigateToFolder} = useFolder();

  const directories = Object.keys(getCurrentDirectory(currentPath));
  const isDirEmpty = directories.length === 0;

  return (
    <div className='mx-10 mt-4'>
      <BreadcrumbsSection navigateBackToIndex={navigateBackToIndex} currentPath={currentPath}/>
      <div className="mt-4">
        <div className="bg-white shadow-lg rounded-lg p-4 border border-black flex flex-col justify-between">
          <table className="table-auto" >
            <thead>
              <tr>
                {MYDRIVE_CONSTANTS.tableHeaders.map((item, index) => (<th key={index} className="px-4 py-6 text-xl border-b-2">{item}</th>))}
              </tr>
            </thead>
            <tbody>
              {!isDirEmpty ? directories.map((itemName, index) => (
                <React.Fragment key={index}>
                  <FileRowData name={itemName} info={getCurrentDirectory(currentPath)[itemName]} navigateToFolder={navigateToFolder}/>
                </React.Fragment>
              )): null}
            </tbody>
          </table>
          {isDirEmpty ?<EmptyData /> : null}
        </div>
      </div>
      {currentPath.length > 0 && <BackButton navigateBack={navigateBack}/> }
    </div>
  );
};

