// node_modules
import { FC, ReactNode, useState } from "react";
// context
import { CallToPriceContext } from "../../context";
// types
import { InsuranceType } from "../../context/types";

interface ICallToPriceProvider {
  children: ReactNode;
}

const CallToPriceProvider: FC<ICallToPriceProvider> = ({ children }) => {
  const [insuranceType, setInsuranceType] = useState<InsuranceType>(
    "thirdPartyInsurance"
  );
  const [carType, setCarType] = useState("");
  const [carModel, setCarModel] = useState("");
  const [previousInsuranceCompany, setPreviousInsuranceCompany] = useState("");
  const [
    discountPercentageThirdInsurance,
    setDiscountPercentageThirdInsurance,
  ] = useState("");
  const [
    discountPercentageDriverAccidents,
    setDiscountPercentageDriverAccidents,
  ] = useState("");

  // CONTEXT VALUES
  const handleContextValue = () => ({
    insuranceType,
    onInsuranceTypeChange: (t: InsuranceType) => setInsuranceType(t),
    carType,
    onCarTypeChange: (t: string) => setCarType(t),
    carModel,
    onCarModelChange: (m: string) => setCarModel(m),
    previousInsuranceCompany,
    onPreviousInsuranceCompany: (c: string) => setPreviousInsuranceCompany(c),
    discountPercentageThirdInsurance,
    onDiscountPercentageThirdInsurance: (t: string) =>
      setDiscountPercentageThirdInsurance(t),
    discountPercentageDriverAccidents,
    onDiscountPercentageDriverAccidents: (a: string) =>
      setDiscountPercentageDriverAccidents(a),
  });

  return (
    <CallToPriceContext.Provider value={handleContextValue()}>
      {children}
    </CallToPriceContext.Provider>
  );
};

export default CallToPriceProvider;
