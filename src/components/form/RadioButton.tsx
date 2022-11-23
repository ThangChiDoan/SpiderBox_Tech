import React from "react";
import { useFormContext } from "react-hook-form";
// components
import { Alert } from "components/common/Alert";

interface RadioButtonProps {
  id: string;
  value: string;
  content: string;
  registerName: string;
  validationContent?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value,
  content,
  registerName,
  validationContent = "",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        value={value}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...register(registerName)}
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-normal text-gray-700 dark:text-gray-300"
      >
        {content}
      </label>
      {errors[id] && <Alert content={validationContent} />}
    </div>
  );
};
