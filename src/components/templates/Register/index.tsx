// node_modules
import { FC } from "react";
import { useFormContext } from "react-hook-form";
// components
import { Button, Flex, TextField, Typography } from "../../atoms";
// types
import { IRegisterPropsType } from "./types";
// constants
import { validationRules } from "./constants";
// translations
import { persianWords } from "../../../translation";
// styles
import { StyledWrapper } from "./styled";

const Register: FC<IRegisterPropsType> = (props) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const {
    firstName: firstNameValidation,
    lastName: lastNameValidation,
    phoneNumber: phoneNumberValidation,
    password: passwordValidation,
  } = validationRules;

  return (
    <StyledWrapper>
      <Typography variant="heading" className="register__title">
        {persianWords.RegistrationProcess.register}
      </Typography>
      <Flex justifycontent="space-between" smgap="36px">
        <TextField
          {...register("lastName", firstNameValidation)}
          placeholder={persianWords.RegistrationProcess.firstName}
          value={watch("firstName")}
          onChange={(e) => setValue("firstName", e.target.value)}
          className="register__name"
          errormessage={errors.firstName?.message?.toString()}
        />
        <TextField
          {...register("lastName", lastNameValidation)}
          placeholder={persianWords.RegistrationProcess.lastName}
          value={watch("lastName")}
          onChange={(e) => setValue("lastName", e.target.value)}
          className="register__name"
          errormessage={errors.lastName?.message?.toString()}
        />
      </Flex>
      <TextField
        {...register("phoneNumber", phoneNumberValidation)}
        placeholder={persianWords.RegistrationProcess.phoneNumber}
        value={watch("phoneNumber")}
        onChange={(e) => setValue("phoneNumber", e.target.value)}
        errormessage={errors.phoneNumber?.message?.toString()}
      />
      <TextField
        {...register("password", passwordValidation)}
        placeholder={persianWords.RegistrationProcess.password}
        value={watch("password")}
        onChange={(e) => setValue("password", e.target.value)}
        type="password"
        errormessage={errors.password?.message?.toString()}
      />
      <Flex justifycontent="flex-end" className="register__footer">
        <Button variant="contained" onClick={props.onSubmit}>
          {persianWords.RegistrationProcess.register}
        </Button>
      </Flex>
    </StyledWrapper>
  );
};

export default Register;
