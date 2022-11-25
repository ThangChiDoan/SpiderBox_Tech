import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
// components
import Input from "components/form/Input";
import { RadioButton } from "components/form/RadioButton";
import { RadioGroupButton } from "components/form/RadioGroupButton";
import { useMutation } from "@tanstack/react-query";
import { postUsersRequest } from "api/users";
import { toast } from "react-toastify";

export interface ICreateUserForm {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  image: string;
}

export const CreateUserForm: React.FC = () => {
  const form = useForm<ICreateUserForm>();

  const { handleSubmit } = form;

  const [dataForm, setDataForm] = useState({});

  const { mutate } = useMutation({
    mutationFn: postUsersRequest,
    onSuccess: (data) => {
      console.log("success", data);
      toast.success("Add user success!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    onError: (error) => {
      console.log("fail", error);
      toast.success("Add user fail!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  const onSubmit: SubmitHandler<ICreateUserForm> = (data) => {
    const dataForm = {
      ...data,
      image: "http://dummyimage.com/151x100.png/5fa2dd/ffffff",
    };
    setDataForm(dataForm);
    mutate(dataForm);
    alert(JSON.stringify(dataForm));
  };

  if (!dataForm) {
    return null;
  }

  return (
    <div className="container w-full text-black">
      <FormProvider {...form}>
        <form
          id="create-user-form"
          className="mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* TODO: first name */}
          <Input
            label="First name"
            type="string"
            htmlFor="first_name"
            id="first_name"
            placeholder="Enter first name"
            registerName="first_name"
            validationRules={{ required: true }}
            validationContent="This field is required!"
          />
          {/* TODO: Last name */}
          <Input
            label="Last name"
            type="string"
            htmlFor="last_time"
            id="last_time"
            placeholder="Enter last name"
            registerName="last_time"
            validationRules={{ required: true }}
            validationContent="This field is required!"
          />

          {/* TODO: Email */}
          <Input
            label="Email"
            type="email"
            htmlFor="email"
            id="email"
            placeholder="Enter email"
            registerName="email"
            validationRules={{ required: true }}
            validationContent="This field is required!"
          />

          <RadioGroupButton label="Gender">
            <RadioButton
              id="male-radio"
              value="Male"
              content="Male"
              registerName="gender"
            />
            <RadioButton
              id="female-radio"
              value="Female"
              content="Female"
              registerName="gender"
            />
          </RadioGroupButton>
        </form>
      </FormProvider>
    </div>
  );
};
