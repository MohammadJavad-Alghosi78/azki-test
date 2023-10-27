export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

export interface IRegisterPropsType {
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}
