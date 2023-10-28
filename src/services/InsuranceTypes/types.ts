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
