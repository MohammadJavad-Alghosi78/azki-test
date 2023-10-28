// node_modules
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
// constants
import { defaultValues } from "./constants";
// components
import Register from ".";
// types
import { IRegisterFormData } from "./types";

const RegisterContainer = () => {
  const navigate = useNavigate();
  const methods = useForm<IRegisterFormData>({
    mode: "onChange",
    defaultValues,
  });

  const handleSubmit = (data: IRegisterFormData) => {
    // Very bad practice! => (No problem, this is fake man)
    // here a request should be sent to server and token should be stored in httpOnly cookie
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
