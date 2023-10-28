export interface IWords {
  shared: {
    previousStep: string;
    nextStep: string;
    close: string;
  };
  pageTitles: {
    insuranceComparisonAndPurchaseSystem: string;
  };
  RegistrationProcess: {
    register: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
  };
  insuranceTypes: {
    thirdParty: string;
    body: string;
  };
  inquiry: {
    insuranceType: string;
    chooseInsurance: string;
    thirdPartyInsurance: string;
    bodyInsurance: string;
    chooseCarModelAndType: string;
    carType: string;
    carModel: string;
    choosePreviousInsuranceCompany: string;
    previousInsuranceCompany: string;
    chooseDiscountPercentageThirdInsuranceAndDriverAccidents: string;
    discountPercentageThirdInsurance: string;
    discountPercentageDriverAccidents: string;
    callForPrice: string;
  };
  validation: {
    required: string;
    persianWordsPattern: string;
    phoneNumberPattern: string;
    passwordPattern: string;
    minLength: (n: number) => string;
    maxLength: (n: number) => string;
  };
}
