import React from "react";
interface RadioGroupButtonProps {
  label: string;
  children: JSX.Element[];
}

export const RadioGroupButton: React.FC<RadioGroupButtonProps> = ({
  label,
  children,
}) => {
  return (
    <div className="mb-6">
      <p className="block mb-4 text-base font-medium text-gray-900 dark:text-white">
        {label}
      </p>
      {children}
    </div>
  );
};
