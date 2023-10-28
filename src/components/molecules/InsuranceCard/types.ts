export interface IInsuranceCardPropsType {
  title: string;
  imageSrc: string;
  disabled?: boolean;
  onClick?: () => void;
}

export type CardWrapper = Pick<IInsuranceCardPropsType, "disabled">;
