import { FormProvider, useForm } from "react-hook-form";
import { defaultValues } from "./constants";
import Register from ".";
import { IRegisterFormData } from "./types";

const RegisterContainer = () => {
  const methods = useForm<IRegisterFormData>({
    mode: "onChange",
    defaultValues,
  });
  // handleSubmitForm
  const handleSubmit = (data: IRegisterFormData) => {
    console.log("Register form data: ", data);
  };
  return (
    <FormProvider {...methods}>
      <Register onSubmit={methods.handleSubmit(handleSubmit)} />
    </FormProvider>
  );
};

export default RegisterContainer;
