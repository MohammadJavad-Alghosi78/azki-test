// types
import { ICallToPriceContext } from "./types";

export const contextDefaultValues: ICallToPriceContext = {
  insuranceType: "thirdPartyInsurance",
  onInsuranceTypeChange: () => null,
  carType: "",
  onCarTypeChange: () => null,
  carModel: "",
  onCarModelChange: () => null,
  previousInsuranceCompany: "",
  onPreviousInsuranceCompany: () => null,
  discountPercentageThirdInsurance: "",
  onDiscountPercentageThirdInsurance: () => null,
  discountPercentageDriverAccidents: "",
  onDiscountPercentageDriverAccidents: () => null,
};
