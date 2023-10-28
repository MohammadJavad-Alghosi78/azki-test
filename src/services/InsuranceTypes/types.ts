import { AxiosResponse } from "axios";

export interface IUsage {
  id: number;
  title: string;
}

export interface IVehicleResponse {
  id: number;
  title: string;
  usages: Array<IUsage>;
}

export type GetVehicleTypes = () => Promise<
  AxiosResponse<Array<IVehicleResponse>>
>;

export interface ICompanyFeatures {
  description: string;
  icon: string;
  newRelease: boolean;
  title: string;
}

export interface IHelpIcon {
  title: string;
  url: string;
}

export interface IInstallmentDetails {
  percent: number;
  month: number;
}

export interface IInstallment {
  default: boolean;
  description: string;
  enable: boolean;
  enableForSellers: boolean;
  installments: Array<IInstallmentDetails>;
  label: string;
  title: string;
  type: number;
}

export interface ICompany {
  available: boolean;
  azkiDiscountTitle: string;
  azkiPenaltyDiscountEnable: boolean;
  bimitoDiscountPercent: number;
  bimitoDiscountTitle: string;
  branchDiscountPercent: number;
  branchNumber: number;
  cashPayment: boolean;
  companyDiscountPercent: number;
  complaintResponseTime: number;
  damagedShortTermEnable: boolean;
  description: string;
  enable: boolean;
  enableExpireDatePayment: boolean;
  extraPenaltyPercent: number;
  extraPercent: number;
  features: Array<ICompanyFeatures>;
  forgivenessDescription: string;
  giftTitle: string;
  hasGift: boolean;
  helpIcons: Array<IHelpIcon>;
  hideDiscount: boolean;
  icon: boolean;
  id: number;
  installments: Array<IInstallment>;
  longPenaltyForgiveness: boolean;
  marketerDiscountPercent: number;
  marketerEnable: true;
  maxAzkiPenaltyDiscount: number;
  maxBimitoDiscount: number;
  maxBranchDiscount: number;
  maxCompanyDiscount: number;
  maxDayOfPenalty: number;
  maxMarketerDiscount: number;
  oldVehicleAge: number;
  oldVehiclePenaltyPercent: number;
  oldVehiclePercent: number;
  onlineDamage: boolean;
  productDescription: string;
  satisfaction: number;
  shortPenaltyForgiveness: boolean;
  title: string;
  wealthLevel: number;
}

export type GetInsureCompanies = () => Promise<AxiosResponse<Array<ICompany>>>;

export interface IDiscounts {
  id: number;
  title: string;
}

export type GetThirdDiscounts = () => Promise<AxiosResponse<Array<IDiscounts>>>;
