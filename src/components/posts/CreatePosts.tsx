import { Alert } from "components/common/Alert";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ICreatePost {
  title: string;
  body: string;
  userId: number;
}

export const CreatePosts: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreatePost>();

  const [dataForm, setDataForm] = useState({});

  const onSubmit: SubmitHandler<ICreatePost> = (data) => {
    setDataForm(data);
  };

  console.log(dataForm, Object.keys(dataForm).length);

  return (
    <div className="container w-full text-black">
      {Object.keys(dataForm).length && <div>{JSON.stringify(dataForm)}</div>}
      <form
        id="create-post-form"
        className="mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* TODO: title */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:"
          >
            Title
          </label>
          <input
            type="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter title"
            {...register("title", { required: true })}
          />
          {errors.title && <Alert content="This field is required!" />}
        </div>

        {/* TODO: Body */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:"
          >
            Body
          </label>
          <textarea
            id="body"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            {...register("body")}
          />
        </div>

        {/* TODO: UserId */}
        <div className="mb-6">
          <label
            htmlFor="userId"
            className="block mb-2 text-sm font-medium text-gray-900 dark:"
          >
            User id
          </label>
          <select
            id="userId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark: dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("userId")}
          >
            <option selected>Choose user id</option>
            <option value={1}>United States</option>
            <option value={2}>Canada</option>
            <option value={3}>France</option>
            <option value={4}>Germany</option>
          </select>
        </div>
      </form>
    </div>
  );
};
