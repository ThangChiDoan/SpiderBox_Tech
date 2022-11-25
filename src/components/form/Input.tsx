import React from "react";
import { useFormContext } from "react-hook-form";
import { Alert } from "../common/Alert";

interface InputProps {
  label: string;
  type: string;
  htmlFor: string;
  id: string;
  placeholder?: string;
  registerName: string;
  validationRules: Partial<any>;
  validationContent: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  htmlFor,
  id,
  placeholder = "",
  registerName,
  validationRules,
  validationContent,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-6">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-base font-medium text-gray-900 dark:"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...register(registerName, validationRules)}
      />
      {errors[id] && <Alert content={validationContent} />}
    </div>
  );
};

export default Input;
