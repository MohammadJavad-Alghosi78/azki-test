// types
import { IWords } from "../types";

const persianWords: IWords = {
  shared: {
    previousStep: "مرحله قبل",
    nextStep: "مرحله بعد",
  },
  pageTitles: {
    insuranceComparisonAndPurchaseSystem: "سامانه مقایسه و خرید آنلاین بیمه",
  },
  RegistrationProcess: {
    register: "ثبت‌نام",
    firstName: "نام",
    lastName: "نام خانوادگی",
    phoneNumber: "شماره‌ موبایل",
    password: "رمز عبور",
  },
  inquiry: {
    chooseInsurance: "انتخاب بیمه",
    thirdPartyInsurance: "بیمه شخص ثالث",
    bodyInsurance: "بیمه بدنه",
    chooseCarModelAndType: "نوع و مدل خودروی خود را انتخاب کنید.",
    carType: "نوع خودرو",
    carModel: "مدل خودرو",
    choosePreviousInsuranceCompany: "شرکت بیمه‌گر قبلی خود را انتخاب کنید.",
    previousInsuranceCompany: "شرکت بیمه‌گر قبلی",
    chooseDiscountPercentageThirdInsuranceAndDriverAccidents:
      "درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.",
    discountPercentageThirdInsurance: "درصد تخفیف ثالث",
    discountPercentageDriverAccidents: "درصد تخفیف حوادث راننده",
    callForPrice: "استعلام قیمت",
  },
  validation: {
    required: "وارد کردن این فیلد اجباری است.",
    persianWordsPattern: "لطفا فقط از حروف فارسی استفاده کنید.",
    phoneNumberPattern: "لطفا شماره تلفن خود را به درستی وارد کنید.",
    passwordPattern:
      "باید حداقل از یک حرف انگلیسی کوچک، یک حرف انگیسی بزرگ و یک عدد استفاده کنید.",
    minLength: (n: number) => `باید حداقل ${n} کاراکتر وارد کنید.`,
    maxLength: (n: number) => `حداکثر میتوانید ${n} کاراکتر وارد کنید.`,
  },
};

export default persianWords;
