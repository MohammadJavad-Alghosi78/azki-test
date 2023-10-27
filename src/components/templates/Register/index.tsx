import { FC } from "react";
import { IRegisterPropsType } from "./types";
import { useFormContext } from "react-hook-form";
import { StyledWrapper } from "./styled";
import { Button, Flex, TextField, Typography } from "../../atoms";
import { persianWords } from "../../../translation";
import { validationRules } from "./constants";

const Register: FC<IRegisterPropsType> = (props) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  return (
    <StyledWrapper>
      <Typography variant="heading" className="register__title">
        {persianWords.RegistrationProcess.register}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <TextField
          {...register("firstName", validationRules.firstName)}
          placeholder={persianWords.RegistrationProcess.firstName}
          value={watch("firstName")}
          onChange={(e) => setValue("firstName", e.target.value)}
          className="register__name"
          errorMessage={errors.firstName?.message?.toString()}
        />
        <TextField
          {...register("lastName", validationRules.lastName)}
          placeholder={persianWords.RegistrationProcess.lastName}
          value={watch("lastName")}
          onChange={(e) => setValue("lastName", e.target.value)}
          className="register__name"
          errorMessage={errors.lastName?.message?.toString()}
        />
      </Flex>
      <TextField
        {...register("phoneNumber", validationRules.phoneNumber)}
        placeholder={persianWords.RegistrationProcess.phoneNumber}
        value={watch("phoneNumber")}
        onChange={(e) => setValue("phoneNumber", e.target.value)}
        errorMessage={errors.phoneNumber?.message?.toString()}
      />
      <TextField
        {...register("password", validationRules.password)}
        placeholder={persianWords.RegistrationProcess.password}
        value={watch("password")}
        onChange={(e) => setValue("password", e.target.value)}
        type="password"
        errorMessage={errors.password?.message?.toString()}
      />
      <Flex justifyContent="flex-end" className="register__footer">
        <Button variant="contained" onClick={props.onSubmit}>
          {persianWords.RegistrationProcess.register}
        </Button>
      </Flex>
    </StyledWrapper>
  );
};

export default Register;
