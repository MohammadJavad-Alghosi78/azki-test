import { createContext } from "react";
import { ICallToPriceContext } from "./types";
import { contextDefaultValues } from "./constants";

export const CallToPriceContext =
  createContext<ICallToPriceContext>(contextDefaultValues);
