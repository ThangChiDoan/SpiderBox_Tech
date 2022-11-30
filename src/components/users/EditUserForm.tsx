import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getUsersRequest,
  IPatchUsersRequest,
  patchUsersRequest,
} from "api/users";
import Input from "components/form/Input";
import { RadioButton } from "components/form/RadioButton";
import { RadioGroupButton } from "components/form/RadioGroupButton";
import { useHomePageStore } from "context/pages/HomePageContext";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditUserForm = () => {
  const { userSelected, editModal } = useHomePageStore();

  const navigate = useNavigate();

  const { first_name, last_name, email, gender } = userSelected;

  const form = useForm<IPatchUsersRequest>({
    defaultValues: {
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
    },
    mode: "onChange",
  });

  const { handleSubmit } = form;

  const { refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersRequest,
  });

  const { mutate } = useMutation({
    mutationFn: patchUsersRequest,
    onSuccess: () => {
      toast.success("Edit success !");
      editModal.setIsShowModal();
      navigate("/");
      refetch();
    },
    onError: () => {
      toast.error("Edit fail !");
    },
  });

  const onSubmit: SubmitHandler<IPatchUsersRequest> = (data) => {
    const dataForm = {
      ...data,
      image: "http://dummyimage.com/151x100.png/5fa2dd/ffffff",
      id: userSelected.id,
    };
    mutate(dataForm);
  };

  return (
    <div className="container w-full text-black">
      <FormProvider {...form}>
        <form
          id="edit-user-form"
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
            htmlFor="last_name"
            id="last_name"
            placeholder="Enter last name"
            registerName="last_name"
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

export default EditUserForm;
