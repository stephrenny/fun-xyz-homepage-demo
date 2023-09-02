import React from "react";

/**
 * This component is meant to represent other elements on the website to see how the flow works on scroll
 */

export interface IActionCardProps {
  children?: React.ReactNode;
}

const FillerCard: React.FC<IActionCardProps> = ({ children }) => {
  return (
    <div className="p-5 w-screen h-screen">
      <div
        className={`w-full h-full rounded-xl flex flex-col items-center justify-center overflow-hidden relative bg-slate-600`}
      >
        {children}
      </div>
    </div>
  );
};

export default FillerCard;
