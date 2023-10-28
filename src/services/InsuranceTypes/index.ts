import { http } from "../../config";
import { GetVehicleTypes } from "./types";

class InsuranceTypesServices {
  static getVehicleTypes: GetVehicleTypes = () =>
    http.get("/product/vehicle/types");
}

export default InsuranceTypesServices;
