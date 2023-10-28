import { http } from "../../config";
import {
  GetInsureCompanies,
  GetThirdDiscounts,
  GetVehicleTypes,
} from "./types";

class InsuranceTypesServices {
  static getVehicleTypes: GetVehicleTypes = () =>
    http.get("/product/vehicle/types");

  static getInsureCompanies: GetInsureCompanies = () =>
    http.get("/product/third/companies");

  static getThirdDiscounts: GetThirdDiscounts = () =>
    http.get("/product/third/third-discounts");
}

export default InsuranceTypesServices;
