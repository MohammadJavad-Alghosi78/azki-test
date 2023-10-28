import { http } from "../../config";
import { GetInsureCompanies, GetVehicleTypes } from "./types";

class InsuranceTypesServices {
  static getVehicleTypes: GetVehicleTypes = () =>
    http.get("/product/vehicle/types");

  static getInsureCompanies: GetInsureCompanies = () =>
    http.get("/product/third/companies");
}

export default InsuranceTypesServices;
