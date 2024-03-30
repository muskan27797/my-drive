import React from "react"
export const BackButton = ({navigateBack}: {navigateBack: () => void}) => {
    return (
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={navigateBack}>
      Back
    </button>
    )
  }