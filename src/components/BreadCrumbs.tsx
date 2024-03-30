import React from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faRetweet, faToggleOn } from '@fortawesome/free-solid-svg-icons';

export const BreadcrumbsSection = ({navigateBackToIndex, currentPath}: {navigateBackToIndex: (index: number | null) => void, currentPath: string[]}) => {
    return (
      <div className="flex items-center justify-between px-4 py-2">
      <Breadcrumbs aria-label="breadcrumb" className="text-xlg">
      <Typography
        variant='h6'
        color="textPrimary"
        onClick={() => navigateBackToIndex(null)}
        className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
      >
        Home
      </Typography>
      {currentPath.map((dir, index) => (
        <Typography
          variant='h6'
          key={index}
          color="textPrimary"
          onClick={() => navigateBackToIndex(index + 1)}
          className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
        >
          {dir}
        </Typography>
      ))}
    </Breadcrumbs>
    <div className="flex items-center space-x-4">
        {/* Icons */}
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" onClick={()=>alert("Keep local path button is clicked!!")}>
          <FontAwesomeIcon icon={faFileImport}/>
           <span className="m-2 text-gray-600">Keep Local Path</span>
        </button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" onClick={()=>alert("Auto Sync enabled!!")}>
        <FontAwesomeIcon color="blue" icon={faToggleOn}/>
           <span className="m-2 text-gray-600">Auto Sync</span>
        </button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800" onClick={()=>alert("Reload button is clicked!!")}>
        <FontAwesomeIcon icon={faRetweet}/>
        </button>
      </div>
    </div>
    )
  }