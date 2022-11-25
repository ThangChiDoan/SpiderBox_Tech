import React from "react";

interface SVGButtonProps {
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
}

const SVGButton: React.FC<SVGButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SVGButton;
