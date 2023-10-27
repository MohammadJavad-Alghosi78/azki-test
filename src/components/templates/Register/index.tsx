import { FC } from "react";
import { IRegisterPropsType } from "./types";
import { useFormContext } from "react-hook-form";
import { StyledWrapper } from "./styled";
import { Button, Flex, TextField, Typography } from "../../atoms";
import { persianWords } from "../../../translation";

const Register: FC<IRegisterPropsType> = (props) => {
  const {
    register,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useFormContext();
  console.log(isValid, errors);
  return (
    <StyledWrapper>
      <Typography variant="heading" className="register__title">
        {persianWords.RegistrationProcess.register}
      </Typography>
      <Flex justifyContent="space-between" gap="12px">
        <TextField
          {...register("firstName", { required: true })}
          placeholder={persianWords.RegistrationProcess.firstName}
          value={watch("firstName")}
          onChange={(e) => setValue("firstName", e.target.value)}
          className="register__name"
        />
        <TextField
          {...register("lastName", { required: true })}
          placeholder={persianWords.RegistrationProcess.lastName}
          value={watch("lastName")}
          onChange={(e) => setValue("lastName", e.target.value)}
          className="register__name"
        />
      </Flex>
      <TextField
        {...register("phoneNumber", { required: true })}
        placeholder={persianWords.RegistrationProcess.phoneNumber}
        value={watch("phoneNumber")}
        onChange={(e) => setValue("phoneNumber", e.target.value)}
      />
      <TextField
        {...register("password", { required: true })}
        placeholder={persianWords.RegistrationProcess.password}
        value={watch("password")}
        onChange={(e) => setValue("password", e.target.value)}
        type="password"
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
