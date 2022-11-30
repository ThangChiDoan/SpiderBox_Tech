import React from "react";

interface ButtonSubmitProps {
  content: string;
  form: string;
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ content, form }) => {
  return (
    <button
      type="submit"
      form={form}
      className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {content}
    </button>
  );
};

export default ButtonSubmit;
