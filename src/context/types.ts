export type InsuranceType = "body" | "thirdPartyInsurance";

export interface ICallToPriceContext {
  insuranceType: InsuranceType;
  onInsuranceTypeChange: (t: InsuranceType) => void;
  carType: string;
  onCarTypeChange: (t: string) => void;
  carModel: string;
  onCarModelChange: (m: string) => void;
  previousInsuranceCompany: string;
  onPreviousInsuranceCompany: (c: string) => void;
  discountPercentageThirdInsurance: string;
  onDiscountPercentageThirdInsurance: (t: string) => void;
  discountPercentageDriverAccidents: string;
  onDiscountPercentageDriverAccidents: (a: string) => void;
}
