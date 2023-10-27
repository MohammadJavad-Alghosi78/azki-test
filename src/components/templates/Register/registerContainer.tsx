import { FormProvider, useForm } from "react-hook-form";
import { defaultValues } from "./constants";
import Register from ".";
import { IRegisterFormData } from "./types";
import { useNavigate } from "react-router-dom";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const methods = useForm<IRegisterFormData>({
    mode: "onChange",
    defaultValues,
  });

  const handleSubmit = (data: IRegisterFormData) => {
    // Very bad practice! => (No problem, this is fake man)
    localStorage.setItem("azki-fake-register", JSON.stringify(data));
    navigate("/buy-insurance");
  };

  return (
    <FormProvider {...methods}>
      <Register onSubmit={methods.handleSubmit(handleSubmit)} />
    </FormProvider>
  );
};

export default RegisterContainer;
